'use client'

import React,{ useState } from 'react';
import { MapContainer} from 'react-leaflet';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input, 
  Stack,
  List,
  ListItem,
  ListIcon,
  InputGroup,
  IconButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { SearchIcon,MdCheckCircle,MdSettings } from '@chakra-ui/icons'

const GeoSearchMap = () => {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] =useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleSearch = () => {
    // Fetch data from the API
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchText)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setListPlace(JSON.parse(data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

    

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen} style={{position:'absolute',zIndex:1000, marginTop:100}}>
        Cari Lokasi
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cari Nama dan Tempat</DrawerHeader>

          <DrawerBody>
              <Stack spacing={4}>
                  <InputGroup>
                    <IconButton
                      colorScheme='blue'
                      aria-label='Search database'
                      icon={<SearchIcon />}
                    />
                    <Input type='tel' 
                    placeholder='Cari Nama dan Tempat' 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/>
                  </InputGroup>
              </Stack>
              <List spacing={3}>
                {listPlace.map((item)=>{                    
                      <ListItem key={item}>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </ListItem>
                  })
                }
              </List>    
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default GeoSearchMap;