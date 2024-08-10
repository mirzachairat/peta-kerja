'use client'

import React,{useState} from 'react'
import { 
    Box,
    Flex,
    Card,
    Grid,
    GridItem,
    SimpleGrid,
    Text,
    Stack,
    Image,
    Button,
} from "@chakra-ui/react"

import {IoIosSettings} from "react-icons/io"
import Map from "@app/components/Map"
import styles from './../styles/Home.module.scss'
import {useStore} from '../store' 
import Layoutadmin from '@app/components/Layoutadmin'

const Aturtampilan=()=>{
    const position = [-2.5, 118]; // Coordinates for Indonesia

    const initRef = React.useRef()
  
    const setBasemap = useStore((state) => state.setBasemap);

    const handleBasemapChange = (event) => {
        const result = event.target.name;
        setBasemap(result);
    };

    const mapUrls = [ 
        {id:1,
        name:"Default",
        url : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png"},
        {id:2,
        name:"Imagery",
        url : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"},
        {id:3,
        name:"NatGeo",
        url : "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png"},
    ]

    return(
        <Layoutadmin>
            <Box bg="#32012F" p={10}>
                <Flex flexWrap='wrap' gap='1px' justifyContent='space-evenly'>
                    {/* adding filter property to the element */}
                    <Card
                        display="flex"
                        w="200px"
                        h="100px"
                        alignItems="center"
                        textAlign="center"
                        fontSize= '14px'                      
                    >
                        <Text>Warna Utama</Text>
                    <SimpleGrid sx={{ overflowX: 'auto', overflowY: 'auto' }}>
                        <Card>
                            <Text>Warna 1</Text>
                            <Text>Warna 2</Text>
                        </Card>
                    </SimpleGrid>
                    </Card>
                    <Card
                        display="flex"
                        w="300px"
                        h="100px"
                        alignItems="center"
                        textAlign="center"
                        fontSize= '14px'
                    >
                        <SimpleGrid columns={1}>
                            <Text>Peta Dasar Default</Text>
                            <SimpleGrid overflowX='auto' sx={{ '&::-webkit-scrollbar': { display: 'block' } }}>
                                <Stack direction='row'>
                                        {mapUrls.map(item =>(
                                        <>
                                            <Image
                                                key={item.id}
                                                onClick={(event) => handleBasemapChange(event, item.name)}
                                                boxSize='80px'
                                                objectFit='cover'
                                                name={item.name}
                                                title={item.name}
                                                src={item.url}
                                                alt='Dan Abramov'
                                                p={2}
                                                />
                                        </>
                                            ))}
                                </Stack>              
                            </SimpleGrid>
                        </SimpleGrid>
                    </Card>
                    <Card
                    display="flex"
                    w="500px"
                    fontSize= '14px'
                    >
                        <SimpleGrid columns={1}>
                            <Text>Widget Tersedia Disembuyikan</Text>
                            <SimpleGrid columns={1} border="1px dotted">
                                <Card  fontSize={12} textAlign="center" h={100}>
                                    <Text>Geser Kotak Widget kesini untuk menyembunyikan widget dari tampilan aplikasi</Text>
                                </Card>
                            </SimpleGrid>
                        </SimpleGrid>
                    </Card>
                </Flex>
                {/* Map */}
                <Flex p={2}>
                    <Card p={1} w="100%">
                        <Map center={position} height={50} zoom={5} style={{ height: '50vh', width: '100%',zIndex: 1 }}>
                            {({LayersControl,FeatureGroup}) => (
                                <>
                                </>
                            )}
                        </Map>

                    </Card>
                </Flex>
                <Flex p={2}>
                    <Card
                        display="flex"
                        w="100%"
                        p="1"
                        fontSize= '14px'
                        >
                            <SimpleGrid columns={1}>
                                <Text>Buttom Bar</Text>
                                <Text fontSize={11}>Geser Widget Tersedia kesini untuk menampilkan di Panel Bawah</Text>
                                <SimpleGrid columns={1} border="1px dotted">
                                    <Card  fontSize={12} textAlign="center" h={100}>
                                        <Box position="absolute" top="50%" left="0" transform="translateY(-50%)" p={2}>
                                            <Stack direction='row' spacing={4} alignItems='center'>
                                                <Button rightIcon={<IoIosSettings />} colorScheme='pink' variant='solid'>
                                                    Zoom
                                                </Button>
                                                <Button rightIcon={<IoIosSettings />} colorScheme='blue' variant='outline'>
                                                    Base Map
                                                </Button>
                                            <Text alignContent='center'>Geser Kotak Widget kesini </Text>
                                            </Stack>  
                                        </Box>   
                                    </Card>
                                </SimpleGrid>
                            </SimpleGrid>
                    </Card>
                </Flex>
                <Flex justifyContent="center" marginTop={0}>
                        <Button 
                            borderRadius={20}
                            _hover={{ bg: '#ebed' }}
                            _active={{
                            bg: '#dddfb9',
                            transform: 'scale(0.98)',
                            borderColor: '#bec3c9',
                            }}
                            _focus={{
                            boxShadow:
                                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                            }}
                            m={2}
                        >Preview</Button>
                        <Button borderRadius={20} colorScheme='blue' m={2}>Publish</Button>
                </Flex>
            </Box>
        </Layoutadmin>
    )
}

export default Aturtampilan