"use client"

import {useState} from 'react'
import {Marker, Popup} from 'react-leaflet'

const Markerpoint = () =>{
    const [position, setPosition] = useState(null);

 return(
    <>
        <Marker position={position}>
            <Popup>    
            </Popup>
        </Marker>
    </>
 )   
}

export default Markerpoint