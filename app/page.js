'use client'

import Head from 'next/head';
import Layout from './components/Layout'
import Section from './components/Section'
import Layermap from './components/Layermap'
import Map from './components/Map'
import {ScaleControl} from "react-leaflet"
import { EditControl } from 'react-leaflet-draw'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import styles from './styles/Home.module.scss'
import Legend from './components/Legend'
import CurrentLocation from './components/CurrentLocation/CurrentLocation'


export default function Home() {  
  const DEFAULT_CENTER = [-6.179998000000027, 106.83000000000003];
  return (
    <Layout>
      <Head>
        <title>PETA KERJA</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
          <Map className={styles.homeMap} height={100} center={DEFAULT_CENTER} zoom={15}>
            {({ TileLayer, LayersControl,FeatureGroup}) => (
              <>
                <LayersControl position="topright">
                  <LayersControl.Overlay checked name="Base Map">
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                 {/* <GeoSearchMap/> */}
                  </LayersControl.Overlay>
                  <Legend/>
                 <Layermap/>
                 <CurrentLocation/>
                </LayersControl>
                {/* layer group control */}
                <FeatureGroup>
                  <EditControl
                    position="topright"
                    draw={{
                      rectangle: false,
                      circle: false,
                    }}
                  />
                  
                </FeatureGroup>
                <ScaleControl imperial={false} maxWidth={500} />
              </>
            )}
          </Map>
      </Section>
    </Layout>
  );
}
