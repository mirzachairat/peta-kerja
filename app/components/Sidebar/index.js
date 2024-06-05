import {Drawer} from '@chakra-ui/react'

const Sidebar = () =>{
    return(
        <>
            <Button leftIcon={<IoIosSettings />} colorScheme='pink' variant='solid' onClick={onOpen}>
                Open
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Drawer Title</DrawerHeader>
                        <DrawerBody>
                            <p>Some content for the drawer</p>
                        </DrawerBody>
                    </DrawerContent>
            </Drawer>
        </>
    )
}

export default Drawer