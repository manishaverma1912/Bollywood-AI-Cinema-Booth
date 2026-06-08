import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { uploadToS3 } from "../utils/s3Upload";

const generateStars = (n) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));
const STARS = generateStars(70);

const STEPS = [
  { icon: "🔍", label: "Detecting your face..." },
  { icon: "🎭", label: "Merging with character..." },
  { icon: "✨", label: "Adding Bollywood magic..." },
  { icon: "🎬", label: "Finalising your poster..." },
];

export default function Processing() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  /* Cycle through loading steps */
  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((i) => (i + 1) % STEPS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    processImage();
  }, []);

  const processImage = async () => {
    try {
      const templateData = sessionStorage.getItem("selectedTemplate");
      const selfieData = sessionStorage.getItem("capturedSelfie");

      if (!templateData || !selfieData) {
        navigate("/select");
        return;
      }

      const template = JSON.parse(templateData);
      const selfieBlob = await fetch(selfieData).then((r) => r.blob());
      const templateBlob = await fetch(template.image).then((r) => r.blob());

      const formData = new FormData();
      formData.append("source_image", selfieBlob, "selfie.jpg");
      formData.append("target_image", templateBlob, "template.jpg");

      const response = await fetch(
        "https://bollywood-ai-cinema-booth.onrender.com/swap",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Processing failed");

      const resultBlob = await response.blob();
      const s3ImageUrl = await uploadToS3(resultBlob);
      sessionStorage.setItem("finalImageUrl", s3ImageUrl);
      navigate("/download");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 50% 40%, #1a0533 0%, #0B0D2A 55%, #060820 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
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
            opacity: 0.5,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "-15%", left: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(108,33,168,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-15%", right: "-10%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,200,66,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "480px" }}>
        {!error ? (
          <>
            {/* Clapperboard icon */}
            <div
              style={{
                fontSize: "5rem",
                marginBottom: "1.5rem",
                display: "inline-block",
                animation: "bounce-subtle 2s ease-in-out infinite",
              }}
            >
              🎬
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFE082 0%, #F5C842 40%, #C49A00 70%, #FFE082 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.04em",
                marginBottom: "0.5rem",
              }}
            >
              Creating Your Poster
            </h1>

            <p
              style={{
                fontFamily: "var(--font-dramatic)",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.65)",
                fontSize: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              Lights… Camera… Action!
            </p>

            {/* Gold spinner ring */}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                border: "3px solid rgba(245,200,66,0.15)",
                borderTop: "3px solid var(--color-gold)",
                animation: "spin-slow 1s linear infinite",
                margin: "0 auto 2.5rem",
                boxShadow: "0 0 20px rgba(245,200,66,0.3)",
              }}
            />

            {/* Animated step label */}
            <div
              key={stepIndex}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(245,200,66,0.08)",
                border: "1px solid rgba(245,200,66,0.25)",
                borderRadius: "var(--radius-full)",
                padding: "10px 24px",
                animation: "fade-in 0.4s ease",
                marginBottom: "2rem",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>{STEPS[stepIndex].icon}</span>
              <span style={{ fontSize: "0.9rem", color: "var(--color-gold)", fontWeight: 500, letterSpacing: "0.04em" }}>
                {STEPS[stepIndex].label}
              </span>
            </div>

            {/* Step dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === stepIndex ? 24 : 8,
                    height: 8,
                    borderRadius: "var(--radius-full)",
                    background: i === stepIndex ? "var(--color-gold)" : "rgba(245,200,66,0.2)",
                    transition: "all 0.4s ease",
                  }}
                />
              ))}
            </div>

            <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>
              This may take 10–30 seconds
            </p>
          </>
        ) : (
          /* ── Error state ── */
          <>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>😕</div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 900,
                color: "var(--color-gold)",
                marginBottom: "0.8rem",
                letterSpacing: "0.04em",
              }}
            >
              Something Went Wrong
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: 1.6 }}>
              We couldn't process your image. Please make sure the backend server is running and both images contain a visible face.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                id="retry-processing"
                onClick={() => { setError(false); setStepIndex(0); processImage(); }}
                style={{
                  padding: "13px 32px",
                  borderRadius: "var(--radius-full)",
                  border: "2px solid rgba(245,200,66,0.4)",
                  background: "rgba(245,200,66,0.08)",
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                }}
              >
                🔄 Retry
              </button>
              <button
                id="back-to-capture"
                onClick={() => navigate("/capture")}
                style={{
                  padding: "13px 36px",
                  borderRadius: "var(--radius-full)",
                  border: "none",
                  background: "linear-gradient(135deg, #F5C842 0%, #C49A00 50%, #F5C842 100%)",
                  color: "var(--color-navy)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                }}
              >
                ← Retake Photo
              </button>
            </div>
          </>
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
