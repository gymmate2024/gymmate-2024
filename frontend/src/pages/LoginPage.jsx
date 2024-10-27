import { Button, Center, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const AuthInput = ({ showPassword, handleShowPassword }) => (
  <>
    {/* Email Input */}
    <InputGroup w='50%'>
      <InputLeftElement 
        color='gray.500' 
        pointerEvents='none' 
        h='50px' 
        display='flex' 
        alignItems='center'>
        <MdEmail />
      </InputLeftElement>
      <Input
        bgColor='white'
        placeholder='Email'
        caretColor='darkgray'
        color='#071434'
        boxShadow='lg' 
        rounded='md'
        h='50px' // Set height to match InputLeftElement
      />
    </InputGroup>

    {/* Password Input */}
    <InputGroup w='50%'>
      <InputLeftElement 
        color='gray.500' 
        pointerEvents='none' 
        h='50px' display='flex' 
        alignItems='center'>
        <RiLockPasswordFill />
      </InputLeftElement>
      <Input
        bgColor='white'
        caretColor='darkgray'
        color='#071434'
        pr='4.5rem'
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        boxShadow='lg' 
        rounded='md'
        h='50px'
      />
      <InputRightElement 
        width='4.5rem' 
        h='50px' 
        display='flex' 
        alignItems='center'>
        <Button 
          color="gray.500" 
          variant='ghost' 
          h='50px' // Set height to match Input
          size='md' 
          onClick={handleShowPassword}
        >
          {showPassword ? <BiSolidHide /> : <BiSolidShow/>}
        </Button>
      </InputRightElement>
    </InputGroup>
  </>
);

AuthInput.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  handleShowPassword: PropTypes.func.isRequired,
};

const handleForgotPassword = () => {
  // Handle the forgot password logic here
  console.log("Forgot Password clicked");
};

const handleRegister = () => {
  // Handle the register logic here
  console.log("Register clicked");
};

const LoginPage = () => {
const cld = new Cloudinary({ cloud: { cloudName: 'dvbl1rjtc' } });
const [showPassword, setShowPassword] = React.useState(false);
const handleShowPassword = () => setShowPassword(!showPassword);
const navigate = useNavigate(); 


  return (
    <Flex color='white'>
      {/* Background Image */}
      <Center w='50vw' h='100vh' m='0' p='0'>
        <AdvancedImage
          draggable={false} 
          cldImg={cld
            .image('bg-01_bcoz28')
            .format('auto')
            .quality('auto')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </Center>

    {/* Login Form */}
    <Center w='50vw' h='100vh' bg='gray.300' m='0' p='0'>
      <VStack w='100%' spacing='10'>
        <Center  m='0' p='0'>
          <AdvancedImage
            draggable={false} 
            cldImg={cld
              .image('clipboard-image-1729707349_e6xxhf')
              .format('auto')
              .quality('auto')}
            style={{
              width: '50%',
              height: '50%'
            }}
          />
        </Center>
        <AuthInput showPassword={showPassword} handleShowPassword={handleShowPassword} />
        <Button
          w='50%'
          h='50px' 
          bgColor='#FE7654'
          color='white'
          _hover={{ bg: '#e65c3b' }} 
          _active={{ bg: '#cc4a2d' }}
          onClick={() => navigate('/dashboard')}>
            Log In
        </Button>
        <HStack spacing='2' w='50%' justifyContent='space-between'>
          <Text 
            onClick={handleForgotPassword} 
            color="#071434" 
            cursor="pointer"
            fontSize='sm'
          >
            Forgot password?
          </Text>
          <Text 
            onClick={handleRegister} 
            color="#071434" 
            cursor="pointer"
            fontSize='sm'
          >
            Register an account?
          </Text>
        </HStack>
      </VStack>
    </Center>
    </Flex>
  );
}

export default LoginPage;