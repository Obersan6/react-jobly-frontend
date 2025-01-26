import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "./JobCard";

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCompany() {
      try {
        let companyData = await JoblyApi.getCompany(handle);
        if (!companyData) {
          navigate("/", { state: { message: "Company not found." } });
        } else {
          setCompany(companyData);
        }
      } catch (err) {
        console.error("Error fetching company:", err);
        navigate("/", { state: { message: "Error loading company details." } });
      }
    }
    fetchCompany();
  }, [handle]);

  if (!company) return null; 

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>

      <h2>Available Jobs</h2>
      {company.jobs.length ? (
        company.jobs.map(job => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs available at this company.</p>
      )}
    </div>
  );
}

export default CompanyDetail;



