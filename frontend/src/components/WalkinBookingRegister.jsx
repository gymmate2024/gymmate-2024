import React, { useState } from 'react';
import { Box, Button, Flex, Grid, Heading, Input, Radio, RadioGroup, Select, Stack, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaImage, FaUpload, FaUser  , FaEye, FaEyeSlash } from "react-icons/fa";

const WalkinBookingRegister = () => {
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    return (
        <Flex justify="center" align="center" bg="#F5F7FA">
            <Box bg="white" p={8} rounded="lg" shadow="lg" w="full" maxW="4xl">
                <Heading as="h1" size="md" mb={6}>Register a GymMate account</Heading>
                <Grid templateColumns="1fr 2fr" gap={6}>
                    <Flex direction="column" align="center">
                        <Box position="relative" w="40" h="40" bg="gray.200" rounded="md" display="flex" alignItems="center" justifyContent="center" mb={4}>
                            <FaUser   size="6rem" color="gray.400" />
                            <Button position="absolute" bottom="0" right="0" bg="#071434" color="white" _hover={{ bg: '#071434', color: 'white' }} _active={{ bg: 'gray.100', color: 'white' }} p={2} rounded="md" w="8" h="8" display="flex" alignItems="center" justifyContent="center">
                                <FaImage />
                            </Button>
                        </Box>
                        <Button bg="white" color="#071434" border="2px" borderColor="#071434" _hover={{ bg: '#071434', color: 'white' }} _active={{ bg: 'gray.100', color: 'white' }} w="40" px={4} py={2} rounded="md" display="flex" alignItems="center" mb={4}>
                            <FaUpload style={{ marginRight: '0.5rem' }} /> Upload COR
                        </Button>
                    </Flex>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6} colSpan={2}>
                        <Box>
                            <Text mb={2} color="gray.700">Name</Text>
                            <Input placeholder="ex. Juan Dela Cruz" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Gender</Text>
                            <RadioGroup>
                                <Stack direction="row">
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">College & Course</Text>
                            <Select placeholder="Choose College & Course"/>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Year & Section</Text>
                            <Select placeholder="Choose Year & Section" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">UMak Email Address</Text>
                            <Input placeholder="ex. juan.delacruz@umak.edu.ph" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">UMak Student ID</Text>
                            <Input placeholder="ex. a12345678" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Password</Text>
                            <InputGroup>
                                <Input 
                                    type={showPassword.password ? 'text' : 'password'} 
                                    placeholder="Enter your password" 
                                    variant="outline" // Use outline variant
                                />
                                <InputRightElement>
                                    <Button 
                                        variant="link" 
                                        onClick={() => togglePasswordVisibility('password')} 
                                        p={2}
                                    >
                                        {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                                    </ Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Confirm Password</Text>
                            <InputGroup>
                                <Input 
                                    type={showPassword.confirmPassword ? 'text' : 'password'} 
                                    placeholder="Confirm your password" 
                                    variant="outline" // Use outline variant
                                />
                                <InputRightElement>
                                    <Button 
                                        variant="link" 
                                        onClick={() => togglePasswordVisibility('confirmPassword')} 
                                        p={2}
                                    >
                                        {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </Grid>
                </Grid>
                <Flex justify="space-between" mt={6}>
                    <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md">Cancel</Button>
                    <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md">Register</Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default WalkinBookingRegister;