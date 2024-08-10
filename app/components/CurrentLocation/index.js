'use client'

import { Marker,Popup,useMapEvents } from "react-leaflet"
import {useState} from 'react'
import {Button} from '@chakra-ui/react'

const CurrentLocation = () =>{
  const [position, setPosition] = useState('');
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  });

  const handleButtonClick = () => {
    map.locate();
  };


  return(
        <div>
              {position && (
                  <Marker position={position}>
                    <Popup>
                      Here your location
                    </Popup>
                  </Marker>
              )}
              <Button colorScheme='teal' onClick={handleButtonClick} style={{position:'absolute',zIndex:1000, marginTop:150}}>
                    Lokasi Sekarang
              </Button>
        </div>
  )
}

export default CurrentLocation;
