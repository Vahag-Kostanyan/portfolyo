import { Flex, keyframes, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next';
import HomeLeftSide from './HomeLeftSide';
import HomeRightSide from './HomeRightSide';




const animation = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
`


const HomeContent = () => {
  const {t} = useTranslation();
  const homeTextAnimation = `${animation} 1 8s`

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

  return (
    <Flex
    height="92vh"
    overflowY={isLargerThan600 ? "hidden" : "auto"}
    >

    <Flex
      gap="50px"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      animation={homeTextAnimation}
      key={2}
    >
      <HomeLeftSide/>

      <HomeRightSide/>

    </Flex >
    </Flex>

  )
}

export default HomeContent