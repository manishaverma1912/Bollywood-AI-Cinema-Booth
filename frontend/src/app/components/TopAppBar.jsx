import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const TopAppBar = ({ breadcrumbs = [], level = "01", onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="w-full flex items-center justify-between p-6 px-8 relative z-50">
      {/* Left: Brand / Back */}
      <div className="flex items-center gap-4">
        {level !== "01" && (
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gold" />
          </button>
        )}
        <div className="font-display font-bold tracking-[0.2em] text-gold text-xl">
          CINEGRAPH
        </div>
      </div>

      {/* Middle: Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="hidden md:flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={
                  index === breadcrumbs.length - 1
                    ? "text-red font-medium"
                    : "text-white/50"
                }
              >
                {crumb.label}
              </span>
              {index < breadcrumbs.length - 1 && (
                <span className="text-white/20">›</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Right: Level Badge */}
      <div className="px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest bg-gold/5">
        LEVEL {level}
      </div>
    </div>
  );
};

export default TopAppBar;
