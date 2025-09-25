"use client";
import { useEffect } from "react";

// 전역 타입 선언 (window.naver가 있다는 걸 TS에 알려줌)
declare global {
  interface Window {
    naver?: typeof naver;
  }
}

export default function NaverMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=6f5nvg70kn`;
    script.async = true;

    script.onload = () => {
      if (!window.naver) return;

      // 좌표 확인 (위도, 경도)
      const position = new window.naver.maps.LatLng(
        34.966028881,
        127.561955836
      );

      // 지도 생성
      const map = new window.naver.maps.Map("map", {
        center: position,
        zoom: 16,
      });

      // 마커 생성
      new window.naver.maps.Marker({
        position,
        map,
        title: "한우대가 NO.9",
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div id="map" className="w-full max-w-xl h-64 mx-auto rounded-lg shadow" />
  );
}
