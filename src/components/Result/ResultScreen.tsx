import { Ending, Ingredient } from "../../types/game";

interface ResultScreenProps {
  ending: Ending;
  selectedIngredients: Ingredient[];
  spiceLevel: number | null;
  selectedSauces: string[];
  onReset: () => void;
}

export default function ResultScreen({
  ending,
  selectedSauces,
  onReset,
}: ResultScreenProps) {
  const isMalatangGood = ending.score > 50;
  const isSauceGood =
    !selectedSauces.includes("cilantro") && !selectedSauces.includes("mintchoco");

  const resultImage = isMalatangGood
    ? isSauceGood ? "/img/game_resultb1.png" : "/img/game_resultb2.png"
    : isSauceGood ? "/img/game_resultb3.png" : "/img/game_resultb4.png";

  const isBad      = ending.professorImage.includes("bad");
  const isSurprise = ending.professorImage.includes("suprise");

  return (
    <div className="relative w-full h-full select-none overflow-hidden">

      {/* Layer 1: 배경 */}
      <img
        src="/img/screen/game_result.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Layer 3: 교수님 (우측 상단, 마라탕 이미지 뒤) */}
      <div className="absolute top-6 right-36" style={{ zIndex: 10 }}>
        {isBad && (
          <div
            className="absolute professor-aura"
            style={{
              inset: "-10px",
              background:
                "radial-gradient(circle, rgba(80,0,0,0.75) 0%, rgba(30,0,0,0.4) 55%, transparent 100%)",
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
            width: "345px",
            height: "375px",
            objectFit: "contain",
            objectPosition: "bottom",
            filter: isBad
              ? "drop-shadow(0 0 14px rgba(180,0,0,0.9)) drop-shadow(0 6px 12px rgba(0,0,0,0.5))"
              : "drop-shadow(0 6px 12px rgba(0,0,0,0.35))",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>

      {/* Layer 2: 중앙 마라탕 결과 이미지 */}
      <div
        className="absolute inset-0 flex items-center justify-center pt-23"
        style={{ zIndex: 30 }}
      >
        <img
          src={resultImage}
          alt="마라탕 결과"
          className="w-full object-contain"
          style={{ filter: "drop-shadow(0 8px 28px rgba(0,0,0,0.5))", transform: "scale(1.2) translateY(19px)", transformOrigin: "center" }}
        />
      </div>

      {/* Layer 4: 말풍선 (좌측 상단) */}
      <div className="absolute top-8 left-16" style={{ zIndex: 20 }}>
        <img
          src="/img/chat.png"
          alt="말풍선"
          style={{ width: "370px", objectFit: "contain" }}
        />
      </div>

      {/* 다시 도전 버튼 */}
      <div className="absolute bottom-4 left-3 right-3" style={{ zIndex: 40 }}>
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
