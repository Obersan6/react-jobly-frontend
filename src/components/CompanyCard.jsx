import { Link } from "react-router-dom";

function CompanyCard({ name, handle, description, logoUrl }) {
  return (
    <div className="company-card">
      <Link to={`/companies/${handle}`}>
        <h3>{name}</h3>
        {logoUrl && <img src={logoUrl} alt={`${name} logo`} />}
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default CompanyCard;





