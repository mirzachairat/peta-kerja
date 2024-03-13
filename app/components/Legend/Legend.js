'use client'

const Legend = () => {
  return (
    <div style={{position:'absolute',bottom: 10, right: 10, backgroundColor: 'white', padding: '10px',zIndex: 1000 }}>
    <strong>Legend</strong>
    <div>
      <span style={{ backgroundColor: 'green', padding: '5px', marginRight: '5px' }}></span>
      Marker 1
    </div>
    {/* Add more legend items as needed */}
  </div>
  );
};

export default Legend;