const FRAPPE_URL = 'https://cumulations.m.frappe.cloud';

async function frappePost(path: string, data: Record<string, unknown> = {}) {
  const res = await fetch(`${FRAPPE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok && res.status !== 200) {
    const msg = json._server_messages
      ? JSON.parse(JSON.parse(json._server_messages)[0]).message
      : json.message || 'Something went wrong';
    throw new Error(msg);
  }
  return json;
}

export async function signUp(firstName: string, lastName: string, email: string, _password: string) {
  // Frappe's built-in sign_up creates the user and sends a verification email
  const res = await frappePost('/api/method/frappe.core.doctype.user.user.sign_up', {
    email,
    full_name: `${firstName} ${lastName}`,
    redirect_to: '',
  });
  // sign_up returns [0/1, message] — 0 = already exists, 1 = created
  return res;
}

export async function signIn(email: string, password: string) {
  const res = await frappePost('/api/method/login', {
    usr: email,
    pwd: password,
  });
  if (res.message === 'Logged In') {
    const user = {
      email,
      full_name: res.full_name || email,
      home_page: res.home_page || '/',
    };
    localStorage.setItem('stabledpp_user', JSON.stringify(user));
    return user;
  }
  throw new Error(res.message || 'Invalid credentials');
}

export async function forgotPassword(email: string) {
  return frappePost('/api/method/frappe.core.doctype.user.user.reset_password', {
    user: email,
  });
}

export function getUser() {
  const u = localStorage.getItem('stabledpp_user');
  return u ? JSON.parse(u) : null;
}

export function signOut() {
  localStorage.removeItem('stabledpp_user');
  fetch(`${FRAPPE_URL}/api/method/logout`, {
    method: 'POST',
    credentials: 'include',
  }).catch(() => {});
}
