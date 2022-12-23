import { Box, Button, Flex, Heading, Image, keyframes } from '@chakra-ui/react'
import React from 'react'
import myPhoto from "../../imags/myPhoto.png"

const animation = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }

  // 0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
  // 25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
  // 75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(1px); }
  // 100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
`


const HomeContent = () => {


  const homeTextAnimation = `${animation} 1 8s`
  return (
    <Flex
      gap="50px"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="end"
      height="90vh"
    >

      <Flex
        flex="5"
        boxSizing="content-box"
        gap={5}
        padding="0 50px 300px 50px"
        flexDirection="column"
        animation = {homeTextAnimation}


      >
        <Heading
          as="h1" size="2xl"
        >HI I'M VAHAGN KOSTANYAN</Heading>
        <Heading as="h1" fontWeight="500" size="xl">I am Web Developer</Heading>
        <Heading as="p" fontWeight="400" size="l">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos
          amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos
          necessitatibus.</Heading>
      </Flex>

      <Flex
        flex="7"
        alignItems="center"
        justifyContent="center"
        animation = {homeTextAnimation}
      >
        <Image src={myPhoto} alt='Dan Abramov'
          width="2xl"
        ></Image>
      </Flex>

    </Flex>
  )
}

export default HomeContent