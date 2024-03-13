'use client'

import { useMapEvents, Marker, Popup, Map } from "react-leaflet"
import {useState} from 'react'

export default function CurrentLocation (){
  const [position, setPosition] = useState(null)

  const Map = useMapEvents({
    click() {
      Map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      Map.flyTo(e.latlng, Map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
