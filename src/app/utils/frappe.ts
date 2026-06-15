const FRAPPE_URL = 'https://cumulations.m.frappe.cloud';

async function frappeCall(method: string, data: Record<string, unknown> = {}) {
  const res = await fetch(`${FRAPPE_URL}/api/method/${method}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok || json.exc_type) {
    throw new Error(json._server_messages ? JSON.parse(JSON.parse(json._server_messages)[0]).message : json.message || 'Something went wrong');
  }
  return json;
}

export async function signUp(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  companyName: string,
  country: string
) {
  const res = await frappeCall('dpp_signup', {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
    company_name: companyName,
    country,
  });
  return res;
}

export async function signIn(email: string, password: string) {
  const res = await frappeCall('dpp_signin', { email, password });
  if (res.message === 'Logged In') {
    localStorage.setItem('stabledpp_user', JSON.stringify(res.user));
    return res.user;
  }
  throw new Error('Invalid credentials');
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
}
