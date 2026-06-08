import { useParams, useNavigate } from "react-router";
import { worlds } from "../data/worldsData";
import TopAppBar from "../components/TopAppBar";
import BottomNav from "../components/BottomNav";
import TollywoodSelection from "./TollywoodSelection";
import KDramaSelection from "./KDramaSelection";

const CategorySelection = () => {
  const { worldId } = useParams();
  const navigate = useNavigate();
  const world = worlds.find((w) => w.id === worldId);

  if (!world) {
    return <div className="text-white p-8">World not found.</div>;
  }

  if (world.id === "tollywood") {
    return <TollywoodSelection />;
  }

  if (world.id === "kdrama") {
    return <KDramaSelection />;
  }

  return (
    <div className="relative min-h-screen bg-obsidian text-white overflow-x-hidden pb-32 flex flex-col">
      {/* Background Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-br from-red-900/30 to-obsidian"
      ></div>

      <TopAppBar 
        level="02" 
        breadcrumbs={[
          { label: "Worlds" },
          { label: world.name }
        ]}
        onBack={() => navigate("/world")}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 flex-1 w-full">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red/10 mb-6">
            {world.icon && (() => { const Icon = world.icon; return <Icon className="w-5 h-5 text-red" strokeWidth={2} />; })()}
            <span className="text-red text-xs font-bold tracking-widest uppercase">
              {world.name} UNIVERSE
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-4 uppercase leading-tight max-w-3xl">
            {world.name} <br />
            EXPERIENCE
          </h1>
          <p className="text-white/70 font-body text-lg max-w-2xl">
            Choose your style. Curate your cinematic experience.
          </p>
          <div className="w-16 h-1 bg-red mt-8"></div>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {world.categories && world.categories.length > 0 ? (
            world.categories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/posters/${world.id}/${category.id}`)}
                className={`group relative rounded-[32px] overflow-hidden cursor-pointer ${category.span} h-[400px] border border-white/10 hover:border-white/30 transition-all duration-500`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Badge (if featured) */}
                {category.badge && (
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-gold text-obsidian text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(242,202,80,0.5)]">
                    {category.badge}
                  </div>
                )}

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/70 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-[32px] transition-colors duration-500 pointer-events-none"></div>
              </div>
            ))
          ) : (
            <div className="col-span-12 py-20 text-center text-white/50 border border-white/10 rounded-2xl border-dashed">
              Categories coming soon for {world.name}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CategorySelection;
