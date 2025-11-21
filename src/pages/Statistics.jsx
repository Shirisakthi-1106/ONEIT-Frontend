export default function Statistics() {
  const page = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#f1f7ff",
    padding: "40px 16px",
    boxSizing: "border-box",
  };

  const card = {
    width: "100%",
    maxWidth: "540px",
    borderRadius: "30px",
    padding: "28px 24px 22px",
    background:
      "linear-gradient(135deg, rgba(9,19,60,0.97), rgba(14,37,110,0.98))",
    boxShadow:
      "0 36px 110px rgba(0,0,0,0.96), 0 0 0 1px rgba(255,255,255,0.05)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const heading = {
    fontSize: "2rem",
    margin: "0 0 14px",
    fontWeight: 600,
  };

  const sub = {
    fontSize: "0.92rem",
    marginBottom: "20px",
    color: "rgba(220,232,255,0.86)",
  };

  const tiles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "18px",
  };

  const infoTile = {
    borderRadius: "18px",
    padding: "18px 16px",
    background:
      "linear-gradient(110deg, rgba(120,190,255,0.20), rgba(30,60,140,0.70))",
    border: "1.5px solid rgba(160,210,255,0.4)",
    color: "#e3f5ff",
    fontSize: "0.96rem",
    boxShadow: "0 10px 32px rgba(0,0,0,0.40)",
    display: "flex",
    alignItems: "center",
    gap: "18px",
  };

  const tileLabel = {
    fontWeight: 600,
    fontSize: "1rem",
    marginRight: "9px",
    color: "#7edaff",
    letterSpacing: "0.04em",
  };

  const icon = { fontSize: "1.3rem" };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={heading}>Placement Statistics</h2>
        <p style={sub}>
          Explore placement performance trends. Data will be available here soon.
        </p>

        <div style={tiles}>
          <div style={infoTile}>
            <span style={icon}>🏢</span>
            <span style={tileLabel}>Company-wise offers:</span>
            <span>Coming soon…</span>
          </div>

          <div style={infoTile}>
            <span style={icon}>👥</span>
            <span style={tileLabel}>Batch-wise numbers:</span>
            <span>Coming soon…</span>
          </div>

          <div style={infoTile}>
            <span style={icon}>📊</span>
            <span style={tileLabel}>Year-wise trends:</span>
            <span>Coming soon…</span>
          </div>
        </div>
      </div>
    </div>
  );
}
