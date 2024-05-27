"use client"

import React, {useState, useRef} from "react";
import { Search2Icon, Icon } from "@chakra-ui/icons"
import { MdMenu } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { LuLayers,LuPlus } from "react-icons/lu";
import { FaBars, FaChevronDown } from "react-icons/fa";

import { Box, Input, InputGroup, InputRightElement, Flex, Stack, Text, Center, HStack} from "@chakra-ui/react"

const Searchbox=({title, children})=> {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const colorShadow ='0 10px 15px -3px rgba(66, 153, 225, 0.7), 0 4px 6px -2px rgba(66, 153, 225, 0.5)';
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };    
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
                            <InputGroup>
                                {/* <Icon ref={btnRef} onClick={onOpen} as={MdMenu} boxSize={7} color='blue'/> */}
                                <Input type="text" placeholder="Search Location" size='sm'/>
                                <InputRightElement>
                                    <Search2Icon/>
                                </InputRightElement>
                            </InputGroup>
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <div className="text-gray-600">
                            {isOpen ? <FaChevronDown />:<FaBars/>}
                            </div>
                        </div>
                        <div
                            className={`mt-2 transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}
                        >
                            <div className="p-4">
                            {children}
                            </div>
                        </div>
                        </div>
                </Stack>
            </Box> 
            <Box bg='white' w='10%' zIndex='999' borderRadius='17' boxShadow={colorShadow}>
                    <Text
                        align="left"
                        p="2"
                    >
                        <Icon as={LuLayers} boxSize='9'/>
                        Daftar Layer
                    </Text> 
            </Box> 
            <Box bg='white' w='10%' zIndex='999' borderRadius='17' boxShadow={colorShadow}>
                    <Text
                        align="left"
                        p="2"
                    >
                        <Icon as={LuPlus} boxSize='9'/>
                        Tambah Data
                    </Text> 
            </Box> 
            <Box bg='white' w='10%' zIndex='999' borderRadius='17' boxShadow={colorShadow}>
                    <Text
                        align="left"
                        p="2"
                    >
                        <Icon as={DiAptana} boxSize='9'/>
                        Pengaturan
                    </Text> 
            </Box> 
        </HStack>
        </>
    )
} 

export default Searchbox