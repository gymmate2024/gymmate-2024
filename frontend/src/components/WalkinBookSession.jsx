import { Box, Button, Flex, Grid, Heading, IconButton, Text, Tooltip, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, QuestionIcon } from "@chakra-ui/icons";
import useWalkinStore from "../store/walkin";

const WalkinBookSession = () => {

    const {
        currentDate,
        selectedDay,
        setCurrentDate,
        setSelectedDay,
        setShowBooking,
        setShowARInput,
        setShowLogOptions,
        selectedTime, 
        setSelectedTime
    } = useWalkinStore();

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

    const handleBkCancel =  () => {
        setShowLogOptions(true);
        setShowBooking(false);
    }

    const handleBkProceed = () => {
        setShowARInput(true);
        setShowBooking(false);
    }

    const renderWeekDays = () => {
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return weekDays.map((day, index) => (
            <Box key={index} textAlign="center" fontWeight="light">
                {day}
            </Box>
        ));
    };

    const handleTimeClick = (timeSlot) => {
        setSelectedTime(timeSlot); 
        console.log(`You selected time: ${timeSlot}`);
    };

    return (
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
    )
}

export default WalkinBookSession