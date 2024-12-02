import { Box, Button, Checkbox, Flex, Grid, Heading, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Text, useDisclosure, useToast,} from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaImage, FaUpload, FaUser } from "react-icons/fa";
import useWalkinStore from "../store/walkin";
import { useStudentStore } from "../store/student";
import { useState } from "react";

const WalkinRegister = () => {
    const {
        showPassword,
        isRegistered,
        setShowRegister,
        setShowPassword,
        showRegister,
        showReview,
        setIsRegistered,
        setIsBooked
    } = useWalkinStore();

    // State for form fields
    const [formData, setFormData] = useState({
        _fName: '', 
        _lName: '',
        _sex: '',
        _college: '',
        _course: '',
        _year: '',
        _section: '',
        _umakEmail: '',
        _umakID: '',
        _password: '',
        _lastLogin: new Date(),
        _activeStat: false,
        confirmPassword: '',
        _isAthlete: false,
    });

    const { registerStudent } = useStudentStore();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast()

    const handleChange = (event) => {
        //console.log("Event:", event); // Log the event
        // Check if the event is a string (from RadioGroup)
        if (typeof event === 'string') {
            setFormData((prevData) => ({
                ...prevData,
                _sex: event, // Directly set the value for _sex
            }));
        } else if (event.target) {
            const { name, value, type, checked } = event.target; // Destructure checked here
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formData); // Check formData here

        registerStudent(formData); // Call the registerStudent function
    };

    const handleRegRegister = () => {
        // Check if all fields are filled
        const requiredFields = [
            '_fName', '_lName', '_sex', '_college', '_course', 
            '_year', '_section', '_umakEmail', '_umakID', 
            '_password', 'confirmPassword', // Make sure this is also included
        ];

        const isAllFieldsFilled = requiredFields.every(field => formData[field]);

        if (!isAllFieldsFilled) {
            toast({
                title: "Incomplete Form",
                description: "Please fill in all required fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return; // Exit the function if not all fields are filled
        }

        // Check if passwords match
        if (formData._password !== formData.confirmPassword) {
            toast({
                title: "Password Mismatch",
                description: "Confirm password and password did not match.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return; // Exit the function if passwords do not match
        }
        onOpen(); 
    };

    const handleConfirm = () => {
        if (showRegister) setIsRegistered(true);
        else if (showReview) setIsBooked(true);
        console.log(formData);
        registerStudent(formData);
        onClose(); 
    };

    const handleRegCancel = () => {
        setShowRegister(false); 
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword({ [field]: !showPassword[field] });
    };

    return (
        <Box p={8} w="full" maxW="4xl" display={isRegistered ? 'none' : 'block'}>
            <Heading as="h1" size="md" mb={10} >Register a GymMate account</Heading>
            <form onSubmit={handleSubmit}>
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
                        <Flex direction="row" align="center" gap={1}>
                            <Text>Are you an athlete?</Text>
                            <Checkbox name="_isAthlete" isChecked={formData._isAthlete} onChange={handleChange} colorScheme='green' size="lg" bg="white" value="true"/>
                        </Flex>
                    </Flex>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6} colSpan={2}>
                        <Box>
                            <Text mb={2} color="gray.700">Name</Text>
                            <Flex direction="row" align="center" gap={2}> 
                                <Input name="_fName" value={formData._fName} onChange={handleChange} bg="white" boxShadow="lg" placeholder="ex. Juan" />
                                <Input name="_lName" value={formData._lName} onChange={handleChange} bg="white" boxShadow="lg" placeholder="ex. Dela Cruz" />
                            </Flex>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Sex</Text>
                            <RadioGroup  name="_sex" onChange={handleChange} value={formData._sex}>
                                <Stack direction="row">
                                    <Radio bg="white" boxShadow="lg" value="Male">Male</Radio>
                                    <Radio bg="white" boxShadow="lg" value="Female">Female</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">College & Course</Text>
                            <Flex gap={2}>
                                <Select 
                                    name="_college"
                                    value={formData._college}
                                    onChange={handleChange}
                                    bg="white" 
                                    boxShadow="lg" 
                                    placeholder="College"
                                >
                                    <option value="CCIS">CCIS</option>
                                </Select>
                                <Select 
                                    name="_course"
                                    value={formData._course}
                                    onChange={handleChange}
                                    bg="white" 
                                    boxShadow="lg" 
                                    placeholder="Course"
                                >
                                    <option value="Social Computing">Social Computing</option>
                                    <option value="Application Development">Application Development</option>
                                </Select>
                            </Flex>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Year & Section</Text>
                            <Flex gap={2}>
                                <Select
                                    name="_year"
                                    value={formData._year}
                                    onChange={handleChange}
                                    bg="white" 
                                    boxShadow="lg" 
                                    placeholder="Year"
                                >
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                </Select>
                                <Select 
                                    name="_section"
                                    value={formData._section}
                                    onChange={handleChange}
                                    bg="white" 
                                    boxShadow="lg" 
                                    placeholder="Section"
                                >
                                    <option value="ACSSC">ACSSC</option>
                                    <option value="ACSAD">ACSAD</option>
                                </Select>
                            </Flex>
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">UMak Email Address</Text>
                            <Input name="_umakEmail" value={formData._umakEmail} onChange={handleChange} bg="white" boxShadow="lg" placeholder="ex. juan.delacruz@umak.edu.ph" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">UMak Student ID</Text>
                            <Input name="_umakID" value={formData._umakID} onChange={handleChange} bg="white" boxShadow="lg" placeholder="ex. a12345678" />
                        </Box>
                        <Box>
                            <Text mb={2} color="gray.700">Password</Text>
                            <InputGroup>
                                <Input
                                    name="_password"
                                    value={formData._password}
                                    onChange={handleChange}
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
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
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
            </form>
            <Flex justify="space-between" mt={10}>
                <Button bgColor="white" color="#FE7654" border="2px" borderColor="#FE7654" _hover={{ bg: '#FE7654', color: 'white' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRegCancel}>Cancel</Button>
                <Button bgColor='#FE7654' color='white' _hover={{ bg: '#e65c3b' }} _active={{ bg: '#cc4a2d' }} px={6} py={2} rounded="md" onClick={handleRegRegister}>Register</Button>
            </Flex>

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
  )
}

export default WalkinRegister