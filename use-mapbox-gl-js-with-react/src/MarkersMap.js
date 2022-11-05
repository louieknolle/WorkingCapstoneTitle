import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
// import "./Map.css";
import geoJson from "./WMA-hikes.json";
import { getTrailsData } from './getTrailsData';

mapboxgl.accessToken = 'pk.eyJ1IjoibG91aXNrbm9sbGUiLCJhIjoiY2xhMTh0OXV2MDU3NTNvbDUzenNxMGhyMiJ9.1A_ch-Oku2ehIIJ6uoD_iQ';
const MarkersMap = () => {
  
  const mapContainerRef = useRef(null);

  useEffect(() => {
    getTrailsData()
      .then((data) => {
        const dataArray = Object.values(data);
        dataArray.map((location) => {
          setLong
        })
      })
  }, []);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-72.922067, 42.606357],
      zoom: 8,
    });
  
    useEffect(() => {
      getTrailsData()
        .then((data) => {
          const dataArray = Object.values(data);
          dataArray.map((location) =>
        new mapboxgl.Marker().setLngLat([location.lon, location.lat]).addTo(map)
      );
        })
    }, []);

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

export default MarkersMap;
