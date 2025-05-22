import { useRef } from "react";

export const useKakaoMapLoader = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapObj = useRef<kakao.maps.Map | null>(null);

  const onLoadKakaoAPI = async () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("❌ SDK 로드 안됨");
    }

    window.kakao.maps.load(() => {
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      if (mapContainer.current) {
        mapObj.current = new window.kakao.maps.Map(
          mapContainer.current,
          options
        );
        console.log("✅ 지도 생성 완료");
      }
    });
  };

  const onLoadFail = (e: Event) => console.error("❌ Kakao SDK 로드 실패", e);

  return { mapContainer, mapObj, onLoadKakaoAPI, onLoadFail };
};
