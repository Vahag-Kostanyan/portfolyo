import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import myPhoto from "../../imags/myPhoto.png"

const ContactsContent = () => {
  return (
    <Flex 
    gap="50px"
    flexWrap="wrap"
    alignItems="center"
    justifyContent="center"
    height="90vh"
    >
    
    <Flex 
      flex="5"
      boxSizing="content-box"
      gap={5}
      padding="0 50px 300px 50px"
      flexDirection="column"
    >
      <Heading as="h1" size="2xl">HI I'M VAHAGN KOSTANYAN</Heading>
      <Heading as="h1" fontWeight="500" size="xl">I am Web Developer</Heading>
      <Heading as="p" fontWeight="400" size="l">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos 
      amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos
       necessitatibus.</Heading>

    </Flex>



    <Flex 
      flex="7"
      alignItems="center"
      justifyContent="center"
      >
      <Image src={myPhoto} alt='Dan Abramov' 
             width="2xl" 
      ></Image>

    </Flex>

  </Flex>
  )
}

export default ContactsContent