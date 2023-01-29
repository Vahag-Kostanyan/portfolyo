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

const ContactsConent2 = () => {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  const [isLargerThan950] = useMediaQuery('(min-width: 950px)')
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
      animation={homeTextAnimation}
      flexDirection="column"
      height="91vh"
      zIndex={2}
    >
      <Flex
        width="100%"
        flex={1.5}
        alignItems="center"
        justifyContent="center"
      >
                  <Heading textAlign="center" as="h1" size="2xl">CONTACTS</Heading>
        <ContactAlert ErrorTextAnimation={ErrorTextAnimation} alertStatus={alertStatus} errorText={errorText} isVisible={isVisible} />
      </Flex>
      <Flex
        flex={10.5}
      >
          111
      </Flex>
      
    </Flex>
  )
}

export default ContactsConent2