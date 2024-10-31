import { Box, Button, Flex, Grid, Heading, Input, Select, Text, Spacer } from "@chakra-ui/react";
import { FaEye, FaUser } from "react-icons/fa";
import useWalkinStore from "../store/walkin.js";

const WalkinBookingSearch = () => {
    const setShowSearch = useWalkinStore((state) => state.setShowSearch);

    const handleCancel = () => {
        setShowSearch(false);
    };

    return (
        <Flex justify="center" align="center" bg="#F5F7FA">
            <Box bg="white" p={8} rounded="lg" shadow="lg" w="full" maxW="4xl">
                <Flex>
                    <Box>
                        <Heading as="h1" size="md" mb={6}>Search a GymMate account</Heading>
                    </Box>
                    <Spacer/>
                    <Box>
                        <Flex align="center">
                        <Select 
                            size="sm" 
                            maxWidth="40%" 
                            mr={2} 
                            borderRadius="md" 
                            height="40px" 
                            style={{ fontSize: 'inherit', color: 'inherit', backgroundColor: 'inherit' }} >
                            <option value="filter1" style={{ fontSize: 'inherit', color: 'inherit' }}>Student ID</option>
                            <option value="filter2" style={{ fontSize: 'inherit', color: 'inherit' }}>UMak Email Address</option>
                        </Select>
                            <Input placeholder="Enter your input" width="100%" borderRadius="md" height="40px" />
                        </Flex>
                    </Box>
                </Flex>
                <Grid templateColumns="1fr 2fr" gap={6}>
                    <Flex direction="column" align="center">
                        <Box position="relative" w="40" h="40" bg="gray.200" rounded="md" display="flex" alignItems="center" justifyContent="center" mb={4}>
                            <FaUser  size="6rem" color="gray.400" />
                        </Box>
                        <Button bg="white" color="#071434" border="2px" borderColor="#071434" _hover={{ bg: '#071434', color: 'white' }} _active={{ bg: 'gray.100', color: 'white' }} w="40" px={4} py={2} rounded="md" display="flex" alignItems="center" mb={4}>
                            <FaEye style={{ marginRight: '0.5rem' }} /> View COR
                        </Button>
                    </Flex>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6} colSpan={2}>
                        <Box>
                            <Text mb={2} color="gray.700">Name</Text>
                            <Input placeholder="ex. Juan Dela Cruz" isReadOnly bg="gray.100" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Gender</Text>
                            <Input placeholder="ex. Male/Female" isReadOnly bg="gray.100" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">College & Course</Text>
                            <Input placeholder="ex. College of Arts" isReadOnly bg="gray.100" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Year & Section</Text>
                            <Input placeholder="ex. 1st Year - Section A" isReadOnly bg="gray.100" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">UMak Email Address</Text>
                            <Input placeholder="ex. juan.delacruz@umak.edu.ph" isReadOnly bg="gray.100" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">UMak Student ID</Text>
                            <Input placeholder="ex. a12345678" isReadOnly bg="gray.100" />
                        </Box>
                    </Grid>
                </Grid>
                <Flex justify="space-between" mt={6}>
                    <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md"  onClick={handleCancel}>Cancel</Button>
                    <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md">Register</Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default WalkinBookingSearch;