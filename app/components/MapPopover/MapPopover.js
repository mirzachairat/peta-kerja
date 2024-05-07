import React, {useState} from 'react';
import { MdMap } from 'react-icons/md';
import { 
  Box, 
  Popover, 
  PopoverCloseButton, 
  PopoverContent, 
  PopoverHeader, 
  PopoverBody, 
  PopoverTrigger,
  Portal,
  Icon,
  Stack,
  Image,
  Text,
  Button } from '@chakra-ui/react';

  import {useStore} from './../../store' 

const MapPopover = ({ isOpen, onClose}) => {
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

  return (
    <Popover closeOnBlur={false} placement='right' initialFocusRef={initRef}>
    {({ isOpen, onClose }) => (
      <>
        <PopoverTrigger>
            <Button>
                <Icon as={MdMap}/>
            </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent maxW="2xl">
            <PopoverHeader>Basemap</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Stack direction='row' >
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
                            />
                      </>
                        ))}
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </>
    )}
  </Popover>
  );
};

export default MapPopover;