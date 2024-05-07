import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Flex,
    Box 
    } from '@chakra-ui/react'

const Tablistpage =()=>{
    return(
        <Tabs>
        <TabList>
            <Tab>Organisasi</Tab>
            <Tab>Sektoral</Tab>
        </TabList>

            <TabPanels>
                <TabPanel>
                    <Flex>
                        <Box flex='1' bg='tomato'>
                            Box1
                        </Box>
                        <Box flex='2' bg='green'>
                            Box2
                        </Box>
                    </Flex>
                </TabPanel>
                <TabPanel>
                Tabst
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Tablistpage