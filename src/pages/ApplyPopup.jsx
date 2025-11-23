import React, { useState } from "react";

const ApplyPopup = ({ onClose, companyName }) => {
  const [resume, setResume] = useState(null);

  const handleFile = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("company", companyName);

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(data.message || "Resume submitted successfully!");
      onClose();
    } catch (error) {
      alert("Upload failed. Try again.");
    }
  };

  return (
    <>
      {/* INLINE CSS — NO EXTERNAL FILES */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup-container {
          background: rgba(255, 255, 255, 0.12);
          padding: 28px;
          border-radius: 18px;
          backdrop-filter: blur(15px);
          width: 380px;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-family: 'Inter', sans-serif;
        }

        .popup-container h2 {
          margin-top: 0;
          font-size: 22px;
          font-weight: 600;
        }

        .file-label {
          display: block;
          margin: 15px 0;
          padding: 12px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          cursor: pointer;
        }

        .file-label input {
          margin-top: 10px;
        }

        .btn-row {
          display: flex;
          justify-content: space-between;
          margin-top: 22px;
        }

        .cancel-btn, .submit-btn {
          padding: 10px 22px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 500;
        }

        .submit-btn {
          background: #4c7bf3;
          color: white;
        }

        .cancel-btn {
          background: #888;
          color: white;
        }

      `}</style>

      <div className="popup-overlay">
        <div className="popup-container">
          <h2>Apply to {companyName}</h2>

          <label className="file-label">
            Upload Resume (PDF only)
            <input type="file" accept="application/pdf" onChange={handleFile} />
          </label>

          {resume && <p>Selected: {resume.name}</p>}

          <div className="btn-row">
            <button className="cancel-btn" onClick={onClose}>Cancel</button>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyPopup;
