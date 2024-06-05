"use client"

import React, {useState, useRef} from "react";
import { Search2Icon, Icon } from "@chakra-ui/icons"
import { DiAptana } from "react-icons/di";
import { LuLayers,LuPlus } from "react-icons/lu";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Cardlist from "./Cardlist";
import { useDisclosure } from "@chakra-ui/react";

import { 
    Box, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Stack, 
    Text,
    Grid,
    HStack} from "@chakra-ui/react"
import { LuAlignStartVertical,LuComputer,LuGalleryVerticalEnd,LuUsers } from "react-icons/lu";
import Boxtitle from "./Boxtitle";

const Searchbox=({title})=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const btnRef = useRef();
    const colorShadow ='0 10px 15px -3px rgba(66, 153, 225, 0.7), 0 4px 6px -2px rgba(66, 153, 225, 0.5)';
    const [IsOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false)


    const toggleAccordion = () => {
        setIsOpen(!IsOpen);
    };


    const cardsData = [
        {
          icon: LuAlignStartVertical,
          title: 'Atur Tampilan',
          link: '/dashboard/aturtampilan'
        },
        {
            icon: LuComputer,
          title: 'Kelola Data',
          link: '/dashboard/keloladata'
        },
        {
            icon: LuGalleryVerticalEnd,
          title: 'Konfigurasi',
          link: '/dashboard/konfigurasi'
        },
        {
            icon: LuUsers,
          title: 'Pengguna',
          link: '/dashboard/pengguna'
        },
        // Add more cards data as needed
      ];

    const boxData = [
        {
            icon:LuLayers,
            title:'Daftar Layer'
        },
        {
            icon:LuPlus,
            title:'Tambah Data'
        },
        {
            icon:DiAptana,
            title:'Pengaturan'
        }
    ]  
          
    return(
        <>
        <HStack p='10'>
            
            <Box w='30%' h="7%" zIndex='999' borderRadius='17'  >
                <Stack p='3'>
                    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-md" boxShadow={colorShadow}>
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={toggleAccordion}
                        >
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <div className="text-gray-600">
                                <div style={{ float: 'left' }}>
                                    {IsOpen ? <FaChevronDown size={20} /> : <FaBars size={20} />}
                                </div>
                            </div>
                            <InputGroup>
                                {/* <Icon ref={btnRef} onClick={onOpen} as={MdMenu} boxSize={7} color='blue'/> */}
                                <Input type="text" placeholder="Search Location" size='sm' borderColor='teal.100'/>
                                <InputRightElement>
                                    <Search2Icon/>
                                </InputRightElement>
                            </InputGroup>
                        </div>
                        <div
                            className={`mt-2 transition-all duration-300 ease-in-out ${
                            IsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}
                        >
                            <div className="p-1">
                                <Box w="100%" h="100%">
                                    <Grid templateColumns="repeat(auto-fill, minmax(80px, 1fr))" gap={6}>
                                        {cardsData.map((card, index) => (
                                        <Cardlist
                                            key={index}
                                            title={card.title}
                                            icon={card.icon}
                                            link={card.link}
                                        />
                                        ))}
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                        </div>
                </Stack>
            </Box> 

            {boxData.map((card, index)=> (
                    <Boxtitle
                        key={card.index}
                        title={card.title}
                        icon={card.icon}
                    />
            ))}
        </HStack>
        </>
    )
} 

export default Searchbox