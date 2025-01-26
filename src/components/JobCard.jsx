import { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../UserContext";

function JobCard({ job }) {
  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(() => {
    return currentUser?.appliedJobs?.includes(job.id);
  });

  async function apply() {
    if (applied) return;
    try {
      await JoblyApi.applyToJob(currentUser.username, job.id);
      setApplied(true);

      let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
      appliedJobs.push(job.id);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    } catch (err) {
      console.error("Failed to apply:", err);
    }
  }

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>Salary: {job.salary ? `$${job.salary}` : "N/A"}</p>
      <p>Equity: {job.equity || "N/A"}</p>
      <p>Company: {job.companyHandle}</p>
      <button onClick={apply} disabled={applied}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;

