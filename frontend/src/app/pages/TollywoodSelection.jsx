import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .tollywood-wrapper { background-color: #0A0A0A; color: #e5e2e1; min-height: 100vh; overflow-x: hidden; font-family: 'Hanken Grotesk', sans-serif; }

  .tollywood-wrapper .glass-card {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.08);
    transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
    opacity: 0;
    transform: translateY(40px);
  }
  .tollywood-wrapper .glass-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .tollywood-wrapper .glass-card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(225,1,17,0.5);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(225,1,17,0.1);
  }
  .tollywood-wrapper .cinematic-gradient {
    background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%);
  }
  .tollywood-wrapper .text-glow-red { text-shadow: 0 0 15px rgba(225,1,17,0.6); }
  .tollywood-wrapper .red-glow-btn { box-shadow: 0 0 20px rgba(225,1,17,0.3); }
  .tollywood-wrapper .red-glow-btn:hover { box-shadow: 0 0 30px rgba(225,1,17,0.6); }

  /* Colors */
  .tollywood-wrapper .bg-surface { background-color: #131313; }
  .tollywood-wrapper .bg-surface-container { background-color: #201f1f; }
  .tollywood-wrapper .bg-secondary-container { background-color: #e10111; }
  .tollywood-wrapper .text-primary { color: #f2ca50; }
  .tollywood-wrapper .text-on-secondary-container { color: #fff1ef; }
  .tollywood-wrapper .text-on-surface-variant { color: #d0c5af; }
  .tollywood-wrapper .border-primary { border-color: #f2ca50; }

  /* Typography */
  .tollywood-wrapper .font-playfair { font-family: 'Playfair Display', serif; }
  .tollywood-wrapper .font-hanken { font-family: 'Hanken Grotesk', sans-serif; }

  /* Layout helpers */
  .tollywood-wrapper .fixed { position: fixed; }
  .tollywood-wrapper .relative { position: relative; }
  .tollywood-wrapper .absolute { position: absolute; }
  .tollywood-wrapper .inset-0 { inset: 0; }
  .tollywood-wrapper .overflow-hidden { overflow: hidden; }
  .tollywood-wrapper .overflow-x-hidden { overflow-x: hidden; }
  .tollywood-wrapper .z-50 { z-index: 50; }
  .tollywood-wrapper .w-full { width: 100%; }
  .tollywood-wrapper .h-full { height: 100%; }
  .tollywood-wrapper .object-cover { object-fit: cover; }
  .tollywood-wrapper .cursor-pointer { cursor: pointer; }
  .tollywood-wrapper .flex { display: flex; }
  .tollywood-wrapper .items-center { align-items: center; }
  .tollywood-wrapper .justify-between { justify-content: space-between; }
  .tollywood-wrapper .justify-around { justify-content: space-around; }
  .tollywood-wrapper .gap-2 { gap: 8px; }
  .tollywood-wrapper .gap-4 { gap: 16px; }
  .tollywood-wrapper .gap-6 { gap: 24px; }

  .tollywood-wrapper .hero-section {
    position: relative;
    height: 530px;
    width: 100%;
    overflow: hidden;
    padding: 0 16px;
    margin-bottom: 64px;
  }
  @media (min-width: 768px) {
    .tollywood-wrapper .hero-section { height: 618px; padding: 0 64px; }
  }

  .tollywood-wrapper .hero-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
  }
  .tollywood-wrapper .hero-inner:hover img { transform: scale(1.05); }

  .tollywood-wrapper .hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
  }

  .tollywood-wrapper .hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 32px;
    max-width: 672px;
  }
  @media (min-width: 768px) { .tollywood-wrapper .hero-content { padding: 64px; } }

  .tollywood-wrapper .badge {
    display: inline-block;
    padding: 4px 12px;
    background-color: #e10111;
    color: #fff1ef;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    border-radius: 9999px;
    margin-bottom: 16px;
  }

  .tollywood-wrapper .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 600;
    color: white;
    margin-bottom: 16px;
    line-height: 1.3;
  }
  @media (min-width: 768px) {
    .tollywood-wrapper .hero-title { font-size: 64px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 700; }
  }

  .tollywood-wrapper .hero-desc {
    color: #d0c5af;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 18px;
    margin-bottom: 32px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media (min-width: 768px) { .tollywood-wrapper .hero-desc { -webkit-line-clamp: unset; } }

  .tollywood-wrapper .btn-primary {
    background-color: #e10111;
    color: #fff1ef;
    padding: 16px 32px;
    border-radius: 4px;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 0 20px rgba(225,1,17,0.3);
    transition: all 0.2s;
  }
  .tollywood-wrapper .btn-primary:hover { box-shadow: 0 0 30px rgba(225,1,17,0.6); }
  .tollywood-wrapper .btn-primary:active { transform: scale(0.95); }

  .tollywood-wrapper .btn-secondary {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 16px 32px;
    border-radius: 4px;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s;
  }
  .tollywood-wrapper .btn-secondary:hover { background: rgba(255,255,255,0.2); }

  /* Categories */
  .tollywood-wrapper .categories-section {
    padding: 0 16px;
    margin-bottom: 96px;
  }
  @media (min-width: 768px) { .tollywood-wrapper .categories-section { padding: 0 64px; } }

  .tollywood-wrapper .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 32px;
  }

  .tollywood-wrapper .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: #f2ca50;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  .tollywood-wrapper .section-underline {
    height: 4px;
    width: 96px;
    background-color: #e10111;
    border-radius: 9999px;
  }

  .tollywood-wrapper .view-all-btn {
    background: none;
    border: none;
    color: #d0c5af;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: color 0.2s;
  }
  .tollywood-wrapper .view-all-btn:hover { color: #f2ca50; }

  .tollywood-wrapper .bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    height: auto;
  }
  @media (min-width: 768px) {
    .tollywood-wrapper .bento-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      height: 600px;
    }
    .tollywood-wrapper .bento-large { grid-column: span 2; grid-row: span 2; }
    .tollywood-wrapper .bento-wide { grid-column: span 2; }
  }

  .tollywood-wrapper .bento-card {
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    height: 300px;
    cursor: pointer;
  }
  @media (min-width: 768px) { .tollywood-wrapper .bento-card { height: auto; } }

  .tollywood-wrapper .bento-card img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    transition: opacity 0.3s;
  }
  .tollywood-wrapper .bento-card:hover img { opacity: 0.8; }

  .tollywood-wrapper .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, black, transparent);
  }

  .tollywood-wrapper .card-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    color: #e10111;
    font-size: 40px;
  }

  .tollywood-wrapper .card-content-lg {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 32px;
  }

  .tollywood-wrapper .card-content-sm {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
  }

  .tollywood-wrapper .card-title-lg {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 600;
    color: white;
    margin-bottom: 8px;
    text-shadow: 0 0 15px rgba(225,1,17,0.6);
    transition: color 0.2s;
  }

  .tollywood-wrapper .card-subtitle {
    color: #d0c5af;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 16px;
  }

  .tollywood-wrapper .card-title-md {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: white;
    margin-bottom: 4px;
    transition: color 0.2s;
  }

  .tollywood-wrapper .card-label {
    color: #f2ca50;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .tollywood-wrapper .card-title-sm {
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: white;
    letter-spacing: 0.05em;
    transition: color 0.2s;
  }

  /* Header */
  .tollywood-wrapper .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    background: rgba(19,19,19,0.1);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  @media (min-width: 768px) { .tollywood-wrapper .header { padding: 0 64px; } }

  .tollywood-wrapper .logo-area {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .tollywood-wrapper .logo-icon {
    color: #f2ca50;
    font-size: 30px;
  }

  .tollywood-wrapper .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #f2ca50;
    text-transform: uppercase;
    line-height: 1;
  }
  @media (min-width: 768px) {
    .tollywood-wrapper .logo-text { font-size: 32px; font-weight: 600; }
  }

  .tollywood-wrapper .nav-explore {
    display: none;
    align-items: center;
    gap: 8px;
    color: #d0c5af;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    transition: color 0.2s;
  }
  .tollywood-wrapper .nav-explore:hover { color: #f2ca50; }
  @media (min-width: 768px) { .tollywood-wrapper .nav-explore { display: flex; } }

  .tollywood-wrapper .avatar {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    border: 1px solid rgba(242,202,80,0.3);
    overflow: hidden;
    outline: 2px solid rgba(242,202,80,0.1);
  }
  .tollywood-wrapper .avatar img { width: 100%; height: 100%; object-fit: cover; }

  /* Bottom Nav */
  .tollywood-wrapper .bottom-nav {
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
    padding: 8px 24px;
  }

  .tollywood-wrapper .nav-items { display: flex; justify-content: space-around; align-items: center; }

  .tollywood-wrapper .nav-item-active {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e10111;
    color: #fff1ef;
    border-radius: 9999px;
    padding: 12px;
    box-shadow: 0 0 15px #e10111;
    transition: transform 0.15s;
    text-decoration: none;
  }
  .tollywood-wrapper .nav-item-active:active { transform: scale(0.9); }

  .tollywood-wrapper .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(208,197,175,0.7);
    padding: 12px;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;
    background: none;
    border: none;
  }
  .tollywood-wrapper .nav-item:hover { color: #f2ca50; }

  .tollywood-wrapper .nav-label {
    font-family: 'Hanken Grotesk', sans-serif;
    font-size: 10px;
    font-weight: 600;
    margin-top: 4px;
    letter-spacing: 0.05em;
  }

  .tollywood-wrapper main { padding-top: 96px; padding-bottom: 128px; }

  .tollywood-wrapper .material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
  .tollywood-wrapper .fill-icon { font-variation-settings: 'FILL' 1; }
`;

function useIntersectionObserver() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function BentoCard({ className = "", children, onClick }) {
  const [ref, visible] = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`glass-card bento-card ${visible ? "visible" : ""} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      data-hovered={hovered}
    >
      {typeof children === "function" ? children(hovered) : children}
    </div>
  );
}

