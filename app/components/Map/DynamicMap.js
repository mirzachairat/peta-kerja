'use client'

import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.scss';
import {useStore} from './../../store'
import MapPopover from '../MapPopover';

const { MapContainer,TileLayer, LayersControl,WMSTileLayer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest}) => {
  let mapClassName = styles.map;
  
  
  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }
  
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

  const basemap = useStore((state) => state.basemap)
    
  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
    })();
  }, []);

  let url;
  switch (basemap) {
    case 'Default':
      url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      break;
    case 'Imagery':
      url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png';
      break;
    case 'NatGeo':
      url = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png';
      break;
    default:
      url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  }


  return (
      <MapContainer className={mapClassName} {...rest}>
          <TileLayer url={url} />
          <div style={{position:'relative',zIndex:1000, marginTop:320, float:'right'}}>
            <MapPopover/>
          </div>
        {children(ReactLeaflet, Leaflet)}
      </MapContainer>
  )
}

export default Map;