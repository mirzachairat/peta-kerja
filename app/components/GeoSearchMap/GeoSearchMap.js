'use client'

import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import 'esri-leaflet-geocoder';

const GeoSearchMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add Esri geosearch control
    const searchControl = L.esri.Geocoding.geosearch({
      position: 'topright',
      useMapBounds: false,
      providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
          apikey: 'YOUR_ARCGIS_API_KEY', // Replace with your ArcGIS API key
        }),
      ],
    }).addTo(map);

    // Handle search results
    searchControl.on('results', function (data) {
      if (data.results.length > 0) {
        const { latlng } = data.results[0];
        map.setView(latlng, 13);
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default GeoSearchMap;