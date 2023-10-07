function login(role) {
  localStorage.setItem("authenticated", role);
}

function logout() {
  localStorage.removeItem("authenticated");
}

function checkAuth() {
  return localStorage.getItem("authenticated");
}
