import { QuestionIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Text, Tooltip } from "@chakra-ui/react"
import useScheduleStore from "../store/schedule.js"; // Import the Zustand store

const ScheduleTime = () => {
    const { selectedTime, setSelectedTime } = useScheduleStore(); // Use Zustand store

    const handleTimeClick = (timeSlot) => {
        setSelectedTime(timeSlot); // Update the selected time in Zustand store
        console.log(`You selected time: ${timeSlot}`); // Log the selected time slot
    };

    return (
        <Box width="100%" height="25.5em" display="flex" flexDirection="column">
            <Flex color="#071434" p={4} justify="space-between" align="center">
                <Text fontSize="lg" fontWeight="semibold">Select Time</Text>
                <Tooltip label="Help" aria-label="A tooltip">
                    <QuestionIcon />
                </Tooltip>
            </Flex>
            <Box p={4} flex="1"> 
                <Flex direction="column" justify="space-between" height="100%">
                <Button
                    w='100%' 
                    bg={selectedTime === '8:00 AM - 10:00 AM' ? "#071434" : "white"} 
                    color={selectedTime === '8:00 AM - 10:00 AM' ? "white" : "black"}
                    onClick={() => handleTimeClick('8:00 AM - 10:00 AM')}
                    height="50px"
                    boxShadow="lg" // Add boxShadow prop here
                >
                    <Heading size='md'>8:00 AM - 10:00 AM</Heading>
                </Button>
                <Button 
                    w='100%' 
                    bg={selectedTime === '10:00 AM - 12:00 PM' ? "#071434" : "white"} 
                    color={selectedTime === '10:00 AM - 12:00 PM' ? "white" : "black"}
                    onClick={() => handleTimeClick('10:00 AM - 12:00 PM')}
                    height="50px"
                    boxShadow="lg" // Add boxShadow prop here
                >
                    <Heading size='md'>10:00 AM - 12:00 PM</Heading>
                </Button>
                <Button 
                    w='100%' 
                    bg={selectedTime === '12:00 PM - 2:00 PM' ? "#071434" : "white"} 
                    color={selectedTime === '12:00 PM - 2:00 PM' ? "white" : "black"}
                    onClick={() => handleTimeClick('12:00 PM - 2:00 PM')}
                    height="50px"
                    boxShadow="lg" // Add boxShadow prop here
                >
                    <Heading size='md'>12:00 PM - 2:00 PM</Heading>
                </Button>
                <Button 
                    w='100%' 
                    bg={selectedTime === '2:00 PM - 4:00 PM' ? "#071434" : "white"} 
                    color={selectedTime === '2:00 PM - 4:00 PM' ? "white" : "black"}
                    onClick={() => handleTimeClick('2:00 PM - 4:00 PM')}
                    height="50px"
                    boxShadow="lg" // Add boxShadow prop here
                >
                    <Heading size='md'>2:00 PM - 4:00 PM</Heading>
                </Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default ScheduleTime;