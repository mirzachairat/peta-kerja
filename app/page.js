'use client'

import React, { useState,useRef } from 'react';
import Head from 'next/head'
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
import { ChakraProvider,Button } from '@chakra-ui/react';
import Drawertool from './components/Drawertool';

export default function Home() {
  const DEFAULT_CENTER = [-6.179998000000027, 106.83000000000003];
  const [centerpoint, setCenterPoint] = useState(DEFAULT_CENTER);

  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <title>PETA KERJA</title>
          <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
          <link rel="icon" href="/favicon.ico" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWUssGjqzdh26emlYtoy1mxEYcTBPYaCM&libraries=places"></script>
        </Head>

        <Section>
            <Map className={styles.homeMap} height={100} center={centerpoint} zoom={13} style={{position:'absolute',zIndex:1}}>
              {({LayersControl,FeatureGroup}) => (
                <>
                  <Drawertool/>
                  <CurrentLocation centerpoint={centerpoint}/>
                  <LayersControl position="topright">
                    <Legend/>
                    <Layermap/>
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
