
import { useState } from "react";
import JoblyApi from "../api";
import { useNavigate } from "react-router-dom";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let result = await login(formData);
      if (result.success) {
        navigate("/");
      } else {
        setError("Login failed: " + (result.err || "Invalid credentials"));
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username/password");
    }
  }
  

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </label>
        <label>Password:
          <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;

