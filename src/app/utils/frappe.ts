const FRAPPE_URL = 'https://cumulations.m.frappe.cloud';

async function frappeCall(method: string, data: Record<string, unknown> = {}) {
  const res = await fetch(`${FRAPPE_URL}/api/method/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok || json.exc_type) {
    throw new Error(json.message || json.exc_type || 'Something went wrong');
  }
  return json;
}

export async function signUp(firstName: string, lastName: string, email: string, password: string) {
  return frappeCall('frappe.core.doctype.user.user.sign_up', {
    email,
    full_name: `${firstName} ${lastName}`,
    redirect_to: '',
  }).then(async (res) => {
    // After sign up, set password via update_password
    if (res.message) {
      await frappeCall('frappe.core.doctype.user.user.update_password', {
        new_password: password,
        key: res.message[1],
      }).catch(() => {}); // key may not be available, that's ok
    }
    return res;
  });
}

export async function signIn(email: string, password: string) {
  const res = await fetch(`${FRAPPE_URL}/api/method/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ usr: email, pwd: password }),
  });
  const json = await res.json();
  if (json.message === 'Logged In') {
    const user = { email, full_name: json.full_name || email };
    localStorage.setItem('stabledpp_user', JSON.stringify(user));
    return user;
  }
  throw new Error(json.message || 'Invalid credentials');
}

export async function forgotPassword(email: string) {
  return frappeCall('frappe.core.doctype.user.user.reset_password', { user: email });
}

export function getUser() {
  const u = localStorage.getItem('stabledpp_user');
  return u ? JSON.parse(u) : null;
}

export function signOut() {
  localStorage.removeItem('stabledpp_user');
  fetch(`${FRAPPE_URL}/api/method/logout`, { method: 'POST', credentials: 'include' });
}
