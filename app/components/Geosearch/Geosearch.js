import React, { useRef, useState } from 'react';

const Geosearch = ({ setMapCenter }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const searchTerm = inputRef.current.value;

    // Use a geocoding service or custom logic to get coordinates for the search term
    // For simplicity, this example uses OpenStreetMap Nominatim
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setMapCenter([lat, lon]);
        }
      });
  };

  return (
    <div className="search-control">
      <input ref={inputRef} type="text" placeholder="Search location" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Geosearch;