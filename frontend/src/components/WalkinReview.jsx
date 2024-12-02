import { Box, Button, Flex, Heading, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import useWalkinStore from "../store/walkin";

const WalkinReview = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        isBooked,
        setShowARInput,
        showReview,
        setShowReview,
        showRegister,
        setIsRegistered,
        setIsBooked,
    } = useWalkinStore();

    const handleRevCancel = () => {
        setShowARInput(true)
        setShowReview(false);
    }

    const handleRevProceed  = () => {
        onOpen();
    }

    const handleConfirm = () => {
        if (showRegister) setIsRegistered(true);
        else if (showReview) setIsBooked(true);
        onClose(); 
    };

    return (
        <Box p={8} minW="full" maxW="4xl" display={isBooked ? 'none' : 'block'}>
            <Heading as="h1" size="md" mb={20}>Please review your booking details</Heading>
            <Flex justify="space-between" align="flex-start" gap={10}>
                <Box flex="1" pr={2}>
                    <VStack align="start" spacing={4} whiteSpace="nowrap">
                        <Text fontWeight="semibold">Full Name: </Text>
                        <Text fontWeight="semibold">Student ID: </Text>
                        <Text fontWeight="semibold">UMak Email Address: </Text>
                    </VStack>
                </Box>
                <Box flex="1" pr={2}>
                    <VStack align="end" spacing={4} whiteSpace="nowrap">
                        <Text>{""}</Text>
                        <Text>{""}</Text>
                        <Text>{""}</Text>
                    </VStack>
                </Box>
                <Box flex="1" pl={2}>
                    <VStack align="start" spacing={4} whiteSpace="nowrap">
                        <Text fontWeight="semibold">Selected Date: </Text>
                        <Text fontWeight="semibold">Selected Time: </Text>
                        <Text fontWeight="semibold">AR Number: </Text>
                    </VStack>
                </Box>
                <Box flex="1" pl={2}>
                    <VStack align="end" spacing={4} whiteSpace="nowrap">
                        <Text>{""}</Text>
                        <Text>{""}</Text>
                        <Text>{""}</Text>
                    </VStack>
                </Box>
            </Flex>
            <Flex justify="space-between" mt={20}>
                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRevCancel}>Cancel</Button>
                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRevProceed}>Book Slot</Button>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <Flex justifyContent="center" alignItems="center"> {/* Add this Flex container */}
                    <ModalContent>
                        <ModalHeader>Are you sure your information is correct?</ModalHeader>
                        <ModalBody>
                            <Text as="ul" listStyleType="disc" ml={4}>
                                <li>If any of the information is incorrect, please go back and update it accordingly.</li>
                                <li>Once confirmed, AR Number cannot be used again.</li>
                            </Text>
                        </ModalBody>
                        <ModalFooter display="flex" justifyContent="space-between">
                            <Button onClick={onClose} bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} w="40" px={4} py={2} rounded="md" display="flex" alignItems="center">
                                Cancel
                            </Button>
                            <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} w="40" px={4} py={2} rounded="md" display="flex" alignItems="center" onClick={handleConfirm}>
                                Confirm
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Flex>
            </Modal>
        </Box>
        
    )
}

export default WalkinReview