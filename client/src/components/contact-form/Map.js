import { Marker, NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import anchor from 'images/anchor.svg'

const Map = () => {
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
          title="서울특별시 서초구 서초중앙로 20길 33-17, 서초빌리지 1, 202호"
          // onClick={() => {
          //   alert('hello');
          // }}
        />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;