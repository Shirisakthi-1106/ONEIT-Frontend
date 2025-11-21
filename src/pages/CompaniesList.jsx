import { useParams, Link } from "react-router-dom";

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
  fontFamily: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  color: "#fff",
  padding: "40px 16px",
};

const card = {
  width: "100%",
  maxWidth: "720px",
  borderRadius: "32px",
  padding: "26px 26px 22px",
  background:
    "linear-gradient(135deg, rgba(7,18,60,0.98), rgba(15,40,120,0.98))",
  boxShadow:
    "0 30px 110px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.18)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  marginBottom: "20px",
};

const leftHead = { display: "flex", alignItems: "center", gap: "14px" };

const logoCircle = {
  width: "54px",
  height: "54px",
  borderRadius: "18px",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.9), rgba(110,170,255,0.5))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1f3a80",
  fontWeight: 700,
  fontSize: "1.3rem",
};

const companyName = { fontSize: "1.15rem", fontWeight: 600 };
const roleText = {
  fontSize: "0.9rem",
  color: "rgba(215,228,255,0.9)",
};

const tag = {
  padding: "4px 11px",
  borderRadius: "999px",
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  background: "rgba(120,195,255,0.2)",
  border: "1px solid rgba(170,210,255,0.9)",
  color: "#e3f3ff",
};

const detailsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "10px 16px",
  fontSize: "0.9rem",
  marginBottom: "18px",
};

const label = { opacity: 0.78, fontSize: "0.8rem" };
const value = { marginTop: "2px", fontWeight: 550 };

const roundsBox = {
  marginTop: "6px",
  padding: "10px 12px",
  borderRadius: "16px",
  background: "rgba(6,16,70,0.8)",
  border: "1px solid rgba(175,205,255,0.8)",
  fontSize: "0.86rem",
};

const roundsTitle = { fontWeight: 550, marginBottom: "4px" };

const actionsRow = {
  marginTop: "18px",
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
};

const primaryBtn = {
  flex: 1,
  padding: "11px 18px",
  borderRadius: "999px",
  border: "none",
  background:
    "linear-gradient(135deg, #5cffc7 0%, #34b3ff 45%, #4777ff 100%)",
  color: "#041433",
  fontWeight: 650,
  fontSize: "0.96rem",
  cursor: "pointer",
  boxShadow: "0 18px 55px rgba(0,0,0,0.85)",
};

const secondaryBtn = {
  padding: "10px 18px",
  borderRadius: "999px",
  border: "1px solid rgba(185,215,255,0.9)",
  background: "transparent",
  color: "#e5efff",
  fontSize: "0.9rem",
  cursor: "pointer",
};

const hint = {
  marginTop: "10px",
  fontSize: "0.8rem",
  color: "rgba(210,225,255,0.88)",
};

export default function CompanyDetails() {
  const { id } = useParams();

  const onApply = () => {
    // hook actual apply logic here
    alert(`Applied to ${id} for Software Engineer`);
  };

  return (
    <div style={page}>
      <div style={card}>
        <div style={header}>
          <div style={leftHead}>
            <div style={logoCircle}>
              {String(id || "?")
                .toUpperCase()
                .slice(0, 2)}
            </div>
            <div>
              <div style={companyName}>Company: {id}</div>
              <div style={roleText}>Software Engineer • 6 LPA</div>
            </div>
          </div>
          <div style={tag}>On‑Campus</div>
        </div>

        <div style={detailsGrid}>
          <div>
            <div style={label}>Package</div>
            <div style={value}>6 LPA</div>
          </div>
          <div>
            <div style={label}>Eligibility</div>
            <div style={value}>CGPA 7+</div>
          </div>
          <div>
            <div style={label}>Visit Date</div>
            <div style={value}>18 Dec</div>
          </div>
          <div>
            <div style={label}>Selection</div>
            <div style={value}>Test → Interview</div>
          </div>
          <div>
            <div style={label}>Past Offers</div>
            <div style={value}>15</div>
          </div>
          <div>
            <div style={label}>Role type</div>
            <div style={value}>Full‑time</div>
          </div>
        </div>

        <div style={roundsBox}>
          <div style={roundsTitle}>Selection rounds</div>
          <div>1. Online Test (Aptitude + Coding)</div>
          <div>2. Technical / HR Interview</div>
        </div>

        <div style={actionsRow}>
          <button style={primaryBtn} onClick={onApply}>
            Apply Now
          </button>

          <Link to="/feedback">
            <button style={secondaryBtn}>Add Feedback</button>
          </Link>
        </div>

        <div style={hint}>
          Tip: Make sure your profile and resume are updated before applying.
        </div>
      </div>
    </div>
  );
}
