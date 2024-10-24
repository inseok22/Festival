import React, { useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, MapPlaceholder } from '../styles/MapSt';

const MapContainer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 카카오맵 API가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const { kakao } = window;

      // 지도 설정 옵션
      const options ={
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 중심 좌표(서울 시청)
        level: 3, // 확대 레벨
      };

      // 지도 생성
      const map = new kakao.maps.Map(mapRef.current, options);

      // 마커 설정 (ex 서울 시청)
      const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>내 위치</CardTitle>
      </CardHeader>
      <MapPlaceholder ref={mapRef} />
    </Card>
  );
};

export default MapContainer;