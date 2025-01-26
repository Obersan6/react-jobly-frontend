import { useState, useEffect } from "react";
import JoblyApi from "../api";
import { Link, useNavigate } from "react-router-dom";

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await JoblyApi.getCompanies();
        if (companies.length === 0) {
          navigate("/", { state: { message: "No companies found." } });
        } else {
          setCompanies(companies);
        }
      } catch (err) {
        console.error("Failed to load companies:", err);
        navigate("/", { state: { message: "Error loading companies." } });
      }
    }
    fetchCompanies();
  }, []);

  async function handleSearch(evt) {
    evt.preventDefault();
    try {
      let companies = await JoblyApi.getCompanies(searchTerm);
      setCompanies(companies);
    } catch (err) {
      console.error("Search failed:", err);
    }
  }

  if (!companies) return <p>Loading...</p>;

  return (
    <div>
      <h1>Company Listings</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display Companies */}
      <ul>
        {companies.map(company => (
          <li key={company.handle}>
            <Link to={`/companies/${company.handle}`}>
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;


