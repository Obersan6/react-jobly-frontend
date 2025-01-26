import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../api";
import UserContext from "../UserContext";

function Signup() {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  // State for errors & messages
  const [errors, setErrors] = useState(null);

  /** Handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
    setErrors(null); // Reset previous errors

    try {
      // Call API to register user
      const token = await JoblyApi.signup(formData);
      JoblyApi.setToken(token);
      localStorage.setItem("token", token);

      // Fetch user data
      const user = await JoblyApi.getCurrentUser(formData.username);
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  }

  /** Handle form input changes */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          First Name:
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>

      {/* Show errors if any */}
      {errors && <p style={{ color: "red" }}>{errors}</p>}
    </div>
  );
}

export default Signup;
