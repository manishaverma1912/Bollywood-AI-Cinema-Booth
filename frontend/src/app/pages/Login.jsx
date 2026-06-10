import { useState } from "react";
import { useNavigate } from "react-router";
import { Lock, User, Film } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const envUser = import.meta.env.VITE_APP_USERNAME;
    const envPass = import.meta.env.VITE_APP_PASSWORD;

    if (username === envUser && password === envPass) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid access credentials");
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-white flex flex-col items-center justify-center relative overflow-hidden font-body">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red/20 via-obsidian to-obsidian"></div>
      
      {/* Little floating stars */}
      <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-gold rounded-full opacity-50 shadow-[0_0_10px_rgba(242,202,80,1)]"></div>
      <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-gold rounded-full opacity-70 shadow-[0_0_10px_rgba(242,202,80,1)]"></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold/40 flex items-center justify-center mb-8 bg-black/50 backdrop-blur-sm">
          <Film className="w-8 h-8 sm:w-10 sm:h-10 text-gold" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-center text-gold mb-2 tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(242,202,80,0.3)]">
          Director's Access
        </h1>
        <p className="text-xs sm:text-sm text-white/50 tracking-[0.2em] uppercase mb-10 text-center">
          Authorized Personnel Only
        </p>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gold/60" />
            </div>
            <input
              type="text"
              required
              className="w-full bg-black/40 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-body text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gold/60" />
            </div>
            <input
              type="password"
              required
              className="w-full bg-black/40 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-body text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-xs text-center font-bold uppercase tracking-wider animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-gold to-yellow-600 text-obsidian font-bold py-4 rounded-full text-sm tracking-[0.1em] uppercase hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all flex items-center justify-center"
          >
            Authenticate Access
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 uppercase">
        POWERED BY <span className="text-gold">@Arkstarkinnovation</span>
      </div>
    </div>
  );
};

export default Login;
