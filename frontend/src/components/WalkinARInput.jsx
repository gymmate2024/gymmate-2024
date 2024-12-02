import { Box, Button, Divider, Flex, Heading, HStack, PinInput, PinInputField, VStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import useWalkinStore from "../store/walkin";

const WalkinARInput = () => {

    const {
        setShowBooking,
        setShowARInput,
        setShowReview,
    } = useWalkinStore();

    const handleARCancel =  () => {
        setShowARInput(false);
        setShowBooking(true);
    }

    const handleARProceed = () => {
        setShowARInput(false);
        setShowReview(true);
    }

    return (
        <Box p={8} minW="full" maxW="4xl">
            <Heading as="h1" size="md" textAlign="center" mb={10}>Input Acknowledgement Receipt Number</Heading>
            <VStack w='100%' gap="10" justify="center" mb={6}>
                <HStack spacing={8}> {/* Adjust the value as needed for desired spacing */}
                    <PinInput size='lg'>
                        <PinInputField borderWidth="0" bg="white" boxShadow="lg" />
                        <PinInputField borderWidth="0" bg="white" boxShadow="lg"/>
                        <PinInputField borderWidth="0" bg="white" boxShadow="lg"/>
                        <PinInputField borderWidth="0" bg="white" boxShadow="lg"/>
                        <PinInputField borderWidth="0" bg="white" boxShadow="lg"/>
                        <PinInputField borderWidth="0" bg="white" boxShadow="lg"/>
                    </PinInput>
                </HStack>
                <Divider orientation="horizontal" borderColor="gray.500"/>
                <Button bg="white" boxShadow='lg' w="80%" px={4} py={2} rounded="md" alignItems="center" >
                    <FaUpload style={{ marginRight: '0.5rem' }} /> Upload Acknowledgement Receipt
                </Button>
            </VStack>
            <Flex justify="space-between" mt={20}>
                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleARCancel}>Cancel</Button>
                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleARProceed}>Proceed</Button>
            </Flex>
        </Box>
    )
}

export default WalkinARInput