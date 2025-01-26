
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";
import "../components/Navigation.css"; // Import the centered styles

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="Navigation">
      <div className="nav-auth">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/companies" className="nav-link">Companies</NavLink>
        <NavLink to="/jobs" className="nav-link">Jobs</NavLink>

        {currentUser ? (
          <>
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
            <button onClick={logout} className="nav-button">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavLink to="/signup" className="nav-link">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
