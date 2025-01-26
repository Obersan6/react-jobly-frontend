import { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../UserContext";

function Profile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    email: currentUser?.email || "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let updatedUser = await JoblyApi.updateProfile(currentUser.username, formData);
      setCurrentUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage(err[0]);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>Last Name:
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>Email:
          <input name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Profile;



