import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const Modaltool = ({isOpen, onClose, children}) =>{
    return(
        <>
            <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent className="left-0" maxW="50wh" width="70%">
                    <ModalCloseButton />
                    <ModalBody>
                    {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modaltool;