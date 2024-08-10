'use client'
import {useEffect, useState} from 'react'
import { LayersControl, WMSTileLayer, TileLayer } from "react-leaflet"


const Layermap = () => {
  const [geojsonData,setGeojsonData] = useState('');

  const wmsParams = {
    maxZoom: 12,
    transparent: true,
    format: 'image/png',
    opacity: 0.8,
  };

  const dummyData =
    [
      {
        id:1,
        title: 'Batas Administrasi DKI Jakarta(Kabupaten)',
        wmsUrl: 'https://gis.dcktrp.id/gispublik/batasadmin_tiled/wms', 
        wmsLayers : 'batasadmin_tiled:Batas Administrasi DKI Jakarta (Kabupaten)'
      },
      {
        id:2,
        title: 'Batas Administrasi DKI Jakarta(Kecamatan)',
        wmsUrl: 'https://gis.dcktrp.id/gispublik/batasadmin_tiled/wms', 
        wmsLayers : 'batasadmin_tiled:Batas Administrasi DKI Jakarta (Kecamatan)'
      },
      {
        id:3,
        title: 'Batas Administrasi DKI Jakarta (Kelurahan)',
        wmsUrl: 'https://gis.dcktrp.id/gispublik/batasadmin_tiled/wms', 
        wmsLayers : 'batasadmin_tiled:Batas Administrasi DKI Jakarta (Kelurahan)'
      },
      {
        id:4,
        title: 'Batas Administrasi DKI Jakarta (RT)',
        wmsUrl: 'https://gis.dcktrp.id/gispublik/batasadmin_tiled/wms', 
        wmsLayers : 'batasadmin_tiled:Batas Administrasi DKI Jakarta (RT)'
      },
      {
        id:5,
        title: 'Batas Administrasi DKI Jakarta (RW)',
        wmsUrl: 'https://gis.dcktrp.id/gispublik/batasadmin_tiled/wms', 
        wmsLayers : 'batasadmin_tiled:Batas Administrasi DKI Jakarta (RW)'
      }
    ]
  

  useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const username = 'service_dcktrp';
          const password = 's3rv1c3_dcktrp';
          const token = btoa(`${username}:${password}`);
    
          const response = await fetch(
            'https://tataruang.jakarta.go.id/server/rest/services/Hosted/Batas_Administrasi_DKI_Jakarta_87788/FeatureServer/0/query?where=1%3D1&outFields=*&f=geojson',
            {
              headers: {
                'Authorization': `Basic ${token}`
              }
            }
            );
            const data = await response.json();
            setGeojsonData(data);
          // Handle response...
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
  },[]);

    return(
      <>
       {dummyData.map((wms)=>(
          <LayersControl.Overlay key={wms.id} checked name={wms.title}>  
              <WMSTileLayer
                version='1.1.0'
                layers={wms.wmsLayers}
                url={wms.wmsUrl}
                tileSize={512} // Adjust tileSize based on your WMS server configuration
                zoomOffset={-1} // Adjust zoomOffset based on your WMS server configuration
                {...wmsParams}
              />
          </LayersControl.Overlay>
       ))}
       </>
    )   
}

export default Layermap;