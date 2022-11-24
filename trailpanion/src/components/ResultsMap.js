import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ";

const ResultsMap = (props) => {
  const { searchPoint, results } = props;
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [searchPoint.long, searchPoint.lat],
      zoom: 8,
    });

    // Create default markers
    results.map((location) =>
      new mapboxgl.Marker().setLngLat([location.lon, location.lat]).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [results, searchPoint.lat, searchPoint.long]);

  return <div className="map-container shadow-xl" ref={mapContainerRef} />;
};

export default ResultsMap;
