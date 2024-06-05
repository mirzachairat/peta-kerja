import Drawertool from "@app/components/Drawertool";
import {TfiSettings} from "react-icons/tfi";
import { LuLayoutPanelLeft,LuFileCog,LuUsers } from "react-icons/lu";
import { ChakraProvider, Grid, GridItem, Text,List, ListItem, ListIcon } from "@chakra-ui/react";

export default function Layoutadmin({children}){
    return(
       <ChakraProvider>
            <Grid
                templateAreas={`"header header"
                                "nav main"
                                "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
                >
                <GridItem pl='2' bg='#1F2544' area={'header'}>
                    <Text 
                    color='white'
                    textAlign='left'
                    alignContent='center'
                    alignItems='center'
                    >Admin Dashboard</Text>
                </GridItem>
            
                <GridItem pl='2' bg='#1F2544' area={'nav'} paddingTop={10}>
                    <Text color='white'>Admin Operator</Text>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={LuLayoutPanelLeft} color='green.500' />
                            Atur Tampilan
                        </ListItem>
                        <ListItem>
                            <ListIcon as={LuFileCog} color='green.500' />
                            Kelola Data
                        </ListItem>
                        <ListItem>
                            <ListIcon as={TfiSettings} color='green.500' />
                            Konfigurasi
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={LuUsers} color='green.500' />
                            Pengguna
                        </ListItem>
                    </List>         
                </GridItem>
                <GridItem pl='2' bg='#32012F.300' area={'main'}>
                    {children}
                </GridItem>
            </Grid>
       </ChakraProvider>     
    )
} 