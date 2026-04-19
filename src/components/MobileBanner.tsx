import { useEffect, useState } from "react";

export default function MobileBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{ zIndex: 9999 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center px-6"
    >
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl">
        <p className="text-base font-semibold leading-relaxed text-gray-900 mb-5">
          본 게임은 PC 환경에 최적화되어 있습니다.<br />
          원활한 플레이를 위해 컴퓨터 접속을 권장합니다.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg"
          aria-label="닫기"
        >
          확인
        </button>
      </div>
    </div>
  );
}
