import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

/* Generates star data once */
const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
    color: Math.random() > 0.7 ? "#FFE082" : "#F5C842",
  }));

const STARS = generateStars(120);

export default function SplashScreen() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const sparkleRef = useRef(null);

  /* Fade-in on mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Sparkle burst every 1.8s */
  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 90 + 5,
        y: Math.random() * 60 + 5,
        size: Math.random() * 12 + 8,
      };
      setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  /* Auto-advance after 45s idle (kiosk mode) */
  useEffect(() => {
    const t = setTimeout(() => navigate("/world"), 45000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 20% 30%, #1a0533 0%, #0B0D2A 55%, #060820 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── Starfield ── */}
      {STARS.map((star) => (
        <span
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: star.color,
            animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ── Floating sparkle bursts ── */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: "var(--color-gold)",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            animation: "sparkle-burst 1.6s ease-out forwards",
            pointerEvents: "none",
            zIndex: 5,
          }}
        />
      ))}

      {/* ── Top ambient glow blobs ── */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,33,168,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,200,66,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "2rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Film strip decoration */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "2rem" }}>
          {["🎬", "⭐", "🎭", "⭐", "🎬"].map((emoji, i) => (
            <span
              key={i}
              style={{
                fontSize: "1.4rem",
                animation: `bounce-subtle ${1.5 + i * 0.2}s ease-in-out infinite`,
                display: "inline-block",
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Brand badge */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(245,200,66,0.12)",
            border: "1px solid rgba(245,200,66,0.4)",
            borderRadius: "var(--radius-full)",
            padding: "6px 20px",
            marginBottom: "1.5rem",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            color: "var(--color-gold)",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          ✦ AI-Powered Experience ✦
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 900,
            background:
              "linear-gradient(135deg, #FFE082 0%, #F5C842 40%, #C49A00 70%, #FFE082 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.1,
            marginBottom: "0.5rem",
            textShadow: "none",
            letterSpacing: "0.04em",
          }}
        >
          BOLLYWOOD
        </h1>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
            fontWeight: 400,
            color: "var(--color-white-80)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          AI CINEMA BOOTH
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "180px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            margin: "1.5rem auto",
            opacity: 0.7,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-dramatic)",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--color-white-80)",
            marginBottom: "0.6rem",
            maxWidth: "480px",
          }}
        >
          Step into the spotlight.
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "3rem",
            maxWidth: "400px",
            lineHeight: 1.6,
          }}
        >
          Transform yourself into a Bollywood star with AI-powered face-swap magic
        </p>

        {/* CTA Button */}
        <button
          id="splash-get-started"
          onClick={() => navigate("/world")}
          className="gold-btn"
          style={{
            padding: "18px 64px",
            borderRadius: "var(--radius-full)",
            fontSize: "1.05rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "4rem",
          }}
        >
          🎬 &nbsp; Get Started
        </button>

        {/* Steps indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {[
            { num: "01", label: "Choose Character" },
            { num: "02", label: "Take Selfie" },
            { num: "03", label: "Get Your Poster" },
          ].map((step) => (
            <div key={step.num} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "2px solid rgba(245,200,66,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  color: "var(--color-gold)",
                  fontWeight: 700,
                }}
              >
                {step.num}
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em" }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom branding ── */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          width: "100%",
          textAlign: "center",
          zIndex: 10,
          opacity: 0.6,
        }}
      >
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
          Powered by &nbsp;
          <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>@zealinteractiveservices</span>
        </p>
      </div>
    </div>
  );
}
