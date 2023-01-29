import React from 'react'
import myPhoto from "../../imags/myPhoto.png"
import { Flex, Image, useMediaQuery } from '@chakra-ui/react'

const HomeRightSide = () => {
  const [isLargerThan1650] = useMediaQuery('(min-width: 1650px)')

  return (
    <Flex
        flex="7"
        alignItems="center"
        justifyContent="center"
        key={4}
      >
        <Image src={myPhoto} alt='Dan Abramov'
          width={isLargerThan1650 ? "2xl" : "xl"}
        ></Image>
      </Flex>
  )
}

export default HomeRightSide