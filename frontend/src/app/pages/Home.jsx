import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Clapperboard, Star, Theater, Sparkles } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  // Screensaver loop: Toggle between video and UI every 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo((prev) => !prev);
    }, 10000);

    return () => clearTimeout(timer);
  }, [showVideo]);

  // Robust Autoplay Handler
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (showVideo) {
      video.currentTime = 0;
      // Try playing with sound initially
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked unmuted autoplay. Mute it so it can still run visually.
          video.muted = true;
          video.play().catch(e => console.error("Autoplay failed completely", e));
        });
      }
    } else {
      // CRITICAL: Explicitly pause the video when switching to UI to prevent ghost audio!
      video.pause();
    }
  }, [showVideo]);

  // Global click listener: Once the user clicks anywhere, unmute the video permanently
  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
      }
    };
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <>
      {/* Video Overlay Layer */}
      <div 
        className={`fixed inset-0 bg-black z-50 cursor-pointer flex items-center justify-center transition-opacity duration-500 ${showVideo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setShowVideo(false)}
      >
        <video 
          ref={videoRef}
          src="/AI_Cinema_Booth.mp4" 
          playsInline 
          onEnded={() => setShowVideo(false)}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 right-8 text-white/50 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-body z-10 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 animate-pulse">
          Tap anywhere to skip
        </div>
      </div>

      {/* Main UI Layer */}
      <div className={`h-[100dvh] bg-obsidian text-white flex flex-col items-center justify-center relative overflow-hidden font-body transition-opacity duration-500 ${!showVideo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* Background overlay for that simple gradient feel matching the rest of the app */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red/20 via-obsidian to-obsidian"></div>
      
      {/* Little floating stars (Simple UI version) */}
      <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-gold rounded-full opacity-50 shadow-[0_0_10px_rgba(242,202,80,1)]"></div>
      <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-gold rounded-full opacity-70 shadow-[0_0_10px_rgba(242,202,80,1)]"></div>
      <div className="absolute bottom-[20%] left-[30%] w-1 h-1 bg-gold rounded-full opacity-40 shadow-[0_0_10px_rgba(242,202,80,1)]"></div>
      <div className="absolute bottom-[35%] right-[20%] w-2 h-2 bg-gold rounded-full opacity-30 shadow-[0_0_10px_rgba(242,202,80,1)]"></div>
      <div className="absolute top-[45%] left-[10%] w-1 h-1 bg-white rounded-full opacity-20"></div>
      <div className="absolute bottom-[10%] right-[40%] w-1.5 h-1.5 bg-white rounded-full opacity-30"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center py-6">
        
        <div className="flex flex-col items-center justify-center flex-1 w-full space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Top Area: Icons & Badge */}
          <div className="flex flex-col items-center space-y-4 mt-auto">
            {/* Top Icons */}
            <div className="flex gap-2 sm:gap-3 items-center text-gold/80">
              <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-gold" strokeWidth={1.5} />
              <Theater className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-gold" strokeWidth={1.5} />
              <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 border border-gold/40 rounded-full">
              <span className="text-gold text-[10px]">✦</span>
              <span className="text-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">AI-POWERED EXPERIENCE</span>
              <span className="text-gold text-[10px]">✦</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="flex flex-col items-center px-4 w-full">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gold mb-2 sm:mb-4 tracking-tight drop-shadow-2xl uppercase leading-none whitespace-nowrap">
              AI CINEMA BOOTH
            </h1>
            <h2 className="font-display text-sm sm:text-base md:text-xl text-white/90 tracking-[0.15em] md:tracking-[0.2em] uppercase">
              CHOOSE YOUR WORLD. BECOME THE STAR.
            </h2>
          </div>

          {/* Body Text */}
          <div className="space-y-2 sm:space-y-3 max-w-xl mx-auto px-4">
            <p className="font-display italic text-lg sm:text-xl text-white/90">
              Step into the spotlight.
            </p>
            <p className="text-white/60 text-sm sm:text-base leading-snug">
              Transform yourself into a cinematic star with AI-powered face-swap magic.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button 
              onClick={() => navigate("/world")}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gold text-obsidian rounded-full font-bold tracking-widest text-xs sm:text-sm uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(242,202,80,0.3)] flex items-center gap-2 sm:gap-3 mx-auto"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} /> GET STARTED
            </button>
          </div>

          {/* Steps */}
          <div className="flex flex-row justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap pb-4">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold font-bold text-xs sm:text-sm">
                01
              </div>
              <span className="text-white/60 text-[10px] sm:text-xs tracking-wider">Choose Character</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold font-bold text-xs sm:text-sm">
                02
              </div>
              <span className="text-white/60 text-[10px] sm:text-xs tracking-wider">Take Selfie</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold font-bold text-xs sm:text-sm">
                03
              </div>
              <span className="text-white/60 text-[10px] sm:text-xs tracking-wider">Get Your Poster</span>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 uppercase mt-auto">
          POWERED BY <span className="text-gold">@Arkstarkinnovation</span>
        </div>

      </div>
    </div>
    </>
  );
};

export default Home;
