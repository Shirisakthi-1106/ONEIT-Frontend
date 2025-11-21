import { useParams, Link } from "react-router-dom";

export default function CompanyDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Company Details: {id}</h2>

      <h3>Job Role: Software Engineer</h3>
      <p>Package: 6 LPA</p>
      <p>Eligibility: CGPA 7+</p>
      <p>Selection Rounds: Test → Interview</p>
      <p>Visit Schedule: 18 Dec</p>
      <p>Past Stats: 15 Offers</p>

      <button>Apply Now</button>
      <br /><br />
      <Link to="/feedback"><button>Add Feedback</button></Link>
    </div>
  );
}
