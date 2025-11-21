import { Link } from "react-router-dom";

const page = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background:
    "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
  fontFamily: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  color: "#fff",
  padding: "40px 24px 28px",
};

const shell = {
  maxWidth: "1150px",
  margin: "0 auto",
  borderRadius: "34px",
  padding: "30px 30px 26px",
  background:
    "linear-gradient(140deg, rgba(6,16,60,0.97), rgba(9,32,105,0.98))",
  boxShadow:
    "0 38px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.16)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  marginBottom: "22px",
};

const leftHeader = {};

const pill = {
  display: "inline-block",
  padding: "4px 12px",
  borderRadius: "999px",
  fontSize: "0.76rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#e3f3ff",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.24), rgba(150,200,255,0.32))",
  marginBottom: "8px",
};

const title = { fontSize: "2.2rem", margin: "0 0 4px", lineHeight: 1.15 };

const subtitle = {
  fontSize: "0.96rem",
  color: "rgba(220,232,255,0.94)",
};

const rightHeader = {
  textAlign: "right",
  fontSize: "0.82rem",
  color: "rgba(205,220,255,0.88)",
};

const summaryCard = {
  borderRadius: "22px",
  padding: "18px 20px 16px",
  marginBottom: "22px",
  background:
    "radial-gradient(circle at top left, rgba(120,190,255,0.95), rgba(13,30,95,0.98))",
  border: "1px solid rgba(205,235,255,0.95)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  boxShadow: "0 22px 70px rgba(0,0,0,0.85)",
};

const summaryLeft = { display: "flex", alignItems: "center", gap: "14px" };

const avatar = {
  width: "54px",
  height: "54px",
  borderRadius: "16px",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.9), rgba(110,170,255,0.5))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#1f3a80",
  fontWeight: 700,
  fontSize: "1.3rem",
};

const summaryTextTitle = { fontSize: "1.02rem", fontWeight: 600 };
const summaryTextSub = {
  fontSize: "0.86rem",
  color: "rgba(6,18,70,0.95)",
};

const summaryRight = {
  display: "flex",
  gap: "18px",
};

const statBox = {
  minWidth: "120px",
  padding: "8px 10px",
  borderRadius: "14px",
  background: "rgba(6,16,60,0.55)",
  border: "1px solid rgba(210,230,255,0.6)",
  textAlign: "left",
  fontSize: "0.8rem",
  color: "rgba(220,232,255,0.96)",
};

const statLabel = { opacity: 0.8 };
const statValue = { marginTop: "3px", fontSize: "1rem", fontWeight: 600 };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px",
};

const tile = {
  position: "relative",
  borderRadius: "18px",
  padding: "16px 14px 14px",
  border: "1px solid rgba(170,205,255,0.9)",
  background:
    "radial-gradient(circle at top left, rgba(110,190,255,0.9), rgba(9,25,80,0.95))",
  boxShadow: "0 14px 40px rgba(0,0,0,0.75)",
  cursor: "pointer",
  overflow: "hidden",
  transition:
    "transform 0.16s ease, box-shadow 0.16s ease, background 0.2s ease, border-color 0.2s ease",
};

const tileGlow = {
  position: "absolute",
  inset: "-40%",
  opacity: 0.18,
  background:
    "radial-gradient(circle at top, rgba(255,255,255,0.8), transparent 55%)",
  pointerEvents: "none",
};

const tileContent = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const tileIcon = { fontSize: "1.3rem" };
const tileTitle = { fontSize: "0.98rem", fontWeight: 600 };
const tileDesc = {
  fontSize: "0.82rem",
  color: "rgba(220,232,255,0.94)",
};

const tileFooter = {
  marginTop: "4px",
  fontSize: "0.78rem",
  color: "rgba(200,215,255,0.95)",
};

const footer = {
  marginTop: "18px",
  textAlign: "center",
  fontSize: "0.84rem",
  color: "rgba(220,232,255,0.82)",
};

