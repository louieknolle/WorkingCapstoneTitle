import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useSelector } from 'react-redux'

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ";

const ResultsMap = () => {
  const trailsList = useSelector((state) => state.maps.trailsList)
  const {lon, lat} = useSelector((state) => state.maps.coordinates)
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    if (!!lon && !!lat && trailsList.length > 0) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [lon, lat],
        zoom: 8,
      });

      //   Create default markers
      trailsList.map((result) =>
        new mapboxgl.Marker().setLngLat([result.lon, result.lat]).addTo(map)
      );

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Clean up on unmount
      return () => map.remove();
    }
  }, [lon, lat, trailsList]);

  return <div className="map-container shadow-xl" ref={mapContainerRef} />;
};

export default ResultsMap;
