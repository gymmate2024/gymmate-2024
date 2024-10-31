import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, Flex, Heading, IconButton, Input, Select, Text, VStack } from "@chakra-ui/react"
import useWalkinStore from "../store/walkin.js";

const WalkinBookingOptions = () => {

    const setShowRegister = useWalkinStore((state) => state.setShowRegister); // Get the setter function from the store

    const setShowSearch = useWalkinStore((state) => state.setShowSearch);

    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
            setShowSearch(true);
        }
    };

    const handleRegisterClick = () => {
        setShowRegister(true); // Set the state to show the register component
    };

  return (
    <Flex bg="gray.50"align="center" justify="center">
        <Box bg="white" p={8} rounded="lg" shadow="md" w="full" maxW="3xl">
            <Flex align="center" mb={6} justify="space-between">
                <IconButton
                    icon={<ChevronLeftIcon boxSize={6} />}
                    colorScheme="orange"
                    variant="ghost"
                    aria-label="Back"
                    mr={2}
                />
                <Heading as="h1" size="md" color="gray.800" textAlign="center" flex="1">
                    Do you have an existing GymMate Account?
                </Heading>
            </Flex>
                <Flex justify="space-between" align="center">
                <VStack flex="1" textAlign="center" >
                    <Text color="gray.600" mb={4}>
                        No, I don’t have a GymMate Account.
                    </Text>
                    <Button 
                        bgColor='#FE7654'
                        color='white'
                        _hover={{ bg: '#e65c3b' }} 
                        _active={{ bg: '#cc4a2d' }}
                        size="lg" w="full"
                        onClick={handleRegisterClick}>
                        Register an account
                    </Button>
                </VStack>
                <Flex flexDir="column" align="center" mx={4}>
                    <Divider orientation="vertical" height="16" borderColor="gray.300" />
                    <Text color="gray.500" my={2}>
                        OR
                    </Text>
                    <Divider orientation="vertical" height="16" borderColor="gray.300" />
                </Flex>
                <VStack flex="1" textAlign="center">
                    <Text color="gray.600" mb={4}>
                        Yes, I do have a GymMate Account.
                    </Text>
                    <VStack spacing={4} w="full">
                        <Box position="relative" w="full">
                            <Select
                                bg="gray.100"
                                borderColor="gray.300"
                                style={{ fontSize: 'inherit', color: 'inherit', backgroundColor: 'inherit' }}
                                rounded="lg"
                                size="lg">
                                    <option value="Student ID" style={{ fontSize: 'inherit', color: 'inherit' }}>Student ID</option>
                                    <option value="UMak Email Address" style={{ fontSize: 'inherit', color: 'inherit' }}>UMak Email Address</option>
                            </Select>
                        </Box>
                        <Box position="relative" w="full">
                            <Input
                                placeholder="Search..."
                                rounded="lg"
                                size="lg"
                                onKeyDown={handleInputKeyDown}
                            />
                        </Box>
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    </Flex>
  )
}

export default WalkinBookingOptions