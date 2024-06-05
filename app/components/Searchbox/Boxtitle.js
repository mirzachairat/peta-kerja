
import { Box, Icon, Text } from "@chakra-ui/react"

const Boxtitle = ({title, icon}) =>{
    const colorShadow ='0 10px 15px -3px rgba(66, 153, 225, 0.7), 0 4px 6px -2px rgba(66, 153, 225, 0.5)';
    return (
        <Box bg='white' w='10%' zIndex='999' borderRadius='17' boxShadow={colorShadow}>
        <Text
            align="left"
            p="2"
            color='teal.500'
        >
            <Icon as={icon} boxSize='6' color='teal.500'/>
            {title}
        </Text> 
</Box>      
    )
}

export default Boxtitle