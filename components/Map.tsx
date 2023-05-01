import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import getCenter from 'geolib/es/getCenter';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { Result } from 'postcss';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search results object into the
  // { "longitute": -0.109889, "latitude": 51.521245 } object
  // object
  const coordinates = searchResults.map(({ lat, long }) => ({
    latitude: lat,
    longitude: long,
  }));
  // console.log(`coordinates: ${JSON.stringify(coordinates, null, 4)}`);

  const center = getCenter(coordinates);
  // console.log(`center: ${JSON.stringify(center, null, 4)}`);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  // console.log(`selectedLocattion: ${selectedLocation}`);

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/juyoung0722/clh3nbxlo008901ppajmqbto9'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={evt => setViewport(evt.viewState)}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='curosr-pointer text-2xl'
              aria-label='push-pin'
            >
              <MapPinIcon className='h-6 w-6 text-red-500' />
            </p>
          </Marker>

          {/* The popup that should show if we click on a Marker */}
          {selectedLocation.long == result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              longitude={result.long}
              latitude={result.lat}
            >
              {result.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
