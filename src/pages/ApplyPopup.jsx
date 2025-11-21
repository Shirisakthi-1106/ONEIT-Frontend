import { Link } from "react-router-dom";

export default function ApplyPopup() {
  return (
    <div style={{ padding: "30px" }}>
      <h3>Do you want to apply for this drive?</h3>

      <Link to="/applications"><button>Confirm</button></Link>
      <br /><br />
      <Link to="/companies"><button>Cancel</button></Link>
    </div>
  );
}
