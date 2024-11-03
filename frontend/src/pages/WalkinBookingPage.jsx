import { Box, Button, Center, Divider, Flex, Grid, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Radio, RadioGroup, Select, Stack, Text, Tooltip, useDisclosure, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, QuestionIcon } from "@chakra-ui/icons";
import { FaEye, FaEyeSlash, FaImage, FaUpload, FaUser } from "react-icons/fa";
import { PiConfettiFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import useWalkinStore from "../store/walkin";

const WalkinBookingPage = () => {

    const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
    const [isRegistered, setIsRegistered] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [showRegister, setShowRegister] = useState(false); 
    const [showLogin, setShowLogin] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [showARInput, setShowARInput] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [showLogOptions, setShowLogOptions] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { currentDate, selectedDay, setCurrentDate, setSelectedDay } = useWalkinStore(); 

    useEffect(() => {
        let timer;
        if ((isRegistered || isBooked) && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsRegistered(false);
            setShowRegister(false);
            setIsBooked(false);
            setShowReview(false);
            setCountdown(5);
        }
        return () => clearInterval(timer); 
    }, [isRegistered, isBooked, countdown]);

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDay(null); 
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDay(null); 
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
    
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
        console.log(`You pressed: ${formattedDate}`); 
    };

    const renderDays = () => {
        const days = [];
        const firstDay = getFirstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());
        const totalDays = daysInMonth(currentDate.getMonth(), currentDate.getFullYear());

        for (let i = 0; i < firstDay; i++) {
            days.push(<Box key={`empty-${i}`} />);
        }

        for (let i = 1; i <= totalDays; i++) {
            days.push(
                <Button
                    key={i}
                    width="40px"
                    height="40px"
                    mx="auto"
                    bg={selectedDay === i ? "#071434" : "transparent"} 
                    color={selectedDay === i ? "white" : "black"} 
                    onClick={() => handleDayClick(i)} 
                >
                    {i}
                </Button>
            );
        }

        return days;
    };

    const renderWeekDays = () => {
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return weekDays.map((day, index) => (
            <Box key={index} textAlign="center" fontWeight="light">
                {day}
            </Box>
        ));
    };

    const { selectedTime, setSelectedTime } = useWalkinStore(); 

    const handleTimeClick = (timeSlot) => {
        setSelectedTime(timeSlot); 
        console.log(`You selected time: ${timeSlot}`);
    };

    const handleRegCancel = () => {
        setShowRegister(false); 
    };

    const handleLogCancel = () => {
        setShowLogin(false); 
    };

    const handleOptRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    const handleRegRegister = () => {
        onOpen(); 
    };

    const handleConfirm = () => {
        if (showRegister) setIsRegistered(true);
        else if (showReview) setIsBooked(true);
        onClose(); 
    };

    const handleOptLogin = () => {
        setShowLogin(true); 
        setShowRegister(false); 
    }

    const handleLogLogin = ()  => {
        setShowLogOptions(true)
        setShowLogin(false);
    }
    
    const handleBkCancel =  () => {
        setShowLogOptions(true);
        setShowBooking(false);
    }

    const handleBkProceed = () => {
        setShowARInput(true);
        setShowBooking(false);
    }

    const handleARCancel =  () => {
        setShowARInput(false);
        setShowBooking(true);
    }

    const handleARProceed = () => {
        setShowARInput(false);
        setShowReview(true);
    }

    const handleRevCancel = () => {
        setShowARInput(true)
        setShowReview(false);
    }

    const handleRevProceed  = () => {
        onOpen();
    }

    const handleLogOptBook = () => {
        setShowBooking(true);
        setShowLogOptions(false);
    }

    const handleLogOptCancel  = () => {
        setShowLogOptions(false);
        setShowLogin(true);
    }
    
    
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
                    <Heading as='h3' size='lg' >Walk-In Booking</Heading>
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
                    
                    {!showRegister && !isRegistered && !showLogin && !showBooking && !showARInput && !showReview && !isBooked && !showLogOptions &&( 
                    <Flex align="center" justify="center">
                        <Box p={8} minW="full" maxW="4xl">
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
                                        onClick={handleOptRegister}>
                                        Register
                                    </Button>
                                </VStack>
                                <Flex flexDir="column" align="center" mx={4}>
                                    <Divider orientation="vertical" height="16" borderColor="gray.500" />
                                    <Text color="gray.500" my={2}>
                                        OR
                                    </Text>
                                    <Divider orientation="vertical" height="16" borderColor="gray.500" />
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
                                        onClick={handleOptLogin}>
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
                                        <Input bg="white" boxShadow="lg" placeholder="ex. Juan Dela Cruz" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">Gender</Text>
                                        <RadioGroup>
                                            <Stack direction="row">
                                                <Radio bg="white" boxShadow="lg" value="male">Male</Radio>
                                                <Radio bg="white" boxShadow="lg" value="female">Female</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">College & Course</Text>
                                        <Select bg="white" boxShadow="lg" placeholder="Choose College & Course"/>
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">Year & Section</Text>
                                        <Select bg="white" boxShadow="lg" placeholder="Choose Year & Section" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">UMak Email Address</Text>
                                        <Input bg="white" boxShadow="lg" placeholder="ex. juan.delacruz@umak.edu.ph" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">UMak Student ID</Text>
                                        <Input bg="white" boxShadow="lg" placeholder="ex. a12345678" />
                                    </Box>
                                    <Box>
                                        <Text mb={2} color="gray.700">Password</Text>
                                        <InputGroup>
                                            <Input
                                                type={showPassword.password ? 'text' : 'password'} 
                                                placeholder="Enter your password" 
                                                bg="white"  boxShadow="lg"
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
                                                bg="white" boxShadow="lg"
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
                                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRegCancel}>Cancel</Button>
                                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRegRegister}>Register</Button>
                            </Flex>
                        </Box>
                    </Flex>
                    )}

                    {isRegistered && (
                    <Flex justify="center" align="center">
                        <Box p={8} w="full" maxW="4xl" display={isRegistered ? 'block' : 'none'}>
                            <Center mb={6}><PiConfettiFill color='#FE7654' size={120}/></Center>
                            <Heading as="h1" size="md" mb={6}>Your account has been successfully registered!</Heading>
                            <Center mt={20}>
                                <Text>Returning in... {countdown}</Text>
                            </Center>
                        </Box>
                    </Flex>
                    )}

                    {showLogin && (
                    <Flex justify="center" align="center">
                        <Box p={8} w="full" maxW="4xl" display={isRegistered ? 'none' : 'block'}>
                            <Heading as="h1" size="md" mb={20} align="center">Log in a GymMate account</Heading>
                            <VStack w='100%' justify="center" mb={6} spacing={5}>
                                {/* Email Input */}
                                <InputGroup w='100%'>
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
                                <InputGroup w='100%'>
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
                            </VStack>

                            <Flex justify="space-between" mt={20}>
                                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleLogCancel}>Cancel</Button>
                                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleLogLogin}>Log In</Button>
                            </Flex>
                        </Box>
                    </Flex>
                    )}

                    {showLogOptions && (
                    <Flex align="center" justify="center">
                        <Box p={8} minW="full" maxW="4xl">
                            <Flex align="center" mb={6} justify="space-between">
                                <Heading as="h1" size="md" color="gray.800" textAlign="center" flex="1">
                                    Hello *Name*, what do you want to do today?
                                </Heading>
                            </Flex>
                                <Flex justify="space-between" align="center">
                                <VStack flex="1" textAlign="center" >
                                    <Button 
                                        bgColor='#FE7654'
                                        color='white'
                                        _hover={{ bg: '#e65c3b' }} 
                                        _active={{ bg: '#cc4a2d' }}
                                        size="lg" w="full"
                                        h="3em"
                                        whiteSpace="wrap"
                                        onClick={handleLogOptBook}>
                                        I want to book a session.
                                    </Button>
                                </VStack>
                                <Flex flexDir="column" align="center" mx={4}>
                                    <Divider orientation="vertical" height="16" borderColor="gray.500" />
                                    <Text color="gray.500" my={2}>
                                        OR
                                    </Text>
                                    <Divider orientation="vertical" height="16" borderColor="gray.500" />
                                </Flex>
                                <VStack flex="1" textAlign="center" >
                                    <Button 
                                        bgColor='#FE7654'
                                        color='white'
                                        _hover={{ bg: '#e65c3b' }} 
                                        _active={{ bg: '#cc4a2d' }}
                                        size="lg" w="full"
                                        h="3em"
                                        whiteSpace="wrap"
                                        onClick={handleOptLogin}>
                                        I want to time in/time out of my session.
                                    </Button>
                                </VStack>
                            </Flex>
                            <Flex justify="center" mt={6}>
                                <Button 
                                    bgColor="white" 
                                    color="#FE7654" 
                                    border="2px" 
                                    borderColor="#FE7654" 
                                    _hover={{ bg: '#FE7654', color: 'white' }} 
                                    _active={{ bg: '#cc4a2d' }} px={6} py={2} 
                                    rounded="md" 
                                    onClick={handleLogOptCancel}>
                                        Log out
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                    )}

                    {showBooking && (
                    <Flex justify="center" align="center">
                        <Box p={8} minW="full" maxW="4xl" display={"What to put here"}>
                            <Heading as="h1" size="md" mb={10}>Book a session</Heading>
                            <Flex w='100%' gap="10" justify="space-between" mb={6}>
                                <Box width="100%" bg="white" borderRadius="lg" boxShadow="lg">
                                    <Flex bg="#071434" color="white" p={4} borderTopRadius="lg" justify="space-between" align="center">
                                        <Text fontSize="lg" fontWeight="semibold">Select Date</Text>
                                        <Tooltip label="Help" aria-label="A tooltip">
                                            <QuestionIcon />
                                        </Tooltip>
                                    </Flex>
                                    <Box p={4}>
                                        <Flex justify="space-between" align="center" mb={4}>
                                            <IconButton
                                                icon={<ChevronLeftIcon />}
                                                aria-label="Previous Month"
                                                onClick={handlePrevMonth}
                                                colorScheme="gray"
                                            />
                                            <Text fontSize="lg" fontWeight="semibold">
                                                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                            </Text>
                                            <IconButton
                                                icon={<ChevronRightIcon />}
                                                aria-label="Next Month"
                                                onClick={handleNextMonth}
                                                colorScheme="gray"
                                            />
                                        </Flex>
                                        {/* Render the day labels */}
                                        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                                            {renderWeekDays()}
                                        </Grid>
                                        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                                            {renderDays()}
                                        </Grid>
                                    </Box>
                                </Box>

                                <Box width="100%" height="25.5em" display="flex" flexDirection="column">
                                    <Flex color="#071434" p={4} justify="space-between" align="center">
                                        <Text fontSize="lg" fontWeight="semibold">Select Time</Text>
                                        <Tooltip label="Help" aria-label="A tooltip">
                                            <QuestionIcon />
                                        </Tooltip>
                                    </Flex>
                                    <Box p={4} flex="1">
                                        <Flex direction="row" flexWrap="wrap" justify="space-between" height="100%">
                                            <Button
                                                w='48%' // Adjust width to fit two buttons in a row
                                                bg={selectedTime === '8:00 AM - 10:00 AM' ? "#071434" : "white"}
                                                color={selectedTime === '8:00 AM - 10:00 AM' ? "white" : "black"}
                                                onClick={() => handleTimeClick('8:00 AM - 10:00 AM')}
                                                height="40%"
                                                boxShadow="lg"
                                                mb={2} // Add margin bottom for spacing
                                            >
                                                <VStack spacing={5} align="center">
                                                    <Heading size='xs'>8:00 AM - 10:00 AM</Heading>
                                                    <Text size='sm'>Remaining Slot/s: {''}</Text>
                                                </VStack>
                                            </Button>
                                            <Button
                                                w='48%' // Adjust width to fit two buttons in a row
                                                bg={selectedTime === '10:00 AM - 12:00 PM' ? "#071434" : "white"}
                                                color={selectedTime === '10:00 AM - 12:00 PM' ? "white" : "black"}
                                                onClick={() => handleTimeClick('10:00 AM - 12:00 PM')}
                                                height="40%"
                                                boxShadow="lg"
                                                mb={2} // Add margin bottom for spacing
                                            >
                                                <VStack spacing={5} align="center">
                                                    <Heading size='xs'>10:00 AM - 12:00 PM</Heading>
                                                    <Text size='sm'>Remaining Slot/s: {''}</Text>
                                                </VStack>
                                            </Button>
                                            <Button
                                                w='48%' // Adjust width to fit two buttons in a row
                                                bg={selectedTime === '12:00 PM - 2:00 PM' ? "#071434" : "white"}
                                                color={selectedTime === '12:00 PM - 2:00 PM' ? "white" : "black"}
                                                onClick={() => handleTimeClick('12:00 PM - 2:00 PM')}
                                                height="40%"
                                                boxShadow="lg"
                                                mb={2} // Add margin bottom for spacing
                                            >
                                                <VStack spacing={5} align="center">
                                                    <Heading size='xs'>12:00 PM - 2:00 PM</Heading>
                                                    <Text size='sm'>Remaining Slot/s: {''}</Text>
                                                </VStack>
                                            </Button>
                                            <Button
                                                w='48%' // Adjust width to fit two buttons in a row
                                                bg={selectedTime === '2:00 PM - 4:00 PM' ? "#071434" : "white"}
                                                color={selectedTime === '2:00 PM - 4:00 PM' ? "white" : "black"}
                                                onClick={() => handleTimeClick('2:00 PM - 4:00 PM')}
                                                height="40%"
                                                boxShadow="lg"
                                            >
                                                <VStack spacing={5} align="center">
                                                    <Heading size='xs'>2:00 PM - 4:00 PM</Heading>
                                                    <Text size='sm'>Remaining Slot/s: {''}</Text>
                                                </VStack>
                                            </Button>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Flex>
                            <Flex justify="space-between" mt={20}>
                                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleBkCancel}>Cancel</Button>
                                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleBkProceed}>Proceed</Button>
                            </Flex>
                        </Box>
                    </Flex>
                    )}

                    {showARInput && (
                    <Flex justify="center" align="center">
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
                    </Flex>
                    )}

                    {showReview && (
                    <Flex justify="center" align="center">
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
                        </Box>
                    </Flex>
                    )}

                    {isBooked && (
                    <Flex justify="center" align="center">
                        <Box p={8} w="full" maxW="4xl" display={isBooked ? 'block' : 'none'}>
                            <Center mb={6}><PiConfettiFill color='#FE7654' size={120}/></Center>
                            <Heading as="h1" size="md" mb={6}>Your selected session has been successfully booked!</Heading>
                            <Center mt={20}>
                                <Text>Returning in... {countdown}</Text>
                            </Center>
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
                                        {showReview && (
                                            <li>Once confirmed, AR Number cannot be used again.</li>
                                        )}
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

export default WalkinBookingPage