export default function MyApplications() {
  const rows = [
    { company: "Infosys", test: "15 Dec", status: "Registered", interview: "20 Dec", result: "Pending" },
    { company: "TCS", test: "18 Dec", status: "Shortlisted", interview: "22 Dec", result: "Pending" },
  ];

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

  const shell = {
    width: "100%",
    maxWidth: "900px",
    borderRadius: "34px",
    padding: "28px 26px 24px",
    background:
      "linear-gradient(135deg, rgba(7,18,60,0.97), rgba(14,36,110,0.97))",
    boxShadow:
      "0 38px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const heading = {
    fontSize: "2.1rem",
    margin: "0 0 8px",
  };

  const sub = {
    fontSize: "0.94rem",
    marginBottom: "18px",
    color: "rgba(220,232,255,0.9)",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.9rem",
  };

  const th = {
    textAlign: "left",
    padding: "10px 12px",
    color: "rgba(210,225,255,0.9)",
    fontWeight: 600,
    borderBottom: "1px solid rgba(140,170,230,0.5)",
    backdropFilter: "blur(15px)",
  };

  const tr = {
    borderBottom: "1px solid rgba(60,90,150,0.6)",
  };

  const td = {
    padding: "10px 12px",
    color: "rgba(230,238,255,0.96)",
  };

  const statusPill = (status) => ({
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    background:
      status === "Shortlisted"
        ? "rgba(80, 250, 164, 0.18)"
        : "rgba(255, 210, 120, 0.18)",
    color:
      status === "Shortlisted"
        ? "#5cf8b2"
        : "#ffd57a",
    border:
      status === "Shortlisted"
        ? "1px solid rgba(120, 255, 190, 0.8)"
        : "1px solid rgba(255, 215, 130, 0.9)",
  });

  const resultPill = (result) => ({
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "0.78rem",
    background:
      result === "Pending"
        ? "rgba(130, 180, 255, 0.18)"
        : "rgba(120, 255, 180, 0.18)",
    color:
      result === "Pending"
        ? "#a9c7ff"
        : "#6dfbb6",
    border:
      result === "Pending"
        ? "1px solid rgba(165, 200, 255, 0.8)"
        : "1px solid rgba(160, 250, 190, 0.9)",
  });

  return (
    <div style={page}>
      <div style={shell}>
        <h2 style={heading}>My Applications</h2>
        <p style={sub}>
          Track test dates, interview schedules and current status of each drive.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Company</th>
                <th style={th}>Test Date</th>
                <th style={th}>Status</th>
                <th style={th}>Interview</th>
                <th style={th}>Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.company} style={tr}>
                  <td style={td}>{row.company}</td>
                  <td style={td}>{row.test}</td>
                  <td style={td}>
                    <span style={statusPill(row.status)}>{row.status}</span>
                  </td>
                  <td style={td}>{row.interview}</td>
                  <td style={td}>
                    <span style={resultPill(row.result)}>{row.result}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
