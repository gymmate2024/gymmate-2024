import { Box, Button, Divider, Flex, Heading, Text, useToast, VStack } from "@chakra-ui/react"
import useWalkinStore from "../store/walkin"
import { useStudentStore } from "../store/student.js";


const WalkinLogOptions = () => {

    const {
        setShowRegister,
        setShowBooking,
        setShowLogOptions,
        setShowLogin
    } = useWalkinStore();

    const { logout } = useStudentStore();
    const toast = useToast();

    const handleOptLogin = () => {
        setShowLogin(true); 
        setShowRegister(false); 
    }

    const handleLogOptBook = () => {
        setShowBooking(true);
        setShowLogOptions(false);
    }

    const handleLogout = () => {
        logout(); 
    
        toast({
          title: "Logged out",
          description: "You have successfully logged out.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
    
        // Navigate to the login page
        setShowLogOptions(false);
        setShowLogin(true);
      };


    return (
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
                    onClick={handleLogout}>
                        Log out
                </Button>
            </Flex>
        </Box>
    )
}

export default WalkinLogOptions