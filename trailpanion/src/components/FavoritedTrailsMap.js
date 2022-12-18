import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ";

const FavoritedTrailsMap = ({ favoritedTrails }) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    if (favoritedTrails) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [-99.4805, 41.1983],
        zoom: 3,
      });

      //   Create default markers
      favoritedTrails.map((favorite) =>
        new mapboxgl.Marker().setLngLat([favorite.lon, favorite.lat]).addTo(map)
      );

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Clean up on unmount
      return () => map.remove();
    }
  }, [favoritedTrails]);

  return <div className="map-container shadow-xl" ref={mapContainerRef} />;
};

export default FavoritedTrailsMap;
