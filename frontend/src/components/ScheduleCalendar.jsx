// Calendar.js
import { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    Grid,
    Text,
    IconButton,
    Tooltip
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, QuestionIcon } from '@chakra-ui/icons';

const ScheduleCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null); // State to track the selected day
    

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDay(null); // Reset selected day when changing month
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDay(null); // Reset selected day when changing month
    };

    const handleDayClick = (day) => {
        setSelectedDay(day); // Update the selected day
        
        // Log the selected day, month, and year in yyyy-mm-dd format
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
        console.log(`You pressed: ${formattedDate}`); // Logs in yyyy-mm-dd format
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
                    bg={selectedDay === i ? "#071434" : "transparent"} // Change background if active
                    color={selectedDay === i ? "white" : "black"} // Change text color if active
                    onClick={() => handleDayClick(i)} // Handle day click
                >
                    {i}
                </Button>
            );
        }

        return days;
    };

    return (
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
                        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                    </Text>
                    <IconButton
                        icon={<ChevronRightIcon />}
                        aria-label="Next Month"
                        onClick={handleNextMonth}
                        colorScheme="gray"
                    />
                </Flex>
                <Grid fontSize='0.6rem' alignItems='center' templateColumns="repeat(7, 1fr)" textAlign="center" color="gray.500" mb={2}>
                    <Text>Sunday</Text>
                    <Text>Monday</Text>
                    <Text >Tuesday</Text>
                    <Text>Wednesday</Text>
                    <Text>Thursday</Text>
                    <Text>Friday</Text>
                    <Text>Saturday</Text>
                </Grid>
                <Grid templateColumns="repeat(7, 1fr)" gap={2}>
                    {renderDays()}
                </Grid>
            </Box>
        </Box>
    );
};

export default ScheduleCalendar;