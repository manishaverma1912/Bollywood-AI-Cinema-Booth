import { useNavigate } from "react-router";
import { worlds } from "../data/worldsData";
import BottomNav from "../components/BottomNav";

const WorldSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-obsidian text-white overflow-x-hidden pb-32">
      {/* Background Particles (Mocked with simple CSS for now) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#f2ca50] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_#f2ca50] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#f2ca50] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-widest text-white mb-2">
            AI CINEMA
          </h1>
          <h2 className="font-display text-6xl md:text-8xl font-black tracking-widest gold-gradient-text">
            PHOTOBOOTH
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-body">
            Step into the spotlight. Choose your cinematic universe and become the star of your own poster.
          </p>
        </div>

        {/* Worlds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world) => {
            const Icon = world.icon;
            return (
            <div
              key={world.id}
              onClick={() => navigate(`/categories/${world.id}`)}
              className="group relative h-40 glass-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {/* Subtle background glow based on world color */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: `var(--color-world-${world.id === 'business' ? 'business' : world.id.replace('-', '')})`, filter: 'brightness(2)' }}
              ></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="text-3xl">{Icon && <Icon className="w-8 h-8" strokeWidth={1.5} />}</div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider text-white/50">
                  {world.categoriesCount} STYLES
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                  {world.name}
                </h3>
                <p className="text-xs text-red font-bold tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  {world.tagline}
                </p>
                <p className="text-sm text-white/50 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0">
                  {world.theme}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <span className="text-gold">→</span>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WorldSelection;
