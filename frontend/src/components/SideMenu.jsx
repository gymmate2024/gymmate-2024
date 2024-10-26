import { Box, Button, Icon, Text, VStack } from "@chakra-ui/react"
import { MdAccountCircle, MdDashboard, MdSettings } from "react-icons/md";

const SideMenu = () => {
  return (

    <Box w='20vw' h='100vh'>
      <Box 
        bg="#071434" 
        w='100vw' 
        h='100vh' 
        position='inherit'>
        <Box 
          bg="white" 
          w='20vw' 
          h='70vh' 
          boxShadow='lg' 
          position='absolute' 
          bottom={0} 
          left={0} 
          borderTopRadius='lg'>
            
          <VStack h='100%'>

            <Box flex="1" paddingTop={20}>
              <VStack spacing={10} align="stretch" flex="1">
                <Box display="flex" w="100%" alignItems='center'>
                  <Icon as={MdAccountCircle} w={5} h={5} mr={2} />
                  <Text
                    onClick=''
                    color="#071434"
                    cursor="pointer"
                    fontSize='lg'
                    fontWeight='semibold'
                    textAlign="center"  
                  >
                    Account
                  </Text>
                </Box>
                <Box display="flex" w="100%" alignItems='center'>
                  <Icon as={MdDashboard} w={5} h={5} mr={2} />
                  <Text
                    onClick=''
                    color="#071434"
                    cursor="pointer"
                    fontSize='lg'
                    fontWeight='semibold'
                    textAlign="center"  
                  >
                    Dashboard
                  </Text>
                </Box> 
                <Box display="flex" w="100%" alignItems='center'>
                  <Icon as={MdSettings} w={5} h={5} mr={2} />
                  <Text
                    onClick=''
                    color="#071434"
                    cursor="pointer"
                    fontSize='lg'
                    fontWeight='semibold'
                    textAlign="center"  
                  >
                    Settings
                  </Text>
                </Box> 
              </VStack>
            </Box>

            <Box paddingBottom={20}>
              <Box w="100%">
                <Button
                  w='100px'
                  h='50px'
                  bgColor='#FE7654'
                  color='white'
                  _hover={{ bg: '#e65c3b' }}
                  _active={{ bg: '#cc4a2d' }}
                  marginLeft="auto"
                  marginRight="auto"
                >
                  Log out
                </Button>
              </Box>
            </Box>

          </VStack>

        </Box>
      </Box>
    </Box>
  )
}

export default SideMenu;