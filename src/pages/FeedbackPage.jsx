import { useState } from "react";

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, #6bdcff 0%, #3150ff 35%, #050a23 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  color: "#f1f9ff",
  padding: "40px 16px",
  boxSizing: "border-box",
};

const card = {
  width: "100%",
  maxWidth: "520px",
  borderRadius: "36px",
  padding: "32px 28px 30px",
  background:
    "linear-gradient(135deg, rgba(8,16,60,0.95), rgba(16,40,110,0.95))",
  boxShadow:
    "0 38px 120px rgba(0,0,0,0.95), inset 0 0 0 1px rgba(255,255,255,0.08)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255, 255, 255, 0.22)",
};

const heading = {
  fontSize: "2.3rem",
  margin: "0 0 22px",
  fontWeight: 600,
  color: "#daebff",
};

const section = { marginBottom: "20px" };

const label = {
  fontWeight: 600,
  marginBottom: "8px",
  display: "inline-block",
  fontSize: "1rem",
  color: "#c8e1ff",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1.5px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(20, 35, 80, 0.45)",
  color: "#c8e1ff",
  fontSize: "1rem",
  fontWeight: "500",
  boxShadow: "inset 0 0 15px rgba(50, 100, 200, 0.4)",
  outline: "none",
  transition: "border-color 0.3s ease",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
  minHeight: "90px",
};

const button = {
  width: "100%",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  background:
    "linear-gradient(135deg, #50e3c2 0%, #4a90e2 50%, #4a6fea 100%)",
  color: "#041433",
  fontWeight: "700",
  fontSize: "1.1rem",
  cursor: "pointer",
  boxShadow: "0 18px 60px rgba(74,111,234,0.6)",
  transition: "background 0.3s ease",
};

const starRatingContainer = {
  display: "flex",
  gap: "12px",
  fontSize: "2rem",
  color: "rgba(200, 230, 255, 0.4)",
  cursor: "pointer",
};

const starFilled = {
  color: "#50e3c2",
  filter: "drop-shadow(0 0 3px #50e3c2)",
  transition: "color 0.3s ease",
};

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={page}>
      <form style={card} onSubmit={(e) => e.preventDefault()}>
        <h2 style={heading}>Feedback</h2>

        <section style={section}>
          <label style={label}>Rating:</label>
          <div
            style={starRatingContainer}
            onMouseLeave={() => setHoverRating(0)}
            aria-label="Star rating"
          >
            {stars.map((star) => (
              <span
                key={star}
                style={star <= (hoverRating || rating) ? starFilled : {}}
                onMouseEnter={() => setHoverRating(star)}
                onClick={() => setRating(star)}
                role="button"
                tabIndex={0}
                aria-pressed={star === rating}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setRating(star);
                }}
              >
                ★
              </span>
            ))}
          </div>
        </section>

        <section style={section}>
          <label style={label} htmlFor="experience">
            Experience:
          </label>
          <textarea
            id="experience"
            style={textareaStyle}
            placeholder="Describe your experience..."
          />
        </section>

        <section style={section}>
          <label style={label} htmlFor="difficulty">
            Difficulty (1-10):
          </label>
          <input
            type="number"
            id="difficulty"
            min="1"
            max="10"
            style={inputStyle}
            placeholder="Rate difficulty"
          />
        </section>

        <section style={section}>
          <label style={label} htmlFor="questionBank">
            Upload Question Bank:
          </label>
          <input type="file" id="questionBank" style={{ color: "#c8e1ff" }} />
        </section>

        <button type="submit" style={button}>
          Submit
        </button>
      </form>
    </div>
  );
}
