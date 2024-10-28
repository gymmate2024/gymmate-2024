import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, Flex, Heading, IconButton, Input, Select, Text, VStack } from "@chakra-ui/react"

const WalkinBookingOptions = () => {
  return (
    <Flex bg="gray.50"align="center" justify="center">
        <Box bg="white" p={8} rounded="lg" shadow="md" w="full" maxW="3xl">
            <Flex align="center" mb={6}>
                <IconButton
                    icon={<ChevronLeftIcon/>}
                    colorScheme="orange"
                    variant="ghost"
                    aria-label="Back"
                    mr={2}
                />
                <Heading as="h1" size="lg" color="gray.800">
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
                        size="lg" w="full">
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
                                placeholder="Student ID"
                                bg="gray.100"
                                borderColor="gray.300"
                                color="gray.600"
                                rounded="lg"
                                focusBorderColor="gray.500"
                                size="lg"
                            >
                            </Select>
                        </Box>
                        <Box position="relative" w="full">
                            <Input
                                bg="gray.100"
                                borderColor="gray.300"
                                color="gray.600"
                                placeholder=""
                                rounded="lg"
                                focusBorderColor="gray.500"
                                size="lg"
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