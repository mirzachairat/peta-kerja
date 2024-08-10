'use client'

import React, {useState} from 'react'
import axios from 'axios'
import { useMap, Marker,Popup } from 'react-leaflet'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input, 
    Stack,
    InputGroup,
    IconButton,
    useDisclosure,
    Button,
    ListIcon,
    List,
    ListItem,
    Link
  } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { MdLocationOn } from "react-icons/md";
import styles from './Geosearch.module.css'

const Geosearch = () =>{
    const [position, setPosition] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const map = useMap();
    
    const handleInputChange = async (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        if (inputValue.trim() !== '') {
          try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}`);
            const data = response.data;
            setSuggestions(data);
          } catch (error) {
            console.error('Error fetching suggestions:', error);
          }
        } else {
          setSuggestions([]);
        }
      };

      const handleSuggestionClick = (suggestion) => {
        const { lat, lon } = suggestion;
        setPosition([lat,lon]);
        map.flyTo([lat, lon], map.getZoom()); // Update map view to selected suggestion
        setQuery('');
        setSuggestions([]);
      };

    return(
        <>
            <Button colorScheme='teal' onClick={onOpen} style={{position:'absolute',zIndex:1000, marginTop:100}}>
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
                        <Stack spacing={5}>
                            <InputGroup>
                                <IconButton
                                colorScheme='blue'
                                aria-label='Search database'
                                icon={<SearchIcon />}
                                />
                                <Input type='text' 
                                value={query}
                                onChange={handleInputChange}
                                placeholder='Cari Nama dan Tempat'/> 
                            </InputGroup>
                        </Stack>
                            <List className={styles.List}spacing={5}>
                            {suggestions.map((suggestion) => (
                            <ListItem className={styles.ListItem} key={suggestion.place_id} onClick={() => handleSuggestionClick(suggestion)}>
                                <ListIcon as={MdLocationOn}/>
                                <Link>{suggestion.display_name}</Link>
                            </ListItem>
                            ))}
                        </List>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            {position && (
            <Marker position={position}>
                <Popup>
                    Here is area
                </Popup>
            </Marker>
            )}    
        </>
    )
}

export default Geosearch