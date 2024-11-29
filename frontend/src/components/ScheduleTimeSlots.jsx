import { QuestionIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Text, Tooltip, VStack } from "@chakra-ui/react"
import useScheduleStore from '../store/schedule.js'; // Correct import for default export// Import the Zustand store

const ScheduleTimeSlots = () => {
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
                            <Heading size='sm'>8:00 AM - 10:00 AM</Heading>
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
                            <Heading size='sm'>10:00 AM - 12:00 PM</Heading>
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
                            <Heading size='sm'>12:00 PM - 2:00 PM</Heading>
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
                            <Heading size='sm'>2:00 PM - 4:00 PM</Heading>
                            <Text size='sm'>Remaining Slot/s: {''}</Text>
                        </VStack>
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default ScheduleTimeSlots;