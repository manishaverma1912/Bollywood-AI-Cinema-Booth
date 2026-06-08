import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { QRCodeCanvas } from "qrcode.react";

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

export default function Download() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedImage = sessionStorage.getItem("finalImageUrl");
    if (!storedImage) {
      navigate("/select");
      return;
    }
    setImageUrl(storedImage);
    // Dramatic reveal after slight delay
    setTimeout(() => setRevealed(true), 400);
  }, [navigate]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "My Bollywood Poster!", url: imageUrl });
      } catch (_) {}
    } else {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleGoHome = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 40% 20%, #1a0533 0%, #0B0D2A 55%, #060820 100%)",
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
            opacity: 0.55,
            animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(108,33,168,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ── Header ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          marginBottom: "2rem",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Celebration emojis */}
        <div style={{ fontSize: "2rem", marginBottom: "0.8rem", animation: "bounce-subtle 2s ease-in-out infinite" }}>
          🎉 🌟 🎬 🌟 🎉
        </div>

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
          ✦ Your Bollywood Moment ✦
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #FFE082 0%, #F5C842 40%, #C49A00 70%, #FFE082 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.04em",
            marginBottom: "0.5rem",
          }}
        >
          You're a Star! ⭐
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", fontStyle: "italic" }}>
          Your personalised Bollywood poster is ready
        </p>
      </div>

      {/* ── Main content: poster + QR side by side on wide, stacked on narrow ── */}
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "900px",
          position: "relative",
          zIndex: 10,
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
        }}
      >
        {/* Poster image */}
        <div style={{ flex: "1 1 300px", maxWidth: "420px" }}>
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "3px solid var(--color-gold)",
              boxShadow: "0 0 50px rgba(245,200,66,0.4), 0 16px 60px rgba(0,0,0,0.7)",
              animation: "frame-glow 2.5s ease-in-out infinite",
              position: "relative",
            }}
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Your Bollywood AI Poster"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            )}
            {/* Movie-style title card at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(11,13,42,0.95))",
                padding: "2rem 1.2rem 1rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  color: "var(--color-gold)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                ✦ Bollywood AI Cinema Booth ✦
              </p>
            </div>
          </div>

          {/* Action buttons below poster */}
          <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.2rem" }}>
            <a
              id="download-image"
              href={imageUrl}
              download="bollywood-poster.jpg"
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: "13px 0",
                borderRadius: "var(--radius-full)",
                background: "linear-gradient(135deg, #F5C842 0%, #C49A00 50%, #F5C842 100%)",
                color: "var(--color-navy)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                textAlign: "center",
                boxShadow: "0 4px 25px rgba(245,200,66,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              ⬇️ Download
            </a>
            <button
              id="share-image"
              onClick={handleShare}
              style={{
                flex: 1,
                padding: "13px 0",
                borderRadius: "var(--radius-full)",
                border: "2px solid rgba(245,200,66,0.5)",
                background: "rgba(245,200,66,0.08)",
                color: "var(--color-gold)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {copied ? "✅ Link Copied!" : "📤 Share"}
            </button>
          </div>
        </div>

        {/* QR code + scan instructions */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "2px solid rgba(245,200,66,0.3)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
              textAlign: "center",
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                color: "var(--color-gold)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Scan to Download
            </p>
            {imageUrl && (
              <div
                style={{
                  background: "#fff",
                  borderRadius: "var(--radius-md)",
                  padding: "12px",
                  display: "inline-block",
                  boxShadow: "0 0 20px rgba(245,200,66,0.25)",
                }}
              >
                <QRCodeCanvas
                  value={imageUrl}
                  size={160}
                  includeMargin={false}
                  fgColor="#0B0D2A"
                  bgColor="#ffffff"
                />
              </div>
            )}
            <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
              Point your phone camera<br />at the QR code
            </p>
          </div>

          {/* Social hashtag */}
          <div
            style={{
              background: "rgba(245,200,66,0.06)",
              border: "1px solid rgba(245,200,66,0.2)",
              borderRadius: "var(--radius-md)",
              padding: "0.8rem 1.2rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }}>Share with</p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-gold)", fontWeight: 600, letterSpacing: "0.06em" }}>
              #BollywoodAIBooth
            </p>
          </div>
        </div>
      </div>

      {/* ── Home Button ── */}
      <div
        style={{
          marginTop: "3rem",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
        }}
      >
        <button
          id="go-home"
          onClick={handleGoHome}
          style={{
            padding: "16px 56px",
            borderRadius: "var(--radius-full)",
            border: "2px solid rgba(245,200,66,0.35)",
            background: "rgba(245,200,66,0.06)",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(245,200,66,0.12)";
            e.currentTarget.style.borderColor = "rgba(245,200,66,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(245,200,66,0.06)";
            e.currentTarget.style.borderColor = "rgba(245,200,66,0.35)";
          }}
        >
          🎬 &nbsp; New Photo Session
        </button>
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
