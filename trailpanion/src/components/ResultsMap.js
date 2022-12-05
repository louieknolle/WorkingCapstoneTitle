import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ";

const ResultsMap = (props) => {
  const { searchPoint, results } = props;
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    if (!!searchPoint && results.length > 0) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [searchPoint.lon, searchPoint.lat],
        zoom: 8,
      });

      //   Create default markers
      results.map((result) =>
        new mapboxgl.Marker().setLngLat([result.lon, result.lat]).addTo(map)
      );

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Clean up on unmount
      return () => map.remove();
    }
  }, [results, searchPoint.lat, searchPoint.long, searchPoint]);

  return <div className="map-container shadow-xl" ref={mapContainerRef} />;
};

export default ResultsMap;
