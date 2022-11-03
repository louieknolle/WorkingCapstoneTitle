import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "./Map.css";
import geoJson from "./WMA-hikes.json";

mapboxgl.accessToken = 'pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ';
const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-72.922067, 42.606357],
      zoom: 10,
    });

    // Create default markers
    geoJson.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
