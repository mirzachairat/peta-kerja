"use Client"

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
import styles from './Drawertool.module.css'
import Tablistpage from '../Tablistpage'

const Drawertool = () =>{
    // const map = useMap();

    // const [position, setPosition] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    // const [showModal, setShowModal] = useState(false)
    // const [query, setQuery] = useState('');
    // const [suggestions, setSuggestions] = useState([]);

    // const handleInputChange = async (event) => {
    //   const inputValue = event.target.value;
    //   setQuery(inputValue);
    //   if (inputValue.trim() !== '') {
    //     try {
    //       const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}`);
    //       const data = response.data;
    //       setSuggestions(data);
    //     } catch (error) {
    //       console.error('Error fetching suggestions:', error);
    //     }
    //   } else {
    //     setSuggestions([]);
    //   }
    // };

     // Modal Button
    //  const [size, setSize] = React.useState('xl')

    //Modal function
    
    // const closeModal=()=>{
    //   setShowModal(false)
    // }

    // const openModal = () =>{
    //   setShowModal(isOpen);
    // }  

    // const handleSuggestionClick = (suggestion) => {
    //     const { lat, lon } = suggestion;
    //     setPosition([lat,lon]);
    //     map.flyTo([lat, lon], map.getZoom()); // Update map view to selected suggestion
    //     setQuery('');
    //     setSuggestions([]);
    //   };

    return(
        <>
        <Button bg="white" onClick={onOpen} style={{position:'absolute',zIndex:10}}>
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
                        <Stack spacing={10}>
                            <InputGroup>
                                <IconButton
                                colorScheme='blue'
                                aria-label='Search database'
                                icon={<SearchIcon />}
                                />
                                <Input type='tel' 
                                value={query}
                                onChange={handleInputChange}
                                placeholder='Cari Nama dan Tempat'/> 
                            </InputGroup>
                        </Stack>
                        <List className={styles.List} spacing={5}>
                            {suggestions.map((suggestion) => (
                            <ListItem className={styles.ListItem} key={suggestion.place_id} onClick={() => handleSuggestionClick(suggestion)}>
                                <ListIcon as={MdLocationOn}/>
                                <Link>{suggestion.display_name}</Link>
                            </ListItem>
                            ))}
                        </List>
                        <Stack direction='row' align='center' padding={5}>
                            <Button 
                              onClick={openModal}
                              key={size}
                              m={4} 
                              colorScheme='telegram' 
                              width='300px'>Jelajahi Data
                            </Button>
                            {/* Modal Jelajahi Data */}
                        </Stack>
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

export default Drawertool;