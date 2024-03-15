'use client'

import { useState } from 'react';
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
import GeoSearchMap from './components/GeoSearchMap/GeoSearchMap';
import { ChakraProvider } from '@chakra-ui/react';


export default function Home() {  
  const [selectPosition, setSelectPosition] = useState("");
  
  const DEFAULT_CENTER = [-6.179998000000027, 106.83000000000003];
  return (
    <ChakraProvider>
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
                  <GeoSearchMap/>
                  <LayersControl position="topright">
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
  </ChakraProvider>
  );
}
