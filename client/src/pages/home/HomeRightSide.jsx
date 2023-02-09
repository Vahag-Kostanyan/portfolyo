import React from 'react'
import myPhoto from "../../imags/myPhoto.png"
import { Flex, Image, useMediaQuery } from '@chakra-ui/react'

const HomeRightSide = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')



    if(!isLargerThan1000 && isLargerThan800){
      console.log(1);
      return(
        <Image src={myPhoto} alt='Dan Abramov'
          width="580px"
          position="absolute"
          right= "200px"
          top="80px"

        ></Image>
      )
    }else if(!isLargerThan800 && isLargerThan650) {
      return(
        <Image src={myPhoto} alt='Dan Abramov'
          width="580px"
          position="absolute"
          right="100px"
          top="80px"
        ></Image>
      )
    }else{
      return(
        <Image src={myPhoto} alt='Dan Abramov'
          width="580px"
          position="absolute"
          top="80px"
          right={0}
        ></Image>
      )
    }
    
  // }

}

export default HomeRightSide