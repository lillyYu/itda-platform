import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";
import anchor from "images/anchor.svg";

const Map = ({ language }) => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId="map"
        defaultCenter={{ lat: 37.5016117, lng: 127.041635 }}
        defaultZoom={18}
        zoomControl={true}
      >
        <Marker
          icon={anchor}
          position={{ lat: 37.5016117, lng: 127.041635 }}
          animation={2}
          title={
            language === "en-US"
              ? "Starting Building, 2F, 5, Teheran-ro 38-gil, Gangnam-gu, Seoul, Republic of Korea"
              : "서울시 강남구 테헤란로 38길 5, 2층 (스타팅빌딩)"
          }
          // onClick={() => {
          //   alert('hello');
          // }}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
