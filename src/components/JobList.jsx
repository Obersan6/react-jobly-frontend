import { useState, useEffect } from "react";
import JoblyApi from "../api";
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      try {
        let jobs = await JoblyApi.getJobs();
        if (jobs.length === 0) {
          navigate("/", { state: { message: "No jobs found." } });
        } else {
          setJobs(jobs);
        }
      } catch (err) {
        console.error("Failed to load jobs:", err);
        navigate("/", { state: { message: "Error loading jobs." } });
      }
    }
    fetchJobs();
  }, []);

  async function handleSearch(evt) {
    evt.preventDefault();
    try {
      let jobs = await JoblyApi.getJobs(searchTerm);
      setJobs(jobs);
    } catch (err) {
      console.error("Search failed:", err);
    }
  }

  if (!jobs) return <p>Loading...</p>;

  return (
    <div>
      <h1>Job Listings</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {jobs.length > 0 ? (
          jobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default JobList;



