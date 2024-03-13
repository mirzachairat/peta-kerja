'use client'
import { LayersControl, WMSTileLayer } from "react-leaflet"

const Layermap = () => {

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