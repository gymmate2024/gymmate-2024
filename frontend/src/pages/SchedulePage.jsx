import { Box, Heading, VStack } from "@chakra-ui/react";
import ScheduleCalendar from "../components/ScheduleCalendar";

const SchedulePage = () => {
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
            <Heading as='h3' size='lg'>Schedule Management</Heading>
            </Box>

            <Box
                bg='gray.100' 
                w='80vw' 
                h='90vh'
                position='absolute' 
                top='10vh' 
                bottom={0}
                p='5%'>
                <ScheduleCalendar/>
            </Box>
        </VStack>
    </Box>
    );
};

export default SchedulePage