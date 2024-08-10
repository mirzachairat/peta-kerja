'use client'

import React,{useState} from 'react'
import { Box,Flex,Card,Button, position, Popover,PopoverArrow,PopoverCloseButton, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger} from '@chakra-ui/react'
import Map from "@app/components/Map"
import Layoutadmin from '@app/components/Layoutadmin'
import Boxtitle from '@app/components/Boxtitle'
import { DiAptana } from "react-icons/di";
import { LuLayers,LuPlus } from "react-icons/lu";
import MapPopover from '@app/components/MapPopover'

const Keloladata = () =>{
    const DEFAULT_CENTER = [-6.179998000000027, 106.83000000000003];
    const [centerpoint, setCenterPoint] = useState(DEFAULT_CENTER);

    const [isOpen, setIsOpen] = useState(false);

    const openPopover = () => setIsOpen(true);
    const closePopover = () => setIsOpen(false);
    console.log(isOpen);

    const boxData = [
        {
            icon: LuLayers,
            title: 'Daftar Layer',
            onClick: () => setIsOpen(true)
        },
        {
            icon: LuPlus,
            title: 'Tambah Data',
            onClick: () => setIsOpen(true)
        },
        {
            icon: DiAptana,
            title: 'Pengaturan',
            onClick: () => setIsOpen(true)
        }
    ] 

    const cekBox = [
        {
            title: 'Batas Administrasi',
        },
        {
            title: 'Batas Darat',
        },
        {
            title: 'Batas Laut',
        },
        {
            title: 'Jalan Baru',
        }
    ]

    return(
        <Layoutadmin>
            <Box bg="#32012F" p={10}>
                <Flex>
                    {/* Map */}
                    <Card p={1} w="100%">
    
                        <Map center={centerpoint} height={50} zoom={5} style={{ height: '50vh', width: '100%'}}>
                            {({LayersControl,FeatureGroup}) => (
                                <> 
                                    <Box pos="relative" zIndex={1000} p={2} display='flex' gap={2} left={10}>
                                        {boxData.map((card, index)=> (
                                                <Boxtitle
                                                    gap={6}
                                                    title={card.title}
                                                    icon={card.icon}    
                                                />
                                        ))}
                                    </Box>
                                    <Box pos="relative" zIndex={1000} p={2} display='flex'>
                                        <MapPopover isOpen={isOpen}/>  
                                    </Box>
                                </>
                            )}
                        </Map>
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

export default Keloladata