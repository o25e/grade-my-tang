import { Ending, Ingredient } from "../../types/game";
import { SPICE_LEVELS, SAUCES } from "../../constants/data";

interface ResultScreenProps {
  ending: Ending;
  selectedIngredients: Ingredient[];
  spiceLevel: number | null;
  selectedSauces: string[];
  onReset: () => void;
}

const CONFETTI_ITEMS = [
  { left: "2%",  top: "-8px",  delay: 0,    emoji: "🌸" },
  { left: "18%", top: "-12px", delay: 0.25, emoji: "🌼" },
  { left: "38%", top: "-6px",  delay: 0.5,  emoji: "✨" },
  { left: "55%", top: "-10px", delay: 0.15, emoji: "🎊" },
  { left: "72%", top: "-4px",  delay: 0.7,  emoji: "⭐" },
  { left: "88%", top: "-8px",  delay: 0.4,  emoji: "🌺" },
  { left: "10%", top: "12px",  delay: 0.9,  emoji: "💫" },
  { left: "60%", top: "8px",   delay: 1.1,  emoji: "🎉" },
];

export default function ResultScreen({
  ending,
  selectedIngredients,
  spiceLevel,
  selectedSauces,
  onReset,
}: ResultScreenProps) {
  const spiceInfo    = spiceLevel !== null ? SPICE_LEVELS[spiceLevel] : null;
  const chosenSauces = SAUCES.filter((s) => selectedSauces.includes(s.id));

  const isHappy    = ending.professorImage.includes("happy");
  const isBad      = ending.professorImage.includes("bad");
  const isSurprise = ending.professorImage.includes("suprise");

  const maratangImage = ending.score <= 20 ? "/img/maratang_bad.png" : "/img/maratang.png";

  return (
    <div
      className="w-full h-full flex flex-col select-none overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EDE9FE 0%, #DDD6FE 25%, #C4B5FD 60%, #A78BFA 100%)" }}
    >
      {/* ── 헤더 ── */}
      <div
        className="text-center py-2.5 font-black text-sm tracking-widest border-b-2 flex-shrink-0"
        style={{
          color: "#4C1D95",
          borderColor: "rgba(109,40,217,0.3)",
          background: "rgba(255,255,255,0.5)",
        }}
      >
        ◆ 마라탕 최종 평가서 ◆
      </div>

      {/* ── 상단: 말풍선(좌) + 교수 이미지(우) ── */}
      <div className="flex items-end px-3 pt-2 gap-3 flex-shrink-0" style={{ minHeight: "160px" }}>

        {/* 말풍선 영역 */}
        <div className="flex-1 flex flex-col gap-2 pb-4">

          {/* 학점 + 엔딩 제목 */}
          <div className="flex items-center gap-2">
            <div
              className={`w-14 h-14 rounded-xl border-4 ${ending.gradeBorder} flex items-center justify-center shadow-lg flex-shrink-0`}
              style={{ background: "white" }}
            >
              <span className={`text-3xl font-black ${ending.gradeColor}`}>{ending.grade}</span>
            </div>
            <div>
              <p className="font-black text-sm leading-tight" style={{ color: "#3B0764" }}>{ending.title}</p>
              <p className="text-xs font-bold" style={{ color: "#6D28D9" }}>마라탕 최종 성적 · {ending.score}점</p>
            </div>
          </div>

          {/* 말풍선 (꼬리 → 교수 방향 오른쪽) */}
          <div className="relative">
            <div
              className="rounded-2xl rounded-tr-none px-4 py-3 shadow-lg"
              style={{
                background: "white",
                border: "2px solid rgba(167,139,250,0.5)",
              }}
            >
              <p className="text-gray-800 text-xs leading-relaxed font-medium">{ending.comment}</p>
            </div>
            <div
              className="absolute -right-3 top-3"
              style={{
                width: 0, height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: "13px solid white",
              }}
            />
          </div>
        </div>

        {/* ── 교수 이미지 (우상단) ── */}
        <div
          className="relative flex-shrink-0 flex items-end justify-center"
          style={{ width: "130px", height: "160px" }}
        >
          {/* 어두운 오라 (bad 엔딩) */}
          {isBad && (
            <div
              className="absolute professor-aura"
              style={{
                inset: "-10px",
                background: "radial-gradient(circle, rgba(80,0,0,0.75) 0%, rgba(30,0,0,0.4) 55%, transparent 100%)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />
          )}

          <img
            src={ending.professorImage}
            alt="교수님"
            className={isSurprise ? "professor-surprise-img" : ""}
            style={{
              width: "130px",
              height: "160px",
              objectFit: "contain",
              objectPosition: "bottom",
              filter: isBad
                ? "drop-shadow(0 0 14px rgba(180,0,0,0.9)) drop-shadow(0 6px 12px rgba(0,0,0,0.5))"
                : "drop-shadow(0 6px 12px rgba(0,0,0,0.35))",
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* 꽃가루 효과 (happy 엔딩) */}
          {isHappy && CONFETTI_ITEMS.map((item, i) => (
            <span
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: item.left,
                top: item.top,
                fontSize: "13px",
                animation: `confetti-fall 1.8s ease-in ${item.delay}s infinite`,
                zIndex: 10,
              }}
            >
              {item.emoji}
            </span>
          ))}
        </div>
      </div>

      {/* ── 중앙: 마라탕 그릇 + 소스 그릇 ── */}
      <div className="flex-1 flex items-center justify-center gap-10 px-6 py-1">

        {/* 마라탕 그릇 */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative">
            <img
              src={maratangImage}
              alt="마라탕"
              style={{
                height: "180px",
                objectFit: "contain",
                filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.45))",
              }}
            />
          </div>
          {/* 맵기 배지 */}
          {spiceInfo && (
            <div
              className="text-xs font-black px-3 py-1 rounded-full shadow"
              style={{ background: "rgba(0,0,0,0.55)", color: "white" }}
            >
              {spiceInfo.label} {spiceInfo.face}
            </div>
          )}
        </div>

        {/* 소스 그릇 */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative">
            <img
              src="/img/bowl_sauce.png"
              alt="소스 그릇"
              style={{
                height: "150px",
                objectFit: "contain",
                filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.45))",
              }}
            />
            {/* 선택한 소스 이모지 오버레이 */}
            <div
              className="absolute flex flex-wrap items-start justify-center gap-1 overflow-hidden"
              style={{ top: "22%", left: "15%", right: "15%", bottom: "10%" }}
            >
              {chosenSauces.map((s) => (
                <span key={s.id} style={{ fontSize: "17px", lineHeight: 1 }}>
                  {s.emoji}
                </span>
              ))}
            </div>
          </div>
          <div
            className="text-xs font-black px-3 py-1 rounded-full shadow"
            style={{ background: "rgba(0,0,0,0.55)", color: "white" }}
          >
            소스 {chosenSauces.length}종
          </div>
        </div>
      </div>

      {/* ── 요약 정보 ── */}
      <div
        className="mx-3 rounded-xl px-4 py-2 flex-shrink-0"
        style={{
          background: "rgba(76,29,149,0.35)",
          border: "1px solid rgba(167,139,250,0.3)",
        }}
      >
        <div className="text-xs space-y-1">
          <p>
            <span className="font-bold text-yellow-300">재료</span>
            <span className="text-white/90 ml-1">{selectedIngredients.map((i) => i.emoji).join(" ")}</span>
          </p>
          <p>
            <span className="font-bold text-yellow-300">소스</span>
            <span className="text-white/90 ml-1">{chosenSauces.map((s) => s.name).join(", ")}</span>
          </p>
        </div>
      </div>

      {/* ── 다시 도전 버튼 ── */}
      <div className="px-3 py-2 flex-shrink-0">
        <button
          onClick={onReset}
          className="w-full font-black text-lg py-4 rounded-2xl border-b-4 transition-all duration-75 active:scale-95 active:border-b-0"
          style={{
            background: "linear-gradient(135deg, #F97316, #EA580C)",
            color: "white",
            borderColor: "#9A3412",
            boxShadow: "0 4px 0 #7C2D12",
          }}
        >
          🔄 다시 도전!
        </button>
      </div>
    </div>
  );
}