export default function StudentDashboard() {
  const onEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 22px 70px rgba(0,0,0,0.95)";
    e.currentTarget.style.background =
      "radial-gradient(circle at top left, rgba(165,220,255,1), rgba(18,45,125,0.98))";
    e.currentTarget.style.borderColor = "rgba(235,245,255,1)";
  };

  const onLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 14px 40px rgba(0,0,0,0.75)";
    e.currentTarget.style.background =
      "radial-gradient(circle at top left, rgba(110,190,255,0.9), rgba(9,25,80,0.95))";
    e.currentTarget.style.borderColor = "rgba(170,205,255,0.9)";
  };

  return (
    <div style={page}>
      <div style={shell}>
        <div style={header}>
          <div style={leftHeader}>
            <div style={pill}>Student space</div>
            <h2 style={title}>Student Dashboard</h2>
            <p style={subtitle}>
              Quick access to all placement tools you need every day.
            </p>
          </div>
          <div style={rightHeader}>
            Logged in as <strong>Student</strong>
            <br />
            Batch 2025 • CSE
          </div>
        </div>

        <div style={summaryCard}>
          <div style={summaryLeft}>
            <div style={avatar}>ST</div>
            <div>
              <div style={summaryTextTitle}>Today at a glance</div>
              <div style={summaryTextSub}>
                Check live drives, your applications and upcoming events.
              </div>
            </div>
          </div>
          <div style={summaryRight}>
            <div style={statBox}>
              <div style={statLabel}>Active drives</div>
              <div style={statValue}>3</div>
            </div>
            <div style={statBox}>
              <div style={statLabel}>Applications</div>
              <div style={statValue}>7</div>
            </div>
            <div style={statBox}>
              <div style={statLabel}>Events today</div>
              <div style={statValue}>1</div>
            </div>
          </div>
        </div>

        <div style={grid}>
          <Link to="/companies">
            <div style={tile} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div style={tileGlow} />
              <div style={tileContent}>
                <span style={tileIcon}>🏢</span>
                <div style={tileTitle}>Companies</div>
                <div style={tileDesc}>
                  View all eligible companies, roles and salary details.
                </div>
                <div style={tileFooter}>Go to companies →</div>
              </div>
            </div>
          </Link>

          <Link to="/applications">
            <div style={tile} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div style={tileGlow} />
              <div style={tileContent}>
                <span style={tileIcon}>📄</span>
                <div style={tileTitle}>My Applications</div>
                <div style={tileDesc}>
                  Track your submissions and application status.
                </div>
                <div style={tileFooter}>View all applications →</div>
              </div>
            </div>
          </Link>

          <Link to="/upload-offer">
            <div style={tile} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div style={tileGlow} />
              <div style={tileContent}>
                <span style={tileIcon}>📤</span>
                <div style={tileTitle}>Upload Offer Letter</div>
                <div style={tileDesc}>
                  Upload new offers and keep your records updated.
                </div>
                <div style={tileFooter}>Upload offer →</div>
              </div>
            </div>
          </Link>

          <Link to="/calendar">
            <div style={tile} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div style={tileGlow} />
              <div style={tileContent}>
                <span style={tileIcon}>🗓️</span>
                <div style={tileTitle}>Placement Calendar</div>
                <div style={tileDesc}>
                  Never miss upcoming tests, PPTs or interviews.
                </div>
                <div style={tileFooter}>Open calendar →</div>
              </div>
            </div>
          </Link>

          <Link to="/announcements">
            <div style={tile} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div style={tileGlow} />
              <div style={tileContent}>
                <span style={tileIcon}>📢</span>
                <div style={tileTitle}>Announcements</div>
                <div style={tileDesc}>
                  Read the latest messages from the placement cell.
                </div>
                <div style={tileFooter}>View announcements →</div>
              </div>
            </div>
          </Link>

          <Link to="/statistics">
            <div style={tile} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <div style={tileGlow} />
              <div style={tileContent}>
                <span style={tileIcon}>📊</span>
                <div style={tileTitle}>Placement Statistics</div>
                <div style={tileDesc}>
                  Explore historical trends and branch‑wise stats.
                </div>
                <div style={tileFooter}>Open statistics →</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div style={footer}>Logged in as Student • OneIT Placement Portal</div>
    </div>
  );
}
