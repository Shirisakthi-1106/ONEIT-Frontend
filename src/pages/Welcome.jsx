import { Link } from "react-router-dom";

const layout = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background:
    "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
  fontFamily: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
};

const main = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 32px",
  position: "relative",
  zIndex: 1,
};

const card = {
  width: "100%",
  maxWidth: "1200px",
  minHeight: "320px",
  padding: "70px 80px 60px",
  borderRadius: "40px",
  background:
    "linear-gradient(145deg, rgba(8,18,70,0.96), rgba(10,40,120,0.98))",
  boxShadow:
    "0 40px 120px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255,255,255,0.05)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  textAlign: "center",
};

const highlight = {
  display: "inline-block",
  padding: "6px 18px",
  borderRadius: "999px",
  fontSize: "0.8rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#e3f3ff",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(150,200,255,0.3))",
  marginBottom: "22px",
};

const title = {
  fontSize: "3.5rem",
  margin: 0,
  lineHeight: 1.15,
};

const subtitle = {
  fontSize: "1.15rem",
  marginTop: "22px",
  color: "rgba(230, 238, 255, 0.95)",
};

const chipRow = {
  marginTop: "52px",
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
  justifyContent: "center",
};

const chip = {
  padding: "14px 42px",
  borderRadius: "999px",
  border: "1px solid rgba(163, 210, 255, 0.9)",
  background:
    "radial-gradient(circle at top left, rgba(110,190,255,0.8), rgba(9,25,80,0.85))",
  color: "#f5f7ff",
  fontSize: "1.02rem",
  cursor: "pointer",
  outline: "none",
  whiteSpace: "nowrap",
  boxShadow: "0 16px 45px rgba(0,0,0,0.6)",
  transition:
    "transform 0.18s ease, box-shadow 0.18s ease, background 0.22s ease, border-color 0.22s ease",
};

const footer = {
  padding: "18px 0 22px",
  textAlign: "center",
  fontSize: "0.86rem",
  color: "rgba(220, 232, 255, 0.85)",
  zIndex: 1,
};

const circlesWrapper = {
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: 0,
};

const circleBase = {
  position: "absolute",
  borderRadius: "50%",
  border: "2px solid rgba(180,255,255,0.9)",
  boxShadow:
    "0 0 40px rgba(0,255,255,0.45), 0 0 120px rgba(0,200,255,0.65)",
  transform: "translate(-50%, -50%)",
  background:
    "radial-gradient(circle, rgba(0,255,255,0.45) 0%, rgba(0,0,0,0) 65%)",
};

/* left‑side circle, moves mostly up/down in left third */
const circle1 = {
  ...circleBase,
  width: "420px",
  height: "420px",
  top: "75%",   // stays low‑left
  left: "12%",
  animation: "floatCircleLeft 9s ease-in-out infinite",
};

/* right‑side circle, moves up/down in right third */
const circle2 = {
  ...circleBase,
  width: "520px",
  height: "520px",
  top: "20%",
  left: "88%",
  borderColor: "rgba(255,170,255,0.85)",
  boxShadow:
    "0 0 40px rgba(255,130,255,0.5), 0 0 130px rgba(255,120,255,0.7)",
  background:
    "radial-gradient(circle, rgba(255,140,255,0.5) 0%, rgba(0,0,0,0) 65%)",
  animation: "floatCircleRight 11s ease-in-out infinite",
};

/* top‑middle smaller circle, moves gently and doesn’t cross others */
const circle3 = {
  ...circleBase,
  width: "260px",
  height: "260px",
  top: "8%",
  left: "40%",
  borderColor: "rgba(255,255,180,0.9)",
  boxShadow:
    "0 0 35px rgba(255,255,160,0.55), 0 0 110px rgba(255,255,140,0.75)",
  background:
    "radial-gradient(circle, rgba(255,255,180,0.6) 0%, rgba(0,0,0,0) 65%)",
  animation: "floatCircleTop 13s ease-in-out infinite",
};

export default function Welcome() {
  const handleHoverIn = (e) => {
    e.target.style.transform = "translateY(-3px)";
    e.target.style.boxShadow = "0 22px 60px rgba(0,0,0,0.8)";
    e.target.style.background =
      "radial-gradient(circle at top left, rgba(160,215,255,0.9), rgba(16,40,110,0.95))";
    e.target.style.borderColor = "rgba(230, 245, 255, 1)";
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 16px 45px rgba(0,0,0,0.6)";
    e.target.style.background =
      "radial-gradient(circle at top left, rgba(110,190,255,0.8), rgba(9,25,80,0.85))";
    e.target.style.borderColor = "rgba(163, 210, 255, 0.9)";
  };

  return (
    <>
      <style>
        {`
          /* left circle: stays on left, vertical float with slight horizontal sway */
          @keyframes floatCircleLeft {
            0%   { transform: translate(-50%, -50%) translate(-10px, 70px); }
            50%  { transform: translate(-50%, -50%) translate(10px, -70px); }
            100% { transform: translate(-50%, -50%) translate(-10px, 70px); }
          }

          /* right circle: stays on right, opposite phase to left circle */
          @keyframes floatCircleRight {
            0%   { transform: translate(-50%, -50%) translate(15px, -80px); }
            50%  { transform: translate(-50%, -50%) translate(-15px, 80px); }
            100% { transform: translate(-50%, -50%) translate(15px, -80px); }
          }

          /* top‑middle circle: gentle movement so it never reaches left/right zones */
          @keyframes floatCircleTop {
            0%   { transform: translate(-50%, -50%) translate(0px, 40px); }
            50%  { transform: translate(-50%, -50%) translate(0px, -40px); }
            100% { transform: translate(-50%, -50%) translate(0px, 40px); }
          }
        `}
      </style>

      <div style={layout}>
        <div style={circlesWrapper}>
          <div style={circle1} />
          <div style={circle2} />
          <div style={circle3} />
        </div>

        <main style={main}>
          <section style={card}>
            <div style={highlight}>Placement Portal</div>

            <h1 style={title}>Welcome to OneIT Placement Portal</h1>

            <p style={subtitle}>Select your dashboard to continue.</p>

            <div style={chipRow}>
              <Link to="/student">
                <button
                  style={chip}
                  onMouseEnter={handleHoverIn}
                  onMouseLeave={handleHoverOut}
                >
                  Student Dashboard
                </button>
              </Link>

              <Link to="/committee">
                <button
                  style={chip}
                  onMouseEnter={handleHoverIn}
                  onMouseLeave={handleHoverOut}
                >
                  Placement Committee Dashboard
                </button>
              </Link>

              <Link to="/admin">
                <button
                  style={chip}
                  onMouseEnter={handleHoverIn}
                  onMouseLeave={handleHoverOut}
                >
                  Admin Dashboard
                </button>
              </Link>
            </div>
          </section>
        </main>

        <footer style={footer}>Powered by OneIT Systems • v1.0</footer>
      </div>
    </>
  );
}
