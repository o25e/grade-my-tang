import { SAUCES } from "../../constants/data";

interface SauceScreenProps {
  selectedSauces: string[];
  onToggle: (id: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function SauceScreen({ selectedSauces, onToggle, onBack, onSubmit }: SauceScreenProps) {
  const canSubmit = selectedSauces.length >= 2;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-yellow-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-amber-700 border-4 border-amber-900 rounded-t-2xl text-white text-center py-3 font-black text-xl tracking-widest shadow-lg">
          🥢 소스 선택
        </div>
        <div className="bg-amber-50 border-4 border-amber-700 border-t-0 rounded-b-2xl shadow-2xl px-5 py-6">

          <p className="text-center text-sm text-gray-500 mb-4">
            최소 2개 이상 선택 ({selectedSauces.length}/6)
          </p>

          <div className="grid grid-cols-3 gap-3">
            {SAUCES.map((sauce) => {
              const isSel = selectedSauces.includes(sauce.id);
              return (
                <button
                  key={sauce.id}
                  onClick={() => onToggle(sauce.id)}
                  className={`
                    flex flex-col items-center gap-2 py-4 rounded-2xl border-2 font-bold text-sm
                    transition-all duration-75 active:scale-90
                    ${isSel
                      ? "bg-amber-400 border-amber-600 text-white scale-105 shadow-lg border-b-4"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-amber-50 border-b-2"
                    }
                  `}>
                  <span className="text-3xl">{sauce.emoji}</span>
                  <span className="text-xs leading-tight text-center">{sauce.name}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-400 hover:bg-gray-500 active:scale-95 active:translate-y-1 active:border-b-0
                         text-white font-black py-3 rounded-2xl border-b-4 border-gray-700 shadow-md transition-all duration-75">
              ← 뒤로
            </button>
            <button
              onClick={onSubmit}
              disabled={!canSubmit}
              className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed
                         active:scale-95 active:translate-y-1 active:border-b-0
                         text-white font-black py-3 rounded-2xl
                         border-b-4 border-red-800 disabled:border-gray-600
                         shadow-md transition-all duration-75">
              🎓 평가받기!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
