import { Ending, Ingredient } from "../../types/game";
import { SPICE_LEVELS, SAUCES } from "../../constants/data";
import ProfessorFeedback from "./ProfessorFeedback";

interface ResultScreenProps {
  ending: Ending;
  selectedIngredients: Ingredient[];
  spiceLevel: number | null;
  selectedSauces: string[];
  onReset: () => void;
}

export default function ResultScreen({
  ending,
  selectedIngredients,
  spiceLevel,
  selectedSauces,
  onReset,
}: ResultScreenProps) {
  const spiceInfo = spiceLevel !== null ? SPICE_LEVELS[spiceLevel] : null;
  const chosenSauces = SAUCES.filter((s) => selectedSauces.includes(s.id));

  return (
    <div className={`min-h-screen bg-gradient-to-b ${ending.bg} flex flex-col items-center justify-center p-4`}>
      <div className="w-full max-w-sm">

        {/* 시험지 카드 */}
        <div className="bg-white border-4 border-gray-400 rounded-2xl shadow-2xl overflow-hidden">

          {/* 헤더 */}
          <div className="bg-gray-800 text-white text-center py-2 px-4 font-black text-sm tracking-widest">
            ◆ 마라탕 최종 평가서 ◆
          </div>

          {/* 스탬프 라인 */}
          <div className="bg-gray-100 border-b-2 border-gray-300 text-center text-xs text-gray-500 py-1 font-mono">
            마라탕학과 &nbsp;|&nbsp; 담당교수: 박마라 교수
          </div>

          <div className="p-5">

            {/* 교수님 피드백 */}
            <ProfessorFeedback emotion={ending.emotion} comment={ending.comment} />

            {/* 학점 박스 */}
            <div className="border-2 border-gray-300 rounded-xl p-4 mb-5 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">엔딩</p>
                  <p className="font-black text-base text-gray-800">{ending.title}</p>
                </div>
                <div className={`w-20 h-20 rounded-xl border-4 ${ending.gradeBorder} flex items-center justify-center`}>
                  <span className={`text-4xl font-black ${ending.gradeColor}`}>{ending.grade}</span>
                </div>
              </div>

              {/* 요약 */}
              <div className="border-t border-gray-200 pt-3 space-y-1.5 text-xs text-gray-600">
                <p>
                  <span className="font-bold text-gray-700">선택 재료:</span>{" "}
                  {selectedIngredients.map((i) => i.name).join(", ")}
                </p>
                <p>
                  <span className="font-bold text-gray-700">맵기:</span>&nbsp;
                  {spiceInfo?.label} — {spiceInfo?.desc}&nbsp;{spiceInfo?.face}
                </p>
                <p>
                  <span className="font-bold text-gray-700">소스:</span>{" "}
                  {chosenSauces.map((s) => s.name).join(", ")}
                </p>
              </div>
            </div>

            {/* 마라탕 이미지 플레이스홀더 */}
            {/* <img src="/maratang.png" alt="마라탕" className="w-full h-24 object-cover rounded-xl mb-4" /> */}
            <div className="w-full h-24 rounded-xl mb-4 border-2 border-gray-200 bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center gap-2 text-3xl">
              🫕🌶️🥢
            </div>

            {/* 다시 도전 버튼 */}
            <button
              onClick={onReset}
              className="w-full bg-red-500 hover:bg-red-600 active:scale-95 active:translate-y-1 active:border-b-0
                         text-white font-black text-xl py-4 rounded-2xl
                         border-b-4 border-red-800 shadow-md transition-all duration-75">
              🔄 다시 도전!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
