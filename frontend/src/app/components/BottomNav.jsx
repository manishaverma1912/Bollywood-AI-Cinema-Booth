import { Globe, Sparkles, User, Image as ImageIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    if (location.pathname.includes("/world")) return "worlds";
    if (location.pathname.includes("/categories") || location.pathname.includes("/posters")) return "gallery";
    if (location.pathname.includes("/capture")) return "generate";
    return "worlds";
  };

  const activeTab = getActiveTab();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-card rounded-full p-2 flex items-center gap-2">
        <NavItem
          id="worlds"
          label="WORLDS"
          icon={<Globe className="w-5 h-5" />}
          isActive={activeTab === "worlds"}
          onClick={() => navigate("/world")}
          activeColor="bg-gold text-obsidian"
        />
        <NavItem
          id="gallery"
          label="GALLERY"
          icon={<ImageIcon className="w-5 h-5" />}
          isActive={activeTab === "gallery"}
          onClick={() => navigate("/world")} // Or back to current world
          activeColor="bg-red text-white"
        />
        <NavItem
          id="generate"
          label="GENERATE"
          icon={<Sparkles className="w-5 h-5" />}
          isActive={activeTab === "generate"}
          onClick={() => {}}
        />
        <NavItem
          id="profile"
          label="PROFILE"
          icon={<User className="w-5 h-5" />}
          isActive={activeTab === "profile"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

const NavItem = ({ label, icon, isActive, onClick, activeColor = "bg-white/10 text-white" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-20 h-16 rounded-full transition-all duration-300 ${
        isActive ? activeColor : "text-white/50 hover:text-white/80 hover:bg-white/5"
      }`}
    >
      <div className={`mb-1 ${isActive && activeColor.includes("text-obsidian") ? "text-obsidian" : ""}`}>{icon}</div>
      <span className={`text-[10px] font-bold tracking-wider ${isActive && activeColor.includes("text-obsidian") ? "text-obsidian" : ""}`}>{label}</span>
    </button>
  );
};

export default BottomNav;
