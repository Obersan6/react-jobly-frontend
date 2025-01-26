import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import NotFound from "./NotFound";
import { useContext } from "react";
import UserContext from "../UserContext";

function AppRoutes({ login, signup }) {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/profile" element={currentUser ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

