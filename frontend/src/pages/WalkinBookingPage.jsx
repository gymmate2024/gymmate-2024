import { Box, Button, Center, Divider, Flex, Grid, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";
//import useWalkinStore from "../store/walkin.js";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { FaEye, FaEyeSlash, FaImage, FaUpload, FaUser } from "react-icons/fa";
import { PiConfettiFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const WalkinBookingPage = () => {

    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const [isRegistered, setIsRegistered] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [showRegister, setShowRegister] = useState(false); 
    const [showLogin, setShowLogin] = useState(false); 
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        let timer;
        if (isRegistered && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            // Reset states when countdown ends
            setIsRegistered(false);
            setShowRegister(false); // Return to the initial state
            setCountdown(5); // Reset the countdown if needed
        }
        return () => clearInterval(timer); // Cleanup timer on unmount
    }, [isRegistered, countdown]);

    useEffect(() => {
        console.log(`isRegistered: ${isRegistered}, countdown: ${countdown}`);
    }, [isRegistered, countdown]);

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const handleCancel = () => {
        setShowRegister(false); 
    };

    const handleLoginCancel = () => {
        setShowLogin(false); 
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    const handleRegister = () => {
        onOpen(); // Open the modal when Register is clicked
    };

    const handleConfirm = () => {
        setIsRegistered(true); // Update registration status
        onClose(); // Close the modal
    };

    const handleLoginClick = () => {
        setShowLogin(true); // Show the login form
        setShowRegister(false); // Optionally hide the register option if needed
    };
    
    return (
        <Box 
            bg='gray.300'
            w='80vw' 
            h='100vh'
            position='relative'>
            <VStack>
                <Box 
                    bg='white' 
                    w='80vw' 
                    h='10vh'
                    boxShadow='lg' 
                    position='fixed'
                    top={0}
                    zIndex={1}
                    alignContent='center'
                    paddingLeft='5%'>
                    <Heading as='h3' size='lg'>Walk-In Booking</Heading>
                </Box>

                <Box
                    bg='gray.100' 
                    w='80vw' 
                    h='90vh'
                    position='absolute' 
                    top='10vh' 
                    bottom={0}
                    p='5%'
                    display="flex"
                    alignItems="center"
                    justifyContent="center" >

                    {!showRegister && !isRegistered && !showLogin &&  ( 
                    <Flex align="center" justify="center">
                        <Box p={8} w="full" maxW="4xl">
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
                                <VStack flex="1" textAlign="center" whiteSpace="nowrap">
                                    <Text color="gray.600" mb={4}>
                                        No, I don’t have a GymMate account.
                                    </Text>
                                    <Button 
                                        bgColor='#FE7654'
                                        color='white'
                                        _hover={{ bg: '#e65c3b' }} 
                                        _active={{ bg: '#cc4a2d' }}
                                        size="lg" w="full"
                                        onClick={handleRegisterClick}>
                                        Register
                                    </Button>
                                </VStack>
                                <Flex flexDir="column" align="center" mx={4}>
                                    <Divider orientation="vertical" height="16" borderColor="gray.300" />
                                    <Text color="gray.500" my={2}>
                                        OR
                                    </Text>
                                    <Divider orientation="vertical" height="16" borderColor="gray.300" />
                                </Flex>
                                <VStack flex="1" textAlign="center" >
                                    <Text color="gray.600" mb={4} whiteSpace="nowrap">
                                        Yes, I do have a GymMate account.
                                    </Text>
                                    <Button 
                                        bgColor='#FE7654'
                                        color='white'
                                        _hover={{ bg: '#e65c3b' }} 
                                        _active={{ bg: '#cc4a2d' }}
                                        size="lg" w="full"
                                        onClick={handleLoginClick}>
                                        Log In
                                    </Button>
                                </VStack>
                            </Flex>
                        </Box>
                    </Flex>
                    )}

                    {showRegister && (
                    <Flex justify="center" align="center" >
                        <Box p={8} w="full" maxW="4xl" display={isRegistered ? 'none' : 'block'}>
                            <Heading as="h1" size="md" mb={10} >Register a GymMate account</Heading>
                            <Grid templateColumns="1fr 2fr" gap={10}>
                                <Flex direction="column" align="center">
                                    <Box position="relative" w="40" h="40" bg="white" rounded="md" boxShadow="lg" display="flex" alignItems="center" justifyContent="center" mb={4}>
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
                                        <Input bg="white" variant="filled" boxShadow="lg" placeholder="ex. Juan Dela Cruz" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">Gender</Text>
                                        <RadioGroup>
                                            <Stack direction="row">
                                                <Radio bg="white" variant="filled" boxShadow="lg" value="male">Male</Radio>
                                                <Radio bg="white" variant="filled" boxShadow="lg" value="female">Female</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">College & Course</Text>
                                        <Select bg="white" variant="filled" boxShadow="lg" placeholder="Choose College & Course"/>
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">Year & Section</Text>
                                        <Select bg="white" variant="filled" boxShadow="lg" placeholder="Choose Year & Section" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">UMak Email Address</Text>
                                        <Input bg="white" variant="filled" boxShadow="lg" placeholder="ex. juan.delacruz@umak.edu.ph" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">UMak Student ID</Text>
                                        <Input bg="white" variant="filled" boxShadow="lg" placeholder="ex. a12345678" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">Password</Text>
                                        <InputGroup>
                                            <Input
                                                type={showPassword.password ? 'text' : 'password'} 
                                                placeholder="Enter your password" 
                                                bg="white" variant="filled" boxShadow="lg"
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
                                                bg="white" variant="filled" boxShadow="lg"
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
                            <Flex justify="space-between" mt={20}>
                                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleCancel}>Cancel</Button>
                                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRegister}>Register</Button>
                            </Flex>
                        </Box>
                    </Flex>
                    )}

                    {isRegistered && (
                    <Flex justify="center" align="center">
                        <Box p={8} w="full" maxW="4xl" display={isRegistered ? 'block' : 'none'}>
                            <Center mb={6}><PiConfettiFill color='#FE7654' size={160}/></Center>
                            <Heading as="h1" size="lg" mb={6}>Your account has been successfully registered!</Heading>
                            <Center mt={20}>
                                <Text>Returning in... {countdown}</Text>
                            </Center>
                        </Box>
                    </Flex>
                    )}

                    {showLogin && (
                    <Flex justify="center" align="center">
                        <Box p={8} w="full" maxW="4xl" display={isRegistered ? 'none' : 'block'}>
                            <Heading as="h1" size="md" mb={10}>Log in a GymMate account</Heading>
                            <Flex w='100%' justify="space-between" mb={6}>
                                {/* Email Input */}
                                <InputGroup w='48%'>
                                    <InputLeftElement 
                                        color='gray.500' 
                                        pointerEvents='none' 
                                        h='50px' 
                                        display='flex' 
                                        alignItems='center'>
                                        <MdEmail />
                                    </InputLeftElement>
                                    <Input
                                        placeholder='Email'
                                        variant="outline" 
                                        boxShadow='lg' 
                                        rounded='md'
                                        bg="white"
                                        h='50px' // Set height to match InputLeftElement
                                    />
                                </InputGroup>

                                {/* Password Input */}
                                <InputGroup w='48%'>
                                    <InputLeftElement 
                                        color='gray.500' 
                                        pointerEvents='none' 
                                        h='50px' 
                                        display='flex' 
                                        alignItems='center'>
                                        <RiLockPasswordFill />
                                    </InputLeftElement>
                                    <Input
                                        variant="outline" 
                                        pr='4.5rem'
                                        type={showPassword.password ? 'text' : 'password'} 
                                        placeholder='Password'
                                        boxShadow='lg' 
                                        rounded='md'
                                        h='50px'
                                        bg="white"
                                    />
                                    <InputRightElement 
                                        width='4.5rem' 
                                        h='50px' 
                                        display='flex' 
                                        alignItems='center'>
                                        <Button 
                                            color="gray.500" 
                                            variant='ghost' 
                                            onClick={() => togglePasswordVisibility('password')} 
                                            size='md'
                                        >
                                            {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                                        </ Button>
                                    </InputRightElement>
                                </InputGroup>
                            </Flex>

                            <Flex justify="space-between" mt={20}>
                                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleLoginCancel}>Cancel</Button>
                                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={''}>Log In</Button>
                            </Flex>
                        </Box>
                    </Flex>
                    )}
                    
                    
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

                </Box>
            </VStack>
        </Box>
    );
};

export default WalkinBookingPage;