import React from 'react'
import myPhoto from "../../imags/myPhoto.png"
import { Flex, Image } from '@chakra-ui/react'

const HomeRightSide = () => {
  return (
    <Flex
        flex="7"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={myPhoto} alt='Dan Abramov'
          width="2xl"
        ></Image>
      </Flex>
  )
}

export default HomeRightSide