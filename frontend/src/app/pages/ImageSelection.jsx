import { useState } from "react";
import { useNavigate } from "react-router";

/* ─── Bollywood character templates ─────────────────────────────────────
   Place your template images in: frontend/public/images/
   Name them: template1.jpg, template2.jpg, ... template6.jpg
   Each image MUST contain a visible face for the face-swap to work.
──────────────────────────────────────────────────────────────────────── */
const templates = [
  { id: 1, title: "The Hero", subtitle: "Romantic Lead", image: "/images/template1.jpg", emoji: "🌹" },
  { id: 2, title: "The Villain", subtitle: "Dramatic Antagonist", image: "/images/template2.jpg", emoji: "⚡" },
  { id: 3, title: "The Diva", subtitle: "Leading Lady", image: "/images/template3.jpg", emoji: "👑" },
  { id: 4, title: "The Legend", subtitle: "Classic Bollywood", image: "/images/template4.jpg", emoji: "🎭" },
  { id: 5, title: "The Warrior", subtitle: "Action Star", image: "/images/template5.jpg", emoji: "🗡️" },
  { id: 6, title: "The Royale", subtitle: "Period Drama", image: "/images/template6.jpg", emoji: "💎" },
];

const generateStars = (n) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));
const STARS = generateStars(80);

export default function ImageSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleProceed = () => {
    if (!selected) return;
    sessionStorage.setItem("selectedTemplate", JSON.stringify(selected));
    navigate("/capture");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 30% 20%, #1a0533 0%, #0B0D2A 55%, #060820 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Starfield */}
      {STARS.map((s) => (
        <span
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "#F5C842",
            opacity: 0.6,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "-15%", left: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(108,33,168,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ── Header ── */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: "3rem" }}>
        <button
          id="back-to-home"
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(245,200,66,0.1)",
            border: "1px solid rgba(245,200,66,0.3)",
            borderRadius: "50%",
            width: 40,
            height: 40,
            cursor: "pointer",
            color: "var(--color-gold)",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          title="Back"
        >
          ←
        </button>

        <div style={{
          display: "inline-block",
          background: "rgba(245,200,66,0.1)",
          border: "1px solid rgba(245,200,66,0.35)",
          borderRadius: "var(--radius-full)",
          padding: "5px 18px",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "var(--color-gold)",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          ✦ Step 1 of 3 ✦
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #FFE082 0%, #F5C842 40%, #C49A00 70%, #FFE082 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.04em",
            marginBottom: "0.6rem",
          }}
        >
          Choose Your Character
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", fontStyle: "italic" }}>
          Select the Bollywood role you want to step into
        </p>
      </div>

      {/* ── Template Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.5rem",
          maxWidth: "900px",
          width: "100%",
          position: "relative",
          zIndex: 10,
          marginBottom: "3rem",
        }}
      >
        {templates.map((item) => {
          const isActive = selected?.id === item.id;
          return (
            <div
              key={item.id}
              id={`template-${item.id}`}
              onClick={() => setSelected(item)}
              style={{
                cursor: "pointer",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: isActive
                  ? "3px solid var(--color-gold)"
                  : "2px solid rgba(255,255,255,0.08)",
                boxShadow: isActive
                  ? "0 0 30px rgba(245,200,66,0.5), 0 8px 40px rgba(0,0,0,0.6)"
                  : "0 4px 20px rgba(0,0,0,0.4)",
                transform: isActive ? "scale(1.04)" : "scale(1)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                background: "rgba(255,255,255,0.04)",
                position: "relative",
              }}
            >
              {/* Selection badge */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 5,
                    background: "var(--color-gold)",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    color: "var(--color-navy)",
                    fontWeight: 800,
                  }}
                >
                  ✓
                </div>
              )}

              {/* Poster image */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  background: "linear-gradient(135deg, #1B2060 0%, #0B0D2A 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback when image not found */}
                <div
                  style={{
                    display: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #1B2060, #0B0D2A)",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "3.5rem" }}>{item.emoji}</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>
                    Upload template{item.id}.jpg
                  </span>
                </div>

                {/* Bottom gradient overlay */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(transparent, rgba(11,13,42,0.95))",
                }} />
              </div>

              {/* Caption */}
              <div
                style={{
                  padding: "12px 16px 16px",
                  background: "rgba(11,13,42,0.9)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: isActive ? "var(--color-gold)" : "var(--color-white)",
                    letterSpacing: "0.04em",
                    marginBottom: "2px",
                    transition: "color 0.3s",
                  }}
                >
                  {item.emoji} {item.title}
                </p>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Proceed Button ── */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <button
          id="proceed-to-capture"
          onClick={handleProceed}
          disabled={!selected}
          style={{
            padding: "18px 72px",
            borderRadius: "var(--radius-full)",
            fontSize: "1rem",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            border: "none",
            cursor: selected ? "pointer" : "not-allowed",
            transition: "all 0.3s ease",
            ...(selected
              ? {
                  background: "linear-gradient(135deg, #F5C842 0%, #C49A00 50%, #F5C842 100%)",
                  color: "var(--color-navy)",
                  boxShadow: "0 4px 30px rgba(245,200,66,0.5)",
                  transform: "translateY(0)",
                }
              : {
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.3)",
                  boxShadow: "none",
                }),
          }}
          onMouseEnter={(e) => {
            if (selected) {
              e.target.style.transform = "translateY(-3px) scale(1.03)";
              e.target.style.boxShadow = "0 8px 45px rgba(245,200,66,0.7)";
            }
          }}
          onMouseLeave={(e) => {
            if (selected) {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 4px 30px rgba(245,200,66,0.5)";
            }
          }}
        >
          🎬 &nbsp; Step Into The Booth
        </button>
        {!selected && (
          <p style={{ textAlign: "center", marginTop: "0.8rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>
            Select a character to continue
          </p>
        )}
      </div>

      {/* Bottom branding */}
      <div style={{ position: "absolute", bottom: "1.2rem", textAlign: "center", zIndex: 10, opacity: 0.5 }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
          Powered by <span style={{ color: "var(--color-gold)" }}>@zealinteractiveservices</span>
        </p>
      </div>
    </div>
  );
}
