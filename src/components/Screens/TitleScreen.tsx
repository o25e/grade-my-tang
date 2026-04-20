import { useState } from "react";
import { useSound } from "../../hooks/useSound";
import { UserInfo } from "../../types/game";

interface TitleScreenProps {
  onStart: () => void;
  onInstructions: () => void;
  onShowRanking: () => void;
  userInfo?: UserInfo | null;
  onLogout?: () => void;
}

export default function TitleScreen({ onStart, onInstructions, onShowRanking, userInfo, onLogout }: TitleScreenProps) {
  const { playPop } = useSound();
  const [startHover, setStartHover] = useState(false);
  const [manualHover, setManualHover] = useState(false);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col items-center justify-end"
      style={{ backgroundImage: "url('/img/screen/game_start.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* preload ManualScreen image */}
      <img src="/img/screen/game_rule.webp" className="hidden" aria-hidden alt="" />

      {/* 게임 버튼 */}
      <div className="absolute z-10 flex flex-col items-center" style={{ right: "2%", bottom: "1%", gap: "0px" }}>
        <button
          onClick={() => { playPop(); onStart(); }}
          onMouseEnter={() => setStartHover(true)}
          onMouseLeave={() => setStartHover(false)}
          className="active:scale-95 transition-transform duration-75 bg-transparent border-none p-0"
        >
          <img
            src={startHover ? "/img/button_start_hover.webp" : "/img/button_start.webp"}
            alt="시작하기"
            className="w-64 select-none"
            draggable={false}
          />
        </button>
        <button
          onClick={() => { playPop(); onInstructions(); }}
          onMouseEnter={() => setManualHover(true)}
          onMouseLeave={() => setManualHover(false)}
          className="active:scale-95 transition-transform duration-75 bg-transparent border-none p-0"
        >
          <img
            src={manualHover ? "/img/button_manual_hover.webp" : "/img/button_manual.webp"}
            alt="게임방법"
            className="w-64 select-none"
            draggable={false}
          />
        </button>
      </div>

      {/* 유저 정보 / 계정 전환 — 좌측 상단 */}
      {userInfo && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "16px",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,0,0,0.45)",
            borderRadius: "8px",
            padding: "5px 10px",
            fontFamily: "'BazziGame', sans-serif",
            color: "#FFFBEB",
            fontSize: "13px",
          }}
        >
          <span>🌶️ {userInfo.id} · {userInfo.university}</span>
          <button
            onClick={() => { playPop(); onLogout?.(); }}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "5px",
              color: "#FFFBEB",
              fontSize: "12px",
              cursor: "pointer",
              padding: "2px 7px",
              fontFamily: "'BazziGame', sans-serif",
            }}
          >
            계정 전환
          </button>
        </div>
      )}

      {/* 랭킹 버튼 — 우측 하단 소형 */}
      <button
        onClick={() => { playPop(); onShowRanking(); }}
        style={{
          position: "absolute",
          left: "16px",
          bottom: "16px",
          zIndex: 10,
          background: "#D97706",
          border: "2px solid #92400E",
          borderRadius: "8px",
          padding: "6px 14px",
          color: "#FFFBEB",
          fontSize: "15px",
          cursor: "pointer",
          fontFamily: "'BazziGame', sans-serif",
          boxShadow: "0 3px 0 #92400E",
        }}
        onMouseDown={e => (e.currentTarget.style.transform = "translateY(2px)")}
        onMouseUp={e => (e.currentTarget.style.transform = "")}
        onMouseLeave={e => (e.currentTarget.style.transform = "")}
      >
        🌶️ 랭킹
      </button>
    </div>
  );
}
