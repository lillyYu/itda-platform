import { Marker, NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import anchor from 'images/anchor.svg'

const Map = ({language}) => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId="map"
        defaultCenter={{ lat: 37.492708, lng: 127.015470 }}
        defaultZoom={17}
        zoomControl={true}
      >
        <Marker
          icon={anchor}
          position={{ lat: 37.492708, lng: 127.015470 }}
          animation={2}
          title={
            language === "ko"
            ? "서울특별시 서초구 서초중앙로 20길 33-17, 서초빌리지 1, 202호"
            : "2F, 202, Seocho village 1, 33-17, Seochojungang-ro 20-gil, Seocho-gu, Seoul, Republic of Korea"
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