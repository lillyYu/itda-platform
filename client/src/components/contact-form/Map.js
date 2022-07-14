import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';

const Map = () => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"oh6f4evch1"}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId="map"
        defaultCenter={{ lat: 37.492708, lng: 127.015470 }}
        defaultZoom={17}
        zoomControl={true}
      >
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;