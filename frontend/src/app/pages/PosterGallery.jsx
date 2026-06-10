import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { worlds, posters as allPosters } from "../data/worldsData";
import BottomNav from "../components/BottomNav";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Outfit:wght@300;400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  .poster-wrapper *, .poster-wrapper *::before, .poster-wrapper *::after { box-sizing: border-box; }

  .poster-wrapper {
    background-color: #0A0A0A;
    color: #e5e2e1;
    -webkit-font-smoothing: antialiased;
    font-family: 'Outfit', sans-serif;
    min-height: max(884px, 100dvh);
    padding-bottom: 128px;
  }

  .poster-wrapper .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    font-size: 24px;
    line-height: 1;
    display: inline-block;
    white-space: nowrap;
  }
  .poster-wrapper .fill-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }

  /* Header */
  .poster-wrapper .app-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    background: rgba(19,19,19,0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 25px 50px rgba(242,202,80,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
  }

  .poster-wrapper .header-left { display: flex; align-items: center; gap: 12px; }

  .poster-wrapper .avatar {
    width: 40px; height: 40px;
    border-radius: 9999px;
    overflow: hidden;
    border: 1px solid rgba(242,202,80,0.3);
    flex-shrink: 0;
  }
  .poster-wrapper .avatar img { width: 100%; height: 100%; object-fit: cover; }

  .poster-wrapper .app-title {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #f2ca50;
    line-height: 1;
  }

  .poster-wrapper .settings-btn {
    background: none;
    border: none;
    color: #f2ca50;
    cursor: pointer;
    display: flex;
    transition: color 0.3s, transform 0.2s;
  }
  .poster-wrapper .settings-btn:hover { color: #e9c349; }
  .poster-wrapper .settings-btn:active { transform: scale(0.95); }

  /* Main */
  .poster-wrapper .main-wrap {
    padding-top: 96px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
    margin: 0 auto;
  }
  @media (min-width: 768px) { .poster-wrapper .main-wrap { padding-left: 64px; padding-right: 64px; } }

  /* Hero */
  .poster-wrapper .hero-section { margin-bottom: 48px; }

  .poster-wrapper .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #f2ca50;
    margin-bottom: 8px;
    line-height: 48px;
  }
  @media (min-width: 768px) {
    .poster-wrapper .hero-title { font-size: 64px; line-height: 72px; letter-spacing: -0.02em; }
  }

  .poster-wrapper .hero-sub {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #d0c5af;
    opacity: 0.8;
  }

  /* Poster Grid */
  .poster-wrapper .poster-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  @media (min-width: 768px) { .poster-wrapper .poster-grid { grid-template-columns: repeat(2, 1fr); gap: 48px; } }
  @media (min-width: 1024px) { .poster-wrapper .poster-grid { grid-template-columns: repeat(3, 1fr); } }

  /* Poster Card */
  .poster-wrapper .poster-card {
    position: relative;
    aspect-ratio: 2/3;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 40px -10px rgba(242,202,80,0.2);
    transition: transform 0.5s ease;
    cursor: pointer;
  }
  .poster-wrapper .poster-card:hover { transform: scale(1.02); }
  .poster-wrapper .poster-card.selected { outline: 2px solid #f2ca50; }

  .poster-wrapper .poster-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: filter 0.7s ease, transform 0.7s ease;
  }
  .poster-wrapper .poster-card:hover img { filter: grayscale(0%); }

  .poster-wrapper .poster-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0) 50%);
  }

  .poster-wrapper .poster-info-wrap {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 24px;
  }

  .poster-wrapper .poster-info-wrap .glass-card {
    background: rgba(53,53,52,0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
    transform: translateY(16px);
    transition: transform 0.5s ease;
  }
  .poster-wrapper .poster-card:hover .poster-info-wrap .glass-card { transform: translateY(0); }

  .poster-wrapper .poster-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #f2ca50;
    margin-bottom: 4px;
  }

  .poster-wrapper .poster-desc {
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    color: #d0c5af;
    margin-bottom: 16px;
  }

  .poster-wrapper .select-btn {
    width: 100%;
    padding: 12px 0;
    border: none;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }
  .poster-wrapper .select-btn:active { transform: scale(0.95); }

  .poster-wrapper .btn-default { background: #f2ca50; color: #3c2f00; }
  .poster-wrapper .btn-default:hover { background: #e9c349; }

  .poster-wrapper .btn-selected { background: #e10111; color: #fff1ef; }

  /* Ring highlight on selected card */
  .poster-wrapper .poster-card.ring-highlight {
    outline: 2px solid #f2ca50;
    outline-offset: 2px;
  }


  .poster-wrapper .btn-proceed-header {
    background: #e10111;
    color: #fff;
    padding: 8px 24px;
    border-radius: 9999px;
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid #ff4d4d;
    animation: blink 1.5s infinite;
    transition: transform 0.2s;
    display: flex;
    align-items: center;
  }
  .poster-wrapper .btn-proceed-header:hover { transform: scale(1.05); }
  .poster-wrapper .btn-proceed-header:active { transform: scale(0.95); }
  
  @keyframes blink {
    0%, 100% { opacity: 1; box-shadow: 0 0 20px rgba(225,1,17,0.8); }
    50% { opacity: 0.8; box-shadow: 0 0 5px rgba(225,1,17,0.2); }
  }

  .poster-wrapper .mode-selector {
    display: flex;
    gap: 8px;
    background: rgba(255,255,255,0.05);
    padding: 6px;
    border-radius: 9999px;
    border: 1px solid rgba(255,255,255,0.1);
    margin-top: 16px;
    width: fit-content;
  }
  
  .poster-wrapper .mode-btn {
    padding: 8px 24px;
    border-radius: 9999px;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    background: transparent;
    color: #a09a8f;
    transition: all 0.3s ease;
  }
  
  .poster-wrapper .mode-btn.active {
    background: #f2ca50;
    color: #1a1a1a;
    box-shadow: 0 0 15px rgba(242,202,80,0.3);
  }
`;

export default function PosterGallery() {
  const { worldId, categoryId } = useParams();
  const navigate = useNavigate();
  
  const world = worlds.find((w) => w.id === worldId);
  const category = world?.categories.find((c) => c.id === categoryId);

  const [selectedId, setSelectedId] = useState(null);
  const [ringId, setRingId] = useState(null);
  const [captureMode, setCaptureMode] = useState(sessionStorage.getItem("captureMode") || "single");

  // Save mode to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("captureMode", captureMode);
  }, [captureMode]);

  // Atmospheric parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
      document.querySelectorAll(".poster-card").forEach((card) => {
        card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!world || !category) {
    return <div className="text-white p-8">Poster category not found.</div>;
  }

  // Find posters for this specific world/category combination
  const categoryPosters = allPosters.filter(
    (p) => p.worldId === worldId && p.categoryId === categoryId
  );

  const handleSelectPoster = (poster) => {
    setSelectedId(poster.id);
    setRingId(poster.id);
    
    // Save to session storage for the capture page
    sessionStorage.setItem("selectedPoster", JSON.stringify({
      ...poster,
      worldId,
      categoryId
    }));
  };

  const handleProceed = () => {
    if (selectedId) {
      navigate("/capture");
    }
  };

  return (
    <div className="poster-wrapper">
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Outfit:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="app-header flex items-center justify-between px-8 py-6 z-50">
        <div className="flex items-center gap-4">
          <div className="back-btn" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h1 className="app-title">AI CINEMA</h1>
        </div>
        <div className="flex items-center gap-6">
          {selectedId && (
            <button className="btn-proceed-header" onClick={handleProceed}>
              PROCEED <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginLeft: '4px', fontSize: '20px' }}>arrow_forward</span>
            </button>
          )}
          <div className="level-badge" style={{ border: '1px solid #f2ca50', padding: '4px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: 'bold', color: '#f2ca50', letterSpacing: '0.1em' }}>
            LEVEL 03
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="main-wrap">
        <section className="hero-section">
          <h2 className="hero-title">Choose Your Movie</h2>
          <p className="hero-sub">Poster Options - {category.name}</p>
          
          <div className="mode-selector">
            <button 
              className={`mode-btn ${captureMode === 'single' ? 'active' : ''}`}
              onClick={() => setCaptureMode('single')}
            >
              <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '6px', fontSize: '18px' }}>person</span>
              Single
            </button>
            <button 
              className={`mode-btn ${captureMode === 'duo' ? 'active' : ''}`}
              onClick={() => setCaptureMode('duo')}
            >
              <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', marginRight: '6px', fontSize: '18px' }}>group</span>
              Duo
            </button>
          </div>
        </section>

        <div className="poster-grid">
          {categoryPosters.length > 0 ? (
            categoryPosters.map((poster) => (
              <div
                key={poster.id}
                className={`poster-card${ringId === poster.id ? " ring-highlight" : ""}`}
                onClick={() => handleSelectPoster(poster)}
              >
                <img src={poster.image} alt={poster.name} />
                <div className="poster-gradient" />
                <div className="poster-info-wrap">
                  <div className="glass-card">
                    <h3 className="poster-title">{poster.name}</h3>
                    <p className="poster-desc">{poster.description || poster.name}</p>
                    <button
                      className={`select-btn ${selectedId === poster.id ? "btn-selected" : "btn-default"}`}
                      onClick={(e) => { e.stopPropagation(); handleSelectPoster(poster); }}
                    >
                      {selectedId === poster.id ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center text-white/50 border border-white/10 rounded-2xl border-dashed">
              Poster templates coming soon for {category.name}
            </div>
          )}


        </div>
      </main>

      <BottomNav />
    </div>
  );
}