export default function TollywoodSelection() {
  const navigate = useNavigate();

  return (
    <div className="tollywood-wrapper">
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
      <header className="header">
        <div className="logo-area">
          <button onClick={() => navigate("/world")} className="nav-explore mr-4" style={{display: 'flex'}}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="material-symbols-outlined fill-icon logo-icon">movie_filter</span>
          <h1 className="logo-text">CINEGRAPH</h1>
        </div>
        {/* <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <button className="nav-explore">
            <span className="material-symbols-outlined">search</span>
            <span>EXPLORE</span>
          </button>
          <div className="avatar">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIiog0XmA8E0ug5dwd5vwyHkdbAlSVNbXi91UAJ69MQ8cclwLgbLry1CrtwvI_FZQ54rAFL1APqtdmDyx0IVAD-FH6ZujjIxYrwX9gCIShSvwSvxSMvAdeEm3gGMJAP4mrf7ZNFh_WNeFOPf2rESZaBrqkW4xuQ4nN035R037KMgEY8eb8ikreOTRbEGxr4mBxg9Ts8KgaJZv7BXSzbMcd-Edn3hhMQ8tEAgrbZsLlKHA4Igd7km38KOMIPeBq1bSEhLz_MtdwF9o"
              alt="Profile"
            />
          </div>
        </div> */}
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-inner">
            <img
              className="hero-img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn3VcB2M59Oe_wMyTNETEFTQ86qzbZg-yL9k4aFTFkHwP6qVfq477TUTGSYsHTfpPiB7rn48kCcVo1szXHdgO0hu8gqcyr5k4MlmJ_8zZRJ07MkiaTjVAP17ZZtjrVtmfjJc4qqlCuuTAS4ErFqe_NIMSZvVSoCt-aEbHdjIFobdOFRdRw_uqdNY3MFP3wUm2ZYHmm5GYgqj5e-u3cprEj1EFWhrFa083nR7eRfjimmOcA2i-naGC74a4-pW-YeyJQIY_NviHXM34"
              alt="Tollywood Hero"
            />
            <div className="absolute inset-0 cinematic-gradient" />
            <div className="hero-content">
              <span className="badge red-glow-btn">PREMIERING NOW</span>
              <h2 className="hero-title">TOLLYWOOD REIGNS</h2>
              <p className="hero-desc">
                Experience the high-octane energy and cultural grandeur of Telugu cinema. From gravity-defying action to heart-wrenching period sagas.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <button className="btn-primary red-glow-btn" onClick={() => navigate('/posters/tollywood/mass-action')}>
                  <span className="material-symbols-outlined fill-icon">play_arrow</span>
                  START EXPERIENCE
                </button>
                {/* <button className="btn-secondary">VIEW TRAILER</button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Bento Grid */}
        <section className="categories-section">
          <div className="section-header">
            <div>
              <h3 className="section-title">EXPLORE CATEGORIES</h3>
              <div className="section-underline" />
            </div>
            {/* <button className="view-all-btn">VIEW ALL</button> */}
          </div>

          <div className="bento-grid">
            {/* Mass Action - Large */}
            <BentoCard className="bento-large" onClick={() => navigate('/posters/tollywood/mass-action')}>
              {(hovered) => (
                <>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiYbiIvCq94YRgsnIpLV8sSs0BD6yCsLasxOuFff527qt7a-tLavkDyVeuEqM5ucbTEOF8-qYZ9YBC1maQKTer9neZISBcdXrKLIJyTpp79pyBJnOGPiSlpG6LpFUlrKp0ExeyivVHa2ToD9ZKE57cKwXv2Sana-bIRR5Xs0EPSPedxsPOjqDnPQC8XONdfXuDLNhmU17BxRt81bG6x9ZvgT0mrDk3lzRSjbx85tEy1Z0cgeFt2hBfgC8M462x6DiLB8vgI6_t-Ao"
                    alt="Mass Action"
                  />
                  <div className="gradient-overlay" />
                  <div className="card-content-lg">
                    <h4 className="card-title-lg" style={{ color: hovered ? "#f2ca50" : "white" }}>
                      MASS ACTION
                    </h4>
                    <p className="card-subtitle">High-octane heroics &amp; gravity-defying spectacles.</p>
                  </div>
                  <div className="card-icon">
                    <span className="material-symbols-outlined" style={{ fontSize: 40 }}>local_fire_department</span>
                  </div>
                </>
              )}
            </BentoCard>

            {/* Royal Warrior - Wide */}
            <BentoCard className="bento-wide" onClick={() => navigate('/posters/tollywood/royal-warrior')}>
              {(hovered) => (
                <>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRoKZz9iaBHT3RcUrYojY58UICtca9q1pGAtv5mHMTgUgKsOszbxBYN8l1C2FV6UeKDX_iOQ8jtd0Ll9Bg3uwclZs6sFC8htMKPnbTAMUtMw80W11QnD1VC60K3ttzlbMG-zyIbHqk9OeKqPFtPj9s_tnW92YVK4NoSvwmcbs0ganQjNb6zys-ww2GEwZ_1iuObYJwafX_FVQw6Vfjt3x6yaXJ0fe0KWZFqFhfzifOQY9MQjspVN8x6d5DBX4dU3GujUCEg2Rqzfs"
                    alt="Royal Warrior"
                    style={{ opacity: 0.5 }}
                  />
                  <div className="gradient-overlay" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                  <div className="card-content-sm" style={{ padding: 24 }}>
                    <h4 className="card-title-md" style={{ color: hovered ? "#f2ca50" : "white" }}>
                      ROYAL WARRIOR
                    </h4>
                    <span className="card-label">LEGENDS REBORN</span>
                  </div>
                </>
              )}
            </BentoCard>

            {/* Police Power */}
            <BentoCard onClick={() => navigate('/posters/tollywood/police-power')}>
              {(hovered) => (
                <>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjZe81LKKR2jeldQ_r-0B7FTxasVrjxbuw6v5nhA9FNtveRuQ9qLYX0dp1A8SkjBOdA9nqbpHXWOJFDEAxWGHhE-Si9GmnQGQfkCGEXyS4KONwSLTMxk4SDQ1pNNp7Mh6QqIYQwLVYD0GSbY98r-sGozF0BatFT6nHIDbDN8jsr6vQab80S3mQRmaxjYtFPjBmjalq2RfvYcrITF0zMZg41s0_kCOWEMrnr2QWQrSmQEYum2Gj9fqE747bpuhnRaINuhUP6npKpLc"
                    alt="Police Power"
                    style={{ opacity: 0.4 }}
                  />
                  <div className="gradient-overlay" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                  <div className="card-content-sm">
                    <h4 className="card-title-sm" style={{ color: hovered ? "#f2ca50" : "white" }}>
                      POLICE POWER
                    </h4>
                  </div>
                </>
              )}
            </BentoCard>

            {/* Village Hero */}
            <BentoCard onClick={() => navigate('/posters/tollywood/village-hero')}>
              {(hovered) => (
                <>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-mGDKhGaZDzZidFtoMTo7zMjfjMKd9KZ1smrdgmhD2v92G0uItyVRNJkDpM2x8hquyYgASWEZO9rqN03V2SqCpMAGL7_uNuN9eQK7b9sy4mocga-ID21xZb-7K3IWevzSp5sWA222Yi_iKeS69z9pPz-spG9xHHe_mbecErER5KQ5vPIvRxLWeGOil2IdxPXPsj2Gx3haF80_L0YDMYLamqN08k7cj5c3f7UkgE6BhkqVV-m_BpAviun_RK3hJwmGCA1eV2wJ7wU"
                    alt="Village Hero"
                    style={{ opacity: 0.4 }}
                  />
                  <div className="gradient-overlay" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
                  <div className="card-content-sm">
                    <h4 className="card-title-sm" style={{ color: hovered ? "#f2ca50" : "white" }}>
                      VILLAGE HERO
                    </h4>
                  </div>
                </>
              )}
            </BentoCard>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-items">
          <button onClick={() => navigate('/world')} className="nav-item-active">
            <span className="material-symbols-outlined fill-icon">photo_library</span>
            <span className="nav-label">Gallery</span>
          </button>
          <button onClick={() => navigate('/')} className="nav-item">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="nav-label">Generate</span>
          </button>
          <button className="nav-item">
            <span className="material-symbols-outlined">person</span>
            <span className="nav-label">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
