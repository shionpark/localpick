"use client";

import Script from "next/script";
import { useKakaoMapLoader } from "../hooks/useKakaoMapLoader";
import { KAKAO_API_BASE_URL } from "@/constants/urls";

export default function KakaoMap() {
  const { mapContainer, onLoadKakaoAPI, onLoadFail } = useKakaoMapLoader();

  const addParams = new URLSearchParams({
    appkey: process.env.NEXT_PUBLIC_KAKAO_KEY || "",
    autoload: "false",
    libraries: "services",
  }).toString();
  const kakaoMapUrl = `${KAKAO_API_BASE_URL}?${addParams}`;

  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={kakaoMapUrl}
        onLoad={onLoadKakaoAPI}
        onError={onLoadFail}
      />
      <div ref={mapContainer} className="w-[60rem] h-[40rem]"></div>
    </>
  );
}
