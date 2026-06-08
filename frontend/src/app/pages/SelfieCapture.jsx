import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { uploadToS3 } from "../utils/s3Upload";
import TopAppBar from "../components/TopAppBar";
import BottomNav from "../components/BottomNav";
import { QRCodeCanvas } from "qrcode.react";

export default function SelfieCapture() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [facingMode, setFacingMode] = useState("user");
  const [cameraAvailable, setCameraAvailable] = useState(true);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processingError, setProcessingError] = useState("");
  const [finalImageUrl, setFinalImageUrl] = useState(null);

  // Start Camera
  const startCamera = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraAvailable(false);
      return;
    }
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
      setCameraAvailable(true);
    } catch (err) {
      setCameraAvailable(false);
    }
  }, [facingMode]);

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facingMode]);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return null;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (facingMode === "user") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    setCapturedImage(dataUrl);
    sessionStorage.setItem("capturedSelfie", dataUrl);
    
    if (stream) stream.getTracks().forEach((t) => t.stop());
    return dataUrl;
  };

  const handleRetake = () => {
    setCapturedImage(null);
    sessionStorage.removeItem("capturedSelfie");
    startCamera();
  };

  const handleGenerate = async () => {
    if (isProcessing) return;
    
    let selfieData = capturedImage;
    if (!selfieData) return;

    setIsProcessing(true);
    setProcessingError("");
    setProgress(5);

    // Fake progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 5;
      });
    }, 500);

    try {
      const templateDataStr = sessionStorage.getItem("selectedPoster");
      if (!templateDataStr) {
        throw new Error("No template selected.");
      }
      
      const template = JSON.parse(templateDataStr);
      // Wait, the API needs the actual image blob
      // Here we simulate the fetch logic similar to Processing.jsx
      
      // Converting base64 to blob
      const selfieBlob = await fetch(selfieData).then(r => r.blob());
      const templateBlob = await fetch(template.image).then(r => r.blob());
      
      const formData = new FormData();
      formData.append("source_image", selfieBlob, "selfie.jpg");
      formData.append("target_image", templateBlob, "template.jpg");

      const response = await fetch("http://127.0.0.1:8002/swap", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        const errMsg = errData?.detail || "Processing failed";
        throw new Error(errMsg);
      }

      const resultBlob = await response.blob();
      const s3ImageUrl = await uploadToS3(resultBlob);
      sessionStorage.setItem("finalImageUrl", s3ImageUrl);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      setFinalImageUrl(s3ImageUrl);
    } catch (err) {
      console.error(err);
      clearInterval(progressInterval);
      setProcessingError(err.message || "Failed to generate poster. Make sure backend is running.");
      setIsProcessing(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1] overflow-x-hidden font-body flex flex-col">
      <style>{`
        .glass-panel {
            background: rgba(28, 27, 27, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-gold {
            box-shadow: 0 0 30px rgba(242, 202, 80, 0.3);
        }
        .particle-container {
            position: relative;
            width: 120px;
            height: 120px;
        }
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--color-gold);
            border-radius: 50%;
            animation: orbit 3s infinite linear;
        }
        @keyframes orbit {
            from { transform: rotate(0deg) translateX(50px) rotate(0deg); opacity: 1; }
            to { transform: rotate(360deg) translateX(50px) rotate(-360deg); opacity: 0; }
        }
        .sound-wave {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 40px;
        }
        .bar {
            width: 3px;
            background: var(--color-gold);
            border-radius: 10px;
            animation: sound-pulse 1.2s infinite ease-in-out;
        }
        @keyframes sound-pulse {
            0%, 100% { height: 10px; opacity: 0.5; }
            50% { height: 40px; opacity: 1; }
        }
        .scanline {
            position: absolute;
            width: 100%;
            height: 2px;
            background: rgba(245, 200, 66, 0.5);
            box-shadow: 0 0 15px var(--color-gold);
            animation: scan 2.5s infinite linear;
            z-index: 10;
        }
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
      
      <TopAppBar level="04" />

      <main className="pt-24 pb-32 px-5 md:px-16 flex-grow flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Left Section: Capture Face or Show Final Poster */}
        <section className="w-full lg:w-1/2 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-left-8 duration-700">
          {finalImageUrl ? (
            <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden border-4 border-[#F5C842]/50 glow-gold shadow-[0_0_50px_rgba(245,200,66,0.3)] animate-in zoom-in duration-500">
              <img src={finalImageUrl} alt="Generated Poster" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-[#F5C842]/20 p-2 glow-gold">
              {!capturedImage && <div className="absolute inset-0 scanline"></div>}
              <div className="w-full h-full rounded-full overflow-hidden relative glass-panel flex items-center justify-center bg-black">
                {capturedImage ? (
                   <img src={capturedImage} alt="Captured" className="w-full h-full object-cover opacity-90" />
                ) : (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover opacity-90"
                    style={{ transform: facingMode === "user" ? "scaleX(-1)" : "none" }}
                  />
                )}
                
                {/* Sound Wave Visualization */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="sound-wave">
                    <div className="bar" style={{ animationDelay: "0.1s" }}></div>
                    <div className="bar" style={{ animationDelay: "0.3s" }}></div>
                    <div className="bar" style={{ animationDelay: "0.2s" }}></div>
                    <div className="bar" style={{ animationDelay: "0.5s" }}></div>
                    <div className="bar" style={{ animationDelay: "0.4s" }}></div>
                    <div className="bar" style={{ animationDelay: "0.6s" }}></div>
                  </div>
                  <span className="text-[var(--color-gold)] mt-2 uppercase tracking-widest text-[10px] font-bold">Ambient Audio Capture</span>
                </div>
              </div>
            </div>
          )}

          <div className="text-center space-y-2 relative">
            <h2 className="text-white text-3xl font-display font-semibold">
              {finalImageUrl ? "Your Masterpiece" : "Capture Face"}
            </h2>
            <p className="text-white/70 max-w-xs mx-auto text-sm">
              {finalImageUrl 
                ? "Your face perfectly synced with the Bollywood aesthetic!" 
                : "Position your face within the golden ring to sync with the AI Director."}
            </p>
            {/* Flip camera button */}
            {!capturedImage && !finalImageUrl && (
              <button
                onClick={() => setFacingMode((m) => (m === "user" ? "environment" : "user"))}
                className="mt-4 p-3 bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-full hover:bg-[var(--color-gold)]/20 transition-colors"
                title="Flip Camera"
              >
                <span className="material-symbols-outlined">flip_camera_ios</span>
              </button>
            )}
          </div>
        </section>

        {/* Right Section: AI Processing or Result QR Code */}
        <section className={`w-full lg:w-1/2 flex flex-col items-center ${finalImageUrl ? 'gap-6' : 'justify-center gap-8 glass-panel rounded-3xl p-10'} relative overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700 min-h-[400px]`}>
          {finalImageUrl ? (
            <>
              <div className="relative w-full max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden border-4 border-[#F5C842]/50 glow-gold shadow-[0_0_50px_rgba(245,200,66,0.3)] animate-in zoom-in duration-500 glass-panel flex flex-col items-center justify-between p-6">
                <p className="font-display text-sm text-[var(--color-gold)] tracking-widest uppercase font-bold text-center mt-2">Scan to Download</p>
                
                <div className="bg-white rounded-xl p-4 shadow-[0_0_20px_rgba(245,200,66,0.25)] w-full aspect-square relative my-auto flex items-center justify-center">
                  <QRCodeCanvas value={finalImageUrl} style={{ width: "100%", height: "100%" }} includeMargin={false} fgColor="#0B0D2A" bgColor="#ffffff" />
                </div>
                
                <div className="flex gap-3 w-full mb-2">
                  <a
                    href={finalImageUrl}
                    download="bollywood-poster.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#F5C842] to-[#C49A00] text-[#0B0D2A] font-display font-bold text-xs tracking-wider text-center shadow-[0_4px_25px_rgba(245,200,66,0.4)] hover:scale-105 transition-transform flex items-center justify-center"
                  >
                    ⬇️ Download
                  </a>
                  <button
                    onClick={async () => {
                      if (navigator.share) {
                        try { await navigator.share({ title: "My Bollywood Poster!", url: finalImageUrl }); } catch(_) {}
                      } else {
                        await navigator.clipboard.writeText(finalImageUrl);
                        alert("Link copied!");
                      }
                    }}
                    className="flex-1 py-3 rounded-xl border-2 border-[var(--color-gold)]/50 bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-display font-bold text-xs tracking-wider text-center transition-colors hover:bg-[var(--color-gold)]/20 hover:scale-105 flex items-center justify-center"
                  >
                    📤 Share
                  </button>
                </div>
              </div>

              <div className="text-center space-y-3 relative w-full max-w-[320px]">
                <h2 className="text-[var(--color-gold)] text-3xl font-display font-semibold">You're a Star!</h2>
                <p className="text-white/70 text-sm italic font-display">Your personalised Bollywood poster is ready</p>
                <button
                  onClick={() => {
                    sessionStorage.removeItem("finalImageUrl");
                    sessionStorage.removeItem("capturedSelfie");
                    navigate("/");
                  }}
                  className="mt-4 text-white/50 text-sm hover:text-white/80 transition-colors uppercase tracking-widest font-bold block mx-auto"
                >
                  🎬 New Photo Session
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Decorative Movie Strip Background */}
              <div className="absolute -right-20 top-0 bottom-0 w-32 border-l border-white/5 opacity-10 flex flex-col gap-4 py-4 overflow-hidden pointer-events-none">
                <div className="w-24 aspect-[2/3] bg-white/5 rounded-sm"></div>
                <div className="w-24 aspect-[2/3] bg-white/5 rounded-sm"></div>
                <div className="w-24 aspect-[2/3] bg-white/5 rounded-sm"></div>
                <div className="w-24 aspect-[2/3] bg-white/5 rounded-sm"></div>
              </div>
              
              <div className="particle-container flex items-center justify-center">
                <div className="particle" style={{ animationDelay: "0s" }}></div>
                <div className="particle" style={{ animationDelay: "0.5s" }}></div>
                <div className="particle" style={{ animationDelay: "1s" }}></div>
                <div className="particle" style={{ animationDelay: "1.5s" }}></div>
                <div className="particle" style={{ animationDelay: "2s" }}></div>
                <div className="particle" style={{ animationDelay: "2.5s" }}></div>
                <span className="material-symbols-outlined text-[var(--color-gold)] text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  movie_filter
                </span>
              </div>
              
              <div className="text-center z-10">
                <h3 className="text-[var(--color-gold)] mb-6 text-2xl font-bold font-display">
                  Creating Your Cinematic Poster...
                </h3>
                
                <div className="flex flex-col gap-4 text-left mx-auto w-fit">
                  <div className="flex items-center gap-4 text-white/70">
                    <span className={`material-symbols-outlined text-[20px] ${isProcessing && progress > 10 ? 'text-[var(--color-gold)]' : ''}`}>auto_videocam</span>
                    <span className="text-xs tracking-widest uppercase font-bold">Analyzing Dramatic Lighting</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/70">
                    <span className={`material-symbols-outlined text-[20px] ${isProcessing && progress > 40 ? 'text-[var(--color-gold)]' : ''}`}>palette</span>
                    <span className="text-xs tracking-widest uppercase font-bold">Applying Midnight Cinema Grade</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/70">
                    <span className={`material-symbols-outlined text-[20px] ${isProcessing && progress > 70 ? 'text-[var(--color-gold)]' : ''}`}>history_edu</span>
                    <span className="text-xs tracking-widest uppercase font-bold">Generating Movie Title</span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full max-w-sm h-1 bg-[#353534] rounded-full overflow-hidden relative mt-4">
                <div
                  className="absolute inset-y-0 left-0 bg-[#e10111] shadow-[0_0_10px_#e10111] transition-all duration-300 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              {processingError && (
                 <div className="text-red-400 text-sm mt-2 text-center max-w-xs">{processingError}</div>
              )}

              {/* CTA */}
              <div className="pt-4 flex flex-col gap-4 w-full max-w-sm z-10">
                {isProcessing ? (
                  <button disabled className="w-full py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold text-sm tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 opacity-70">
                    GENERATING... <span className="material-symbols-outlined">bolt</span>
                  </button>
                ) : capturedImage ? (
                  <div className="flex gap-4 w-full">
                    <button
                      onClick={handleRetake}
                      className="flex-1 py-4 border-2 border-[var(--color-gold)]/50 bg-[var(--color-gold)]/5 text-[var(--color-gold)] font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-[var(--color-gold)]/10 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">replay</span> RETAKE
                    </button>
                    <button
                      onClick={handleGenerate}
                      className="flex-[1.5] py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold text-sm tracking-widest uppercase rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[var(--color-gold)]/20 flex items-center justify-center gap-2"
                    >
                      PROCEED <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={capturePhoto}
                    className="w-full py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold text-sm tracking-widest uppercase rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[var(--color-gold)]/20 flex items-center justify-center gap-2"
                  >
                    CAPTURE PHOTO <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  </button>
                )}
                <div className="text-center">
                  <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]">
                    Dramatic sound effects enabled
                  </span>
                </div>
              </div>
            </>
          )}
        </section>

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </main>

    </div>
  );
}
