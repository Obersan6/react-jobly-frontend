import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import Navigation from "./components/Navigation";
import useLocalStorage from "./hooks/useLocalStorage";
import AppRoutes from "./components/Routes";

const TOKEN_STORAGE_KEY = "jobly-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_KEY, null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /** Load user data when token changes */
  useEffect(() => {
    async function getUser() {
      if (!token) {
        setCurrentUser(null);
        setIsLoading(false);
        return;
      }
      try {
        const { username } = jwtDecode(token);
        JoblyApi.setToken(token);
        const user = await JoblyApi.getCurrentUser(username);
        setCurrentUser(user);
      } catch (err) {
        console.error("Error loading user", err);
        setCurrentUser(null);
      }
      setIsLoading(false);
    }
    getUser();
  }, [token]);

  /** Login function */
  async function login(credentials) {
    try {
      const newToken = await JoblyApi.login(credentials.username, credentials.password);
      setToken(newToken);
      return { success: true };
    } catch (err) {
      console.error("Login failed", err);
      return { success: false, err };
    }
  }

  /** Signup function */
  async function signup(userData) {
    try {
      const newToken = await JoblyApi.signup(userData);
      setToken(newToken);
      return { success: true };
    } catch (err) {
      console.error("Signup failed", err);
      return { success: false, err };
    }
  }

  /** Logout function */
  function logout() {
    setToken(null);
    setCurrentUser(null);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Navigation logout={logout} currentUser={currentUser} />
        <AppRoutes login={login} signup={signup} />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
