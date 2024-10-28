import { Box, Heading, VStack } from "@chakra-ui/react";
import WalkinBookingOptions from "../components/WalkinBookingOptions";
import WalkinBookingRegister from "../components/WalkinBookingRegister";

const WalkinBookingPage = () => {
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
                    alignItems="center" // Vertically center
                    justifyContent="center" // Horizontally center
                >
                    {/* <WalkinBookingOptions /> */}
                    <WalkinBookingRegister/>
                </Box>
            </VStack>
        </Box>
    );
};

export default WalkinBookingPage;