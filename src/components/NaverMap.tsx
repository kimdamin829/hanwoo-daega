/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect } from "react";

// 전역 타입 선언 (naver는 어떤 타입인지 모르니까 그냥 any로 둠)
declare global {
  interface Window {
    naver?: any;
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
