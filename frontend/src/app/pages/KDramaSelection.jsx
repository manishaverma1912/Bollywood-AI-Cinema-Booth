import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const styles = `
  .kdrama-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }

  .kdrama-wrapper {
    background-color: #0A0A0A;
    overflow-x: hidden;
    min-height: max(884px, 100dvh);
    color: #e5e2e1;
    font-family: 'Hanken Grotesk', sans-serif;
  }

  .kdrama-wrapper .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    font-size: 24px;
    line-height: 1;
    display: inline-block;
    white-space: nowrap;
  }
  .kdrama-wrapper .fill-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }

  /* Glass Card */
  .kdrama-wrapper .glass-card {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;
  }
  .kdrama-wrapper .glass-card:hover {
    border-color: rgba(242,202,80,0.5);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }
  .kdrama-wrapper .glass-card img.zoom {
    transition: transform 0.7s ease;
  }
  .kdrama-wrapper .glass-card:hover img.zoom { transform: scale(1.05); }

  .kdrama-wrapper .k-glow-red { box-shadow: 0 0 20px rgba(225,1,17,0.2); }
  .kdrama-wrapper .k-glow-gold { box-shadow: 0 0 20px rgba(242,202,80,0.15); }

  /* Header */
  .kdrama-wrapper .app-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    background: rgba(19,19,19,0.1);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 16px;
  }
  @media (min-width: 768px) { .kdrama-wrapper .app-header { padding: 0 64px; } }

  .kdrama-wrapper .logo-row { display: flex; align-items: center; gap: 16px; }
  .kdrama-wrapper .logo-icon { color: #f2ca50; font-size: 30px; }
  .kdrama-wrapper .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #f2ca50;
    line-height: 1;
  }
  @media (min-width: 768px) { .kdrama-wrapper .logo-text { font-size: 64px; letter-spacing: -0.02em; } }

  .kdrama-wrapper .header-right { display: flex; align-items: center; gap: 24px; }
  .kdrama-wrapper .nav-link {
    display: none;
    color: #d0c5af;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
  }
  .kdrama-wrapper .nav-link:hover { color: #f2ca50; }
  @media (min-width: 768px) { .kdrama-wrapper .nav-link { display: flex; } }
  
  .kdrama-wrapper .nav-back {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: #d0c5af;
    cursor: pointer;
    transition: color 0.2s;
    margin-right: 8px;
  }
  .kdrama-wrapper .nav-back:hover { color: #f2ca50; }

  .kdrama-wrapper .avatar {
    width: 40px; height: 40px;
    border-radius: 9999px;
    border: 1px solid rgba(242,202,80,0.3);
    overflow: hidden;
    box-shadow: 0 0 20px rgba(242,202,80,0.15);
  }
  .kdrama-wrapper .avatar img { width: 100%; height: 100%; object-fit: cover; }

  /* Main */
  .kdrama-wrapper .main-wrap {
    padding-top: 128px;
    padding-bottom: 128px;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1440px;
    margin: 0 auto;
  }
  @media (min-width: 768px) { .kdrama-wrapper .main-wrap { padding-left: 64px; padding-right: 64px; } }

  /* Hero */
  .kdrama-wrapper .hero-section { margin-bottom: 80px; }

  .kdrama-wrapper .premiere-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px;
    border-radius: 9999px;
    background: rgba(225,1,17,0.2);
    border: 1px solid rgba(225,1,17,0.4);
    margin-bottom: 16px;
    box-shadow: 0 0 20px rgba(225,1,17,0.2);
  }
  .kdrama-wrapper .pulse-dot {
    width: 8px; height: 8px;
    border-radius: 9999px;
    background: #e10111;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .kdrama-wrapper .premiere-label {
    color: #e10111;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .kdrama-wrapper .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 600;
    color: #e5e2e1;
    margin-bottom: 16px;
    line-height: 1.3;
  }
  @media (min-width: 768px) {
    .kdrama-wrapper .hero-title { font-size: 64px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 700; }
  }

  .kdrama-wrapper .hero-desc {
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    color: #d0c5af;
    max-width: 672px;
  }

  /* Bento Grid */
  .kdrama-wrapper .bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (min-width: 768px) {
    .kdrama-wrapper .bento-grid {
      grid-template-columns: repeat(12, 1fr);
    }
    .kdrama-wrapper .col-8 { grid-column: span 8; }
    .kdrama-wrapper .col-4 { grid-column: span 4; }
  }

  .kdrama-wrapper .card-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .kdrama-wrapper .card-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0A0A0A, transparent);
  }

  .kdrama-wrapper .card-body {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 32px;
  }

  .kdrama-wrapper .chapter-label {
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
    color: #f2ca50;
  }
  .kdrama-wrapper .chapter-label-red { color: #e10111; }

  .kdrama-wrapper .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
    color: #e5e2e1;
    margin-bottom: 8px;
  }

  .kdrama-wrapper .card-desc {
    color: #d0c5af;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 16px;
    max-width: 448px;
  }

  .kdrama-wrapper .card-desc-sm {
    color: #d0c5af;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
  }

  .kdrama-wrapper .btn-row { display: flex; gap: 16px; margin-top: 24px; }

  .kdrama-wrapper .btn-watch {
    background: #f2ca50;
    color: #3c2f00;
    padding: 8px 24px;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .kdrama-wrapper .btn-watch:hover { background: #d4af37; }

  .kdrama-wrapper .btn-browse {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(12px);
    color: #e5e2e1;
    padding: 8px 24px;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .kdrama-wrapper .btn-browse:hover { background: rgba(255,255,255,0.1); }

  .kdrama-wrapper .arrow-btn {
    margin-top: 16px;
    width: 48px; height: 48px;
    border-radius: 9999px;
    border: 1px solid #f2ca50;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2ca50;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;
  }
  .kdrama-wrapper .arrow-btn:hover { background: #f2ca50; color: #000; }

  /* Hospital card bottom row */
  .kdrama-wrapper .hospital-bottom {
    position: absolute;
    bottom: 0; left: 0;
    padding: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .kdrama-wrapper .cast-stack { display: flex; margin-left: -16px; }
  .kdrama-wrapper .cast-avatar {
    width: 48px; height: 48px;
    border-radius: 9999px;
    border: 2px solid #0A0A0A;
    overflow: hidden;
    margin-left: -16px;
  }
  .kdrama-wrapper .cast-avatar:first-child { margin-left: 0; }
  .kdrama-wrapper .cast-avatar img { width: 100%; height: 100%; object-fit: cover; }
  .kdrama-wrapper .cast-more {
    width: 48px; height: 48px;
    border-radius: 9999px;
    border: 2px solid #0A0A0A;
    background: #201f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #e5e2e1;
    margin-left: -16px;
  }

  /* Card aspect ratios */
  .kdrama-wrapper .card-h450 { height: 300px; }
  .kdrama-wrapper .card-ratio45 { aspect-ratio: 4/5; }
  .kdrama-wrapper .card-h400 { height: 300px; }
  @media (min-width: 768px) {
    .kdrama-wrapper .card-h450 { height: 450px; aspect-ratio: unset; }
    .kdrama-wrapper .card-ratio45 { aspect-ratio: 4/5; height: auto; }
    .kdrama-wrapper .card-h400 { height: 400px; aspect-ratio: unset; }
  }

  /* Bottom Nav */
  .kdrama-wrapper .bottom-nav {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);
    max-width: 448px;
    border-radius: 9999px;
    background: rgba(32,31,31,0.8);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    z-index: 50;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 24px;
  }

  .kdrama-wrapper .nav-active {
    display: flex; flex-direction: column; align-items: center;
    background: #e10111;
    color: #fff1ef;
    border-radius: 9999px;
    padding: 12px;
    box-shadow: 0 0 15px #e10111;
    text-decoration: none;
    transition: transform 0.15s;
    border: none;
    cursor: pointer;
  }
  .kdrama-wrapper .nav-active:active { transform: scale(0.9); }

  .kdrama-wrapper .nav-passive {
    display: flex; flex-direction: column; align-items: center;
    color: rgba(208,197,175,0.7);
    padding: 12px;
    text-decoration: none;
    transition: color 0.3s;
    background: none;
    border: none;
    cursor: pointer;
  }
  .kdrama-wrapper .nav-passive:hover { color: #f2ca50; }
  .kdrama-wrapper .nav-passive:active { transform: scale(0.9); }

  .kdrama-wrapper .nav-label {
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-top: 4px;
  }
`;

