export default function PlacementCalendar() {
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
    maxWidth: "520px",
    borderRadius: "30px",
    padding: "26px 26px 22px",
    background:
      "linear-gradient(135deg, rgba(7,18,60,0.97), rgba(15,40,115,0.97))",
    boxShadow:
      "0 36px 115px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.06)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const heading = {
    fontSize: "2rem",
    margin: "0 0 6px",
    fontWeight: 600,
  };

  const sub = {
    fontSize: "0.9rem",
    marginBottom: "18px",
    color: "rgba(220,232,255,0.9)",
  };

  const timeline = {
    position: "relative",
    marginLeft: "18px",
    paddingLeft: "18px",
  };

  const verticalLine = {
    position: "absolute",
    left: "4px",
    top: 0,
    bottom: 0,
    width: "2px",
    background:
      "linear-gradient(to bottom, rgba(140,190,255,0.9), rgba(80,130,255,0.2))",
  };

  const item = {
    position: "relative",
    marginBottom: "16px",
  };

  const dot = {
    position: "absolute",
    left: "-18px",
    top: "4px",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "2px solid rgba(186,214,255,0.95)",
    background: "rgba(114,178,255,0.9)",
    boxShadow: "0 0 10px rgba(114,178,255,0.9)",
  };

  const label = {
    display: "inline-block",
    padding: "3px 9px",
    borderRadius: "999px",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    background: "rgba(120,190,255,0.16)",
    border: "1px solid rgba(170,210,255,0.8)",
    color: "#e3f3ff",
    marginBottom: "4px",
  };

  const text = { fontSize: "0.9rem", color: "rgba(230,238,255,0.96)" };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={heading}>Placement Calendar</h2>
        <p style={sub}>Key events scheduled for this drive cycle.</p>

        <div style={timeline}>
          <div style={verticalLine} />

          <div style={item}>
            <div style={dot} />
            <div style={label}>PPT</div>
            <div style={text}>12 Dec – Pre‑placement talk</div>
          </div>

          <div style={item}>
            <div style={dot} />
            <div style={label}>Test</div>
            <div style={text}>15 Dec – Online aptitude + coding test</div>
          </div>

          <div style={item}>
            <div style={dot} />
            <div style={label}>Interview</div>
            <div style={text}>20 Dec – Final interview</div>
          </div>
        </div>
      </div>
    </div>
  );
}
