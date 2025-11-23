import React, { useState } from "react";

export default function Applications() {
  const [applications, setApplications] = useState([
    {
      company: "Infosys",
      testDate: "15 Dec",
      status: "REGISTERED",
      interview: "20 Dec",
      result: "Pending",
      jd: "Software Engineer required: JavaScript, React, Node.js, data structures, algorithms."
    },
    {
      company: "TCS",
      testDate: "18 Dec",
      status: "SHORTLISTED",
      interview: "22 Dec",
      result: "Pending",
      jd: "Full-stack role: Java, Spring, SQL, problem solving."
    },
    {
      company: "Wipro",
      testDate: "25 Dec",
      status: "NOT APPLIED",
      interview: "-",
      result: "-",
      jd: "Software engineer intern: C/C++, DS, OOP, teamwork."
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  // Styles (modal supports long content with scrolling)
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      boxSizing: "border-box",
      fontFamily:
        "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      color: "#f1f7ff"
    },
    card: {
      width: "100%",
      maxWidth: "1100px",
      borderRadius: "28px",
      padding: "34px",
      background:
        "linear-gradient(180deg, rgba(7,17,58,0.98), rgba(10,22,70,0.98))",
      boxShadow: "0 36px 115px rgba(2,6,20,0.85)",
      border: "1px solid rgba(255,255,255,0.05)"
    },
    titleRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "18px"
    },
    title: { fontSize: "40px", fontWeight: 700, margin: 0 },
    sub: { color: "rgba(220,232,255,0.82)" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
    th: {
      textAlign: "left",
      padding: "14px 18px",
      color: "rgba(210,225,255,0.9)",
      borderBottom: "1px solid rgba(255,255,255,0.04)"
    },
    td: {
      padding: "14px 18px",
      color: "rgba(230,238,255,0.95)"
    },
    statusPill: (mode) => ({
      display: "inline-block",
      padding: "6px 12px",
      borderRadius: "999px",
      fontSize: "0.78rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      ...(mode === "REGISTERED"
        ? {
            background: "rgba(255,210,120,0.12)",
            color: "#ffd98a",
            border: "1px solid rgba(255,215,140,0.7)"
          }
        : mode === "SHORTLISTED"
        ? {
            background: "rgba(80,250,164,0.12)",
            color: "#5cf8b2",
            border: "1px solid rgba(120,255,190,0.65)"
          }
        : {
            background: "rgba(116,125,140,0.06)",
            color: "#9fb0d6",
            border: "1px solid rgba(130,150,200,0.06)"
          })
    }),
    applyBtn: {
      padding: "10px 18px",
      borderRadius: "22px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      background: "linear-gradient(90deg,#3fe0c1 0%,#4da6ff 60%)",
      color: "#041433",
      boxShadow: "0 12px 30px rgba(74,111,234,0.18)"
    },
    modalOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(2,6,20,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    },
    modalBox: {
      width: "94%",
      maxWidth: "520px",
      maxHeight: "80vh",        // important for scroll
      overflowY: "auto",        // important for scroll
      background: "linear-gradient(180deg,#071146,#0c274f)",
      borderRadius: "16px",
      padding: "20px",
      border: "1px solid rgba(255,255,255,0.06)"
    },
    fileBox: {
      padding: "12px",
      borderRadius: "12px",
      border: "1px dashed rgba(150,180,255,0.18)",
      background: "rgba(255,255,255,0.02)",
      marginTop: "12px",
      textAlign: "center"
    },
    smallBtn: {
      padding: "10px 14px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      marginRight: "8px"
    },
    resultBox: {
      marginTop: "12px",
      padding: "12px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.02)",
      color: "#e6f0ff"
    }
  };

  const openApplyModal = (companyObj) => {
    setSelectedCompany(companyObj);
    setAnalysis(null);
    setResumeFile(null);
    setShowModal(true);
  };

  const submitResume = async () => {
    if (!resumeFile) {
      alert("Please upload a PDF resume first");
      return;
    }
    setLoading(true);

    try {
      const form = new FormData();
      form.append("resume", resumeFile);
      form.append("jobDescription", selectedCompany.jd || "");

      const res = await fetch("http://localhost:5000/analyze-resume", {
        method: "POST",
        body: form
      });

      if (!res.ok) throw new Error("Server error");
      const json = await res.json();
      setAnalysis(json);
    } catch (err) {
      console.error(err);
      alert("Analysis failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  const addApplicationRow = (companyName) => {
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short"
    });
    setApplications((prev) => [
      ...prev,
      {
        company: companyName,
        testDate: today,
        status: "REGISTERED",
        interview: "TBD",
        result: "Pending",
        jd: selectedCompany?.jd
      }
    ]);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.titleRow}>
          <div>
            <h1 style={styles.title}>My Applications</h1>
            <div style={styles.sub}>
              Track test dates, interview schedules and status.
            </div>
          </div>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Company</th>
              <th style={styles.th}>Test Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Interview</th>
              <th style={styles.th}>Result</th>
              <th style={styles.th}>Apply</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={styles.td}>{app.company}</td>
                <td style={styles.td}>{app.testDate}</td>
                <td style={styles.td}>
                  <span style={styles.statusPill(app.status)}>
                    {app.status}
                  </span>
                </td>
                <td style={styles.td}>{app.interview}</td>
                <td style={styles.td}>{app.result}</td>
                <td style={styles.td}>
                  {app.status === "NOT APPLIED" ? (
                    <button
                      style={styles.applyBtn}
                      onClick={() => openApplyModal(app)}
                    >
                      Apply Now
                    </button>
                  ) : (
                    <span style={{ color: "rgba(180,200,240,0.8)" }}>
                      ✔ Already Applied
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalBox}>
              <h3 style={{ margin: 0 }}>
                Apply for {selectedCompany?.company}
              </h3>
              <p style={{ marginTop: 6, color: "rgba(200,220,255,0.75)" }}>
                Upload resume & get AI match score.
              </p>

              <div style={styles.fileBox}>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                />
                <div style={{ marginTop: 8, color: "rgba(200,220,255,0.7)" }}>
                  {resumeFile ? resumeFile.name : "No file chosen"}
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <button
                  style={{ ...styles.smallBtn, ...styles.applyBtn }}
                  onClick={submitResume}
                >
                  {loading ? "Analyzing..." : "Analyze Resume"}
                </button>
                <button
                  style={{
                    ...styles.smallBtn,
                    background: "linear-gradient(90deg,#ff9a9e,#ff6b6b)",
                    color: "#041433"
                  }}
                  onClick={() => {
                    addApplicationRow(selectedCompany.company);
                    setShowModal(false);
                    setResumeFile(null);
                    setAnalysis(null);
                    alert("Application submitted.");
                  }}
                >
                  Submit Application
                </button>
                <button
                  style={{
                    ...styles.smallBtn,
                    background: "transparent",
                    color: "#cfeaff",
                    border: "1px solid rgba(255,255,255,0.06)"
                  }}
                  onClick={() => {
                    setShowModal(false);
                    setResumeFile(null);
                    setAnalysis(null);
                  }}
                >
                  Cancel
                </button>
              </div>

              {analysis && (
                <div style={styles.resultBox}>
                  <div>
                    <strong>Match score:</strong>{" "}
                    {analysis.score !== undefined
                      ? Math.round(analysis.score) + " / 100"
                      : "N/A"}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <strong>Suggestions:</strong>
                    <ul>
                      {Array.isArray(analysis.suggestions) && analysis.suggestions.length > 0
                        ? analysis.suggestions.map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))
                        : <li>No suggestions available.</li>}
                    </ul>
                  </div>
                  {Array.isArray(analysis.missingKeywords) && analysis.missingKeywords.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                      <strong>Missing keywords:</strong>{" "}
                      {analysis.missingKeywords.join(", ")}
                    </div>
                  )}
                  {analysis.extracted_text && (
                    <div style={{ marginTop: 8, fontSize: "0.97em", color: "#a0bbf9" }}>
                      <strong>Extracted resume text preview:</strong>
                      <div style={{ marginTop: 4 }}>{analysis.extracted_text}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
