'use Client'
import React from 'react'
import {Box,Text,Icon,Flex} from '@chakra-ui/react'
import { FaBars, FaChevronDown } from "react-icons/fa";

const Cardlist = ({title, icon}) =>{
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
                        <Icon as={icon} alt="" borderRadius="md" boxSize={8} />
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