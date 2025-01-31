import { Flex, Heading, keyframes, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import ContactForm from './ContactForm';
import ContactAlert from './ContactAlert';
import ContactLeftSide from './ContactLeftSide';
import { useTranslation } from 'react-i18next';


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
  const { t } = useTranslation();
  const [isLargerThan1150] = useMediaQuery('(min-width: 1150px)')
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
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
      width="100%"
      height={isLargerThan650 ? "85vh" : ""}
      zIndex={2}
      overflowX={isLargerThan650 ? "hidden" : ""}
      overflowY={isLargerThan650 ? "auto" : ""}
      position="relative"
      padding={isLargerThan650 ? "0 50px" : "50px 0 0 "}
    >
      <Flex
        width="100%"
        flex={2}
        padding="25px 90px"
        alignItems="center"
        justifyContent="center"
      >
        <Heading textAlign="center" as="h1" size="2xl">{t('myContacts')}</Heading>
        <ContactAlert ErrorTextAnimation={ErrorTextAnimation} alertStatus={alertStatus} errorText={errorText} isVisible={isVisible} />
      </Flex>
      <Flex
        flex={10}
        flexDirection={isLargerThan1150 ? "row" : "column"}
        gap={isLargerThan650 ? "60px" : "80px"}

      padding={isLargerThan650 ? "20px 90px" : "20px 20px"}

      >
        <ContactLeftSide/>
        <ContactForm  errorText={errorText} setErrorText={setErrorText} setAlertStatus={setAlertStatus} onOpen={onOpen} onClose={onClose} />
      </Flex>

    </Flex>
  )
}

export default ContactsConent2