export default function KDramaSelection() {
  const gridRef = useRef(null);
  const navigate = useNavigate();

  // Atmospheric parallax tilt on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".glass-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const angleX = (e.clientY - cardY) / 40;
        const angleY = (cardX - e.clientX) / 40;
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-8px)`;
      });
    };
    const handleMouseLeave = () => {
      document.querySelectorAll(".glass-card").forEach((card) => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="kdrama-wrapper">
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Hanken+Grotesk:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="app-header">
        <div className="logo-row">
          <button onClick={() => navigate("/world")} className="nav-back">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="material-symbols-outlined fill-icon logo-icon">movie_filter</span>
          <h1 className="logo-text">CINEGRAPH</h1>
        </div>
        {/* <div className="header-right">
          <button className="nav-link">EXPLORE</button>
          <button className="nav-link">COLLECTIONS</button>
          <div className="avatar k-glow-gold">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK2x4PqusV4jdd0E02q7BPXNj3UHNuEWPUrFX9yw1cqn_Xz7i8I_uEux-6WOeyszldCcfooNw0VeDeMabgstKUHySUc4xv0h85vAxXD8ozJPYD6qAA1-SOxlyfSuhWigE2o8-9rPnMQdGSwoFABqeqLI28nOD-UXhmEZl8xyaqP7bmq7ImW1j1vO-oR3Dn9qrb00Ht_gUZpN-aUKTRYFsTetL5J2aktSiWgqDQXJtPTthSm6X-gK1HU1cj1EYGXCV7Ay7zyyX95CU"
              alt="User Profile"
            />
          </div>
        </div> */}
      </header>

      <main className="main-wrap">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="premiere-badge k-glow-red">
            <span className="pulse-dot" />
            <span className="premiere-label">Premiere Access</span>
          </div>
          <h2 className="hero-title"> K-DRAMA EXPERIENCE</h2>
          <p className="hero-desc">
            Step into the meticulously crafted worlds of Korean storytelling. From the neon-lit rains of Seoul to the silent majesty of Joseon palaces.
          </p>
        </section>

        {/* Bento Grid */}
        <div className="bento-grid" ref={gridRef}>

          {/* Modern Romance — col-8, h-450 */}
          <div className="glass-card col-8 card-h450" onClick={() => navigate('/posters/kdrama/modern-romance')}>
            <img
              className="card-img zoom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrfJWdSQRKNXzQ7bXNnhp-QHBYdsT_ZcXPMNb_LXjr6v5ERMWsakfYw2J19He1EvSlTfuxS34f_IPRAd_GkxIJwjZB3Ti7AiWw-oaKX0KCw2-hD2ohKuK4ZfCqVX_ctrSlfiBBfAbpSl_JfiNFAzwu8sXwdPbaxW5fOwuuvMib8MNHSarCv4_bVDKalKhfpQIIV8608LjvN9jsSDVd6B1KyvjNElZdLVaKgp_aeayzn0YUiF1WsP772yYIfJke06Qvo7xZXnQZ4Ww"
              alt="Seoul skyline romance"
              style={{ opacity: 0.6 }}
            />
            <div className="card-gradient" />
            <div className="card-body">
              {/* <span className="chapter-label">Chapter 01</span> */}
              <h3 className="card-title">Modern Romance</h3>
              <p className="card-desc">Soulmates finding light in the heart of a neon metropolis.</p>
              {/* <div className="btn-row">
                <button className="btn-watch" onClick={(e) => { e.stopPropagation(); navigate('/posters/kdrama/modern-romance'); }}>WATCH NOW</button>
                <button className="btn-browse" onClick={(e) => e.stopPropagation()}>BROWSE</button>
              </div> */}
            </div>
          </div>

          {/* CEO Romance — col-4, aspect-4/5 */}
          <div className="glass-card col-4 card-ratio45" onClick={() => navigate('/posters/kdrama/ceo-romance')}>
            <img
              className="card-img zoom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOIQaZ0luljWtEYmwP953t-qL86UWLgJ7h74Sz9TWqcFrbO71ytggobsvMOgr--RMmtluULPKEth9en0SLJweT248jIqWEdA0BecxFztbqqAYbIadgPOqEhldeQCSt1fldnuUebJtJ-CI6gI02pEpV0FN2v2vyfQ2QqWwdCQJcg8NcOfb4Y0YXE3HRSsEzO6L6N-qFe2ShcJ5CuAgP6z535Es-RKwl_Cbu-1YiQjWWWdxzZcKu6Jo84vK3lai4QFOsnv21dInFyxQ"
              alt="Korean palace historical"
              style={{ opacity: 0.5 }}
            />
            <div className="card-gradient" />
            <div className="card-body">
              {/* <span className="chapter-label">Chapter 02</span> */}
              <h3 className="card-title">CEO Romance</h3>
              <button className="arrow-btn" onClick={(e) => { e.stopPropagation(); navigate('/posters/kdrama/ceo-romance'); }}>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Medical Drama — col-4, aspect-4/5 */}
          <div className="glass-card col-4 card-ratio45" onClick={() => navigate('/posters/kdrama/medical-drama')}>
            <img
              className="card-img zoom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaznH9yxmEgMWQ1C6NE6fIlXkz8pfWgh_YVE4y2aD0nngOz6dJh0WazoRK3QXXjKf4WguFz61w7xWLv_Y6_LEiBiMNkf3H9ebEFNcRUJUHX1Ze5sRFj3bWoMQjRMuURCROZuYw1Vk5iC_1zzNcWJVD4gmkrGJcB6Q1iQSzfRhLnZo5mtErLzz0v_doJF9e_WQo5_ss1CPuwHzWjuAbxDY7Q8-NYqDIGv9Zp_51Nv9BSaLu_207E1VhoOkN-7_njdMvvdiBVGwvhhU"
              alt="Rainy Seoul thriller"
              style={{ opacity: 0.5 }}
            />
            <div className="card-gradient" />
            <div className="card-body">
              {/* <span className="chapter-label chapter-label-red">Chapter 03</span> */}
              <h3 className="card-title">Medical Drama</h3>
              <p className="card-desc-sm">The delicate balance of heartbeats and humanity.</p>
            </div>
          </div>

          {/* Historical Prince — col-8, h-400 */}
          <div className="glass-card col-8 card-h400" onClick={() => navigate('/posters/kdrama/historical-prince')}>
            <img
              className="card-img zoom"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbDYOcdMJYf2wK0QAAbiM1p0CbhaGswtGQnxtZyGZbGsxPpzC_oJInZqEVTAUMKqaciRwcRgsOrAnethrDv5NEIBZkMdWvCFkRQ5q6UY69XL_5fAGW_u-f6mk_JxCOftnE1IIz01Q1Xzh1Qw9JdIghTwjbUIpnW1SeoNP8kkGP-IW1vHy2KAS_dAH9ypLLH0_pXPSGY_TMQT-Ci9oex71r35shoVyJ5JGHAKF5XtP6L0yoObAwuM0gbTHUc0U8UhYOk8Xfid5palc"
              alt="Hospital drama"
              style={{ opacity: 0.4 }}
            />
            <div className="card-gradient" />
            <div className="hospital-bottom">
              <div>
                {/* <span className="chapter-label">Chapter 04</span> */}
                <h3 className="card-title">Historical Prince</h3>
                <p className="card-desc">Legends reborn in majestic ancient palaces.</p>
              </div>
              {/* <div className="cast-stack">
                <div className="cast-avatar">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXUYzec4wjzNTe0aGmKuRXrVxH2DXYS1ZNT6BMxr1N9yy7TuH1_0ShsrA5EP78uGLZK1-31-SEAJey1Um_Quvdz0j4Y19y3HTIz-PvDRvIMQOMJBdE2GayTDX5Y1QnaZBtHvTTeWsDLP9cgpXgH1uFjGMgI81WADjrmJsv_ZG7C9dR25jF5titP4r5YGoXroZB4ipHo9m8892FuZx3vA2CFnmGNBo4t-LRoqOPoa7lOmffEmsJ7vUsL6uVnE5oZnWv_1gZLXy-T98"
                    alt="Cast"
                  />
                </div>
                <div className="cast-avatar">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHcpVv1VFjTF_4KIu9DomQgi1VNAUY3f447PlxO25TK_7kAZunc8KyPktFuwa4L6h-OcpxAi2XswkjoeuGdxUnO6TxllFvd_dM5nHsh2NiZFJuQERP7u6gAfaMm4EfRekpDEBd3xFkHid-n0d3yihpq-xqcyw5-w7pl5Ze7-86Vky7t3Ptql8zM0CcdCdRaDieKZBDJRKUcMsWmVkv0EHRPR6HDf_Wkuow62hn12Vqfhkgn40ZN9IuOnih0L-YkqE0hbHNrHDM1OI"
                    alt="Cast"
                  />
                </div>
                <div className="cast-more">+5</div>
              </div> */}
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button onClick={() => navigate('/world')} className="nav-active">
          <span className="material-symbols-outlined fill-icon">photo_library</span>
          <span className="nav-label">Gallery</span>
        </button>
        <button onClick={() => navigate('/')} className="nav-passive">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="nav-label">Generate</span>
        </button>
        <button className="nav-passive">
          <span className="material-symbols-outlined">person</span>
          <span className="nav-label">Profile</span>
        </button>
      </nav>
    </div>
  );
}
