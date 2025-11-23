import { useState } from "react";

export default function OfferUpload() {
  const [offerFile, setOfferFile] = useState(null);
  const [completionFile, setCompletionFile] = useState(null);
  const [status, setStatus] = useState("Pending");

  const page = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    color: "#f1f9ff",
    padding: "40px 16px",
    boxSizing: "border-box",
  };

  const card = {
    width: "100%",
    maxWidth: "560px",
    borderRadius: "32px",
    padding: "28px 26px 24px",
    background:
      "linear-gradient(135deg, rgba(8,16,60,0.96), rgba(16,40,120,0.97))",
    boxShadow:
      "0 36px 115px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.06)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    border: "1px solid rgba(255,255,255,0.2)",
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

  const uploadLabel = {
    fontWeight: 600,
    fontSize: "0.95rem",
    marginBottom: "6px",
  };

  const uploadBox = {
    borderRadius: "18px",
    border: "1.5px dashed rgba(190,215,255,0.8)",
    background:
      "radial-gradient(circle at top left, rgba(120,190,255,0.3), rgba(10,24,80,0.9))",
    padding: "16px 14px",
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  };

  const uploadIcon = { fontSize: "1.6rem" };

  const uploadHint = {
    fontSize: "0.8rem",
    color: "rgba(210,225,255,0.9)",
  };

  const fileInput = { display: "block", marginTop: "4px", color: "#e2ecff" };

  const button = {
    width: "100%",
    padding: "12px",
    borderRadius: "28px",
    border: "none",
    background:
      "linear-gradient(135deg, #50e3c2 0%, #4a90e2 45%, #4a6fea 100%)",
    color: "#041433",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 18px 60px rgba(74,111,234,0.65)",
    marginTop: "6px",
  };

  const statusRow = {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "0.88rem",
  };

  const statusPill = {
    padding: "4px 10px",
    borderRadius: "999px",
    background: "rgba(255,210,120,0.16)",
    border: "1px solid rgba(255,215,140,0.9)",
    color: "#ffd98a",
    fontSize: "0.78rem",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    fontWeight: 600,
  };

  // ---------- Upload handler (ML integration) ----------
  const handleSubmit = async () => {
    if (!offerFile) {
      alert("Upload your Offer Letter PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", offerFile); // MAIN ML INPUT
    formData.append("jobDescription", "Software Engineer 6 LPA role");

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      alert(
        "Resume Analysis:\n\n" +
          data.suggestions.map((s, i) => `${i + 1}. ${s}`).join("\n")
      );

      setStatus("Submitted");
    } catch (err) {
      alert("Upload failed. Server error.");
      console.log(err);
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={heading}>Upload Offer Letter</h2>
        <p style={sub}>
          Submit your final offer and completion letters in PDF format.  
          Your resume will also be analyzed using AI to improve your placement chances.
        </p>

        {/* Offer Letter */}
        <div style={{ marginBottom: "14px" }}>
          <div style={uploadLabel}>Offer Letter (PDF)</div>
          <label style={uploadBox}>
            <span style={uploadIcon}>📄</span>
            <span>Click to choose file</span>
            <span style={uploadHint}>Only PDF files are accepted.</span>

            <input
              type="file"
              accept="application/pdf"
              style={fileInput}
              onChange={(e) => setOfferFile(e.target.files[0])}
            />
          </label>
        </div>

        {/* Completion Letter */}
        <div>
          <div style={uploadLabel}>Completion Letter (PDF)</div>
          <label style={uploadBox}>
            <span style={uploadIcon}>✅</span>
            <span>Click to choose file</span>
            <span style={uploadHint}>
              Upload once internship / training is done.
            </span>

            <input
              type="file"
              accept="application/pdf"
              style={fileInput}
              onChange={(e) => setCompletionFile(e.target.files[0])}
            />
          </label>
        </div>

        <button style={button} onClick={handleSubmit}>
          Submit
        </button>

        <div style={statusRow}>
          <span>Status:</span>
          <span style={statusPill}>{status}</span>
        </div>
      </div>
    </div>
  );
}
