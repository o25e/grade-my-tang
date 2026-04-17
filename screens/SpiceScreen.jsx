import { SPICE_LEVELS } from "../constants/gameData";

export default function SpiceScreen({ spiceLevel, onSelect, onBack, onNext }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-orange-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-red-700 border-4 border-red-900 rounded-t-2xl text-white text-center py-3 font-black text-xl tracking-widest shadow-lg">
          🌶️ 맵기 선택
        </div>
        <div className="bg-orange-50 border-4 border-red-700 border-t-0 rounded-b-2xl shadow-2xl px-5 py-6">

          {/* face preview */}
          <div className="text-center text-7xl mb-5">
            {spiceLevel !== null ? SPICE_LEVELS[spiceLevel].face : "🤔"}
          </div>

          <div className="space-y-2">
            {SPICE_LEVELS.map(sp => (
              <button
                key={sp.level}
                onClick={() => onSelect(sp.level)}
                className={`
                  w-full flex items-center gap-4 px-4 py-3 rounded-xl border-2 font-bold
                  transition-all duration-75 active:scale-95
                  ${spiceLevel === sp.level
                    ? "bg-red-500 border-red-700 text-white scale-[1.02] shadow-lg border-b-4"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 border-b-2"
                  }
                `}>
                <span className="w-24 text-left text-lg">
                  {sp.peppers === 0 ? "✨ 없음" : "🌶️".repeat(sp.peppers)}
                </span>
                <span className="flex-1 text-left">{sp.label}</span>
                <span className="text-sm opacity-70">{sp.desc}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-400 hover:bg-gray-500 active:scale-95 active:translate-y-1 active:border-b-0
                         text-white font-black py-3 rounded-2xl border-b-4 border-gray-700 shadow-md transition-all duration-75">
              ← 뒤로
            </button>
            <button
              onClick={onNext}
              disabled={spiceLevel === null}
              className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed
                         active:scale-95 active:translate-y-1 active:border-b-0
                         text-white font-black py-3 rounded-2xl
                         border-b-4 border-orange-800 disabled:border-gray-600
                         shadow-md transition-all duration-75">
              다음 ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
