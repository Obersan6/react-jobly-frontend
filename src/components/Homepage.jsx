import { useContext } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome to Jobly</h1>
      {currentUser ? (
        <h2>Welcome back, {currentUser.username}!</h2>
      ) : (
        <p>
          <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link> to get started.
        </p>
      )}
    </div>
  );
}

export default Homepage;
