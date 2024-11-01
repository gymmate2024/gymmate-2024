import { useEffect, useState } from 'react';
import { Box, Button, Flex, Grid, Heading, Input, Radio, RadioGroup, Select, Stack, Text, InputGroup, InputRightElement, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Center } from "@chakra-ui/react";
import { FaImage, FaUpload, FaUser  , FaEye, FaEyeSlash } from "react-icons/fa";
import useWalkinStore from '../store/walkin.js';
import { PiConfettiFill } from "react-icons/pi";

const WalkinBookingRegister = () => {
    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    
    const [isRegistered, setIsRegistered] = useState(false);
   
    const [countdown, setCountdown] = useState(5);

    const setShowRegister = useWalkinStore((state) => state.setShowRegister);

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    useEffect(() => {
        let timer;
        if (isRegistered && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setShowRegister(false); // Hide current component and show WalkinBookingOptions
        }
        return () => clearInterval(timer);
    }, [isRegistered, countdown, setShowRegister]);
    
    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const handleCancel = () => {
        setShowRegister(false);
    };

    const handleRegister = () => {
        onOpen(); // Open the modal when Register is clicked
    };

    const handleConfirm = () => {
        setIsRegistered(true); // Update registration status
        onClose(); // Close the modal
    };

    return (
        <Flex justify="center" align="center" bg="#F5F7FA">
            <Box bg="white" p={8} rounded="lg" shadow="lg" w="full" maxW="4xl" display={isRegistered ? 'none' : 'block'}>
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
                    <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleCancel}>Cancel</Button>
                    <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRegister}>Register</Button>
                </Flex>
            </Box>

            <Box bg="white" p={8} rounded="lg" shadow="lg" w="full" maxW="4xl" display={isRegistered ? 'block' : 'none'}>
                <Center mb={4}><PiConfettiFill color='#FE7654' size={120}/></Center>
                <Heading as="h1" size="md" mb={6}>Your account has been successfully registered!</Heading>
                <Center mt={20}>
                    <Text>Returning in... {countdown}</Text>
                </Center>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <Flex justifyContent="center" alignItems="center"> {/* Add this Flex container */}
                    <ModalContent>
                        <ModalHeader>Are you sure your information is correct?</ModalHeader>
                        <ModalBody>
                            <Text as="ul" listStyleType="disc" ml={4}>
                                <li>If any of the information is incorrect, please go back and update it accordingly.</li>
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
        </Flex>
    )
}

export default WalkinBookingRegister;