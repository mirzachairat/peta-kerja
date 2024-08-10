'use client'
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = '100vw';
const DEFAULT_HEIGHT = '100vh';

const Map = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  const aspectRatio = parseFloat(width) / parseFloat(height);
  return (
    <div style={{ aspectRatio: isNaN(aspectRatio) ? 'auto' : aspectRatio }}>
      <DynamicMap {...props} >
      </DynamicMap>
    </div>
  )
}

export default Map;