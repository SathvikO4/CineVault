class AuthService {
  static async register(name, email, password) {
    const response = await fetch("http://localhost:8081/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) throw new Error("Registration failed");
    return response.json();
  }

  static async login(email, password) {
    const response = await fetch("http://localhost:8081/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Login failed");
    return response.json();
  }

  static logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  static getAuthToken() {
    return localStorage.getItem("token");
  }
}

export default AuthService;
