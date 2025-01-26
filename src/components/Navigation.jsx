
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";
import "../components/Navigation.css";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="Navigation">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>

        {currentUser ? (
          <>
            <NavLink to="/companies" className="nav-link">Companies</NavLink>
            <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
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
