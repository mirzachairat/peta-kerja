'use Client'
import React from 'react'
import {Box,Text,Icon,Flex,useDisclosure} from '@chakra-ui/react'
import { FaBars, FaChevronDown } from "react-icons/fa";
import { useRouter } from 'next/navigation'

const Cardlist = ({title, icon,link}) =>{
    const router = useRouter()
    const { onOpen} = useDisclosure()
    return(
        <>  
            <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="1"
                bg="teal.100"
                >
                   <Flex justify="center" align="center" mt="4">
                        <Icon as={icon} alt="" borderRadius="md" boxSize={8} onClick={() => router.push(link)}/>
                   </Flex>
                <Box>
                    <Text fontSize="sm">
                    {title}
                    </Text>
                </Box>
            </Box>
        </>
    )
}

export default Cardlist