import { useEffect, useRef, useState } from 'react';
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const MyMap = (props) => {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(Number(props.longitude));
  const [mapLatitude, setMapLatitude] = useState(Number(props.latitude));
  const [mapZoom, setMapZoom] = useState(18);
  const [map, setMap] = useState({});
  const [marker, setMarker] = useState(null);

  useEffect(() => {

    import('@tomtom-international/web-sdk-maps')
      .then((tt) => {
        try{
          const newMap = tt.map({
          key: 'LuXWupcXRpMmpMQKpFC6HEF1HWJjAhFp',
          container: mapElement.current,
          center: [mapLongitude, mapLatitude],
          zoom: mapZoom
        })
        const newMarker = new tt.Marker().setLngLat([mapLongitude,mapLatitude ]).addTo(newMap);
        setMarker(newMarker);
        setMap(newMap);
        }catch(e){
          console.log(e);
        }
        return () => {
            newMarker.remove();
            newMap.remove();
          };
      })
      .catch((error) => {
        console.log(error+" "+mapLongitude+"|"+mapLatitude);
      });
  }, []);

  return (<>
  <div ref={mapElement} className="mapDiv"  style={{"width":"100%","height":"100%"}}/>
  </>);
}

export default MyMap