"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    naver: any; // 추후 타입 정의 가능
  }
}

export default function NaverMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=6f5nvg70kn`;
    script.async = true;

    script.onload = () => {
      const { naver } = window;
      if (!naver) return;

      // 좌표 확인 (위도, 경도 순서 다시 점검)
      const position = new naver.maps.LatLng(34.966028881, 127.561955836);

      // 지도 생성
      const map = new naver.maps.Map("map", {
        center: position,
        zoom: 16,
      });

      // ✅ 마커 생성 (map 전달 명확하게)
      const marker = new naver.maps.Marker({
        position,
        map: map,
        title: "한우대가 NO.9",
      });

      console.log("Marker created:", marker);
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div id="map" className="w-full max-w-xl h-64 mx-auto rounded-lg shadow" />
  );
}
