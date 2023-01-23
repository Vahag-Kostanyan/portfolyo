import { Flex, Heading, keyframes, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import ContactForm from './ContactForm';
import ContactAlert from './ContactAlert';
import ContactLeftSide from './ContactLeftSide';


const Erroranimation = keyframes`
  0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
  75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
  100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
`
const homeAnimation = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
`

const ContactsContent = () => {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  const [isLargerThan950] = useMediaQuery('(min-width: 950px)')

  console.log(isLargerThan1100);

  const [errorText, setErrorText] = useState('')
  const [alertStatus, setAlertStatus] = useState('')

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false })

  const ErrorTextAnimation = `${Erroranimation} 1 8s`
  const homeTextAnimation = `${homeAnimation} 1 8s`


  return (
    <Flex
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="92vh"
      animation={homeTextAnimation}
      overflowY="auto"
      overflowX="hidden"
    >

    
      <Flex
        flex={!isLargerThan1100 ? 1.5 : 3}         
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        
        <Heading textAlign="center" as="h1" size="2xl">CONTACTS</Heading>
        <ContactAlert ErrorTextAnimation={ErrorTextAnimation} alertStatus={alertStatus} errorText={errorText} isVisible={isVisible} />
      </Flex>


      <Flex
        gap="50px"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        flex={9}
        width={"100%"}
      >

        <ContactLeftSide/>

        <ContactForm errorText={errorText} setErrorText={setErrorText} setAlertStatus={setAlertStatus} onOpen={onOpen} onClose={onClose} />
      </Flex>

    </Flex>
  )
}

export default ContactsContent