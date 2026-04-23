interface MobileWarningModalProps {
  onClose: () => void;
}

export default function MobileWarningModal({ onClose }: MobileWarningModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        padding: "0 16px",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          width: "100%",
          maxWidth: "384px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 900,
            color: "#1F2937",
            margin: 0,
          }}
        >
          ⚠️ 플레이 유의사항
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#4B5563",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          본 게임은 PC 환경에 최적화되어 있어, 모바일 환경에서는 레이아웃이<br />
          원활하지 않을 수 있습니다. 세로보단 가로 플레이를 권장합니다.
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: "8px",
            width: "100%",
            padding: "10px 0",
            borderRadius: "12px",
            background: "#A855F7",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
          onMouseDown={e => ((e.currentTarget as HTMLButtonElement).style.background = "#7E22CE")}
          onMouseUp={e => ((e.currentTarget as HTMLButtonElement).style.background = "#A855F7")}
          onTouchStart={e => ((e.currentTarget as HTMLButtonElement).style.background = "#7E22CE")}
          onTouchEnd={e => ((e.currentTarget as HTMLButtonElement).style.background = "#A855F7")}
        >
          확인
        </button>
      </div>
    </div>
  );
}
