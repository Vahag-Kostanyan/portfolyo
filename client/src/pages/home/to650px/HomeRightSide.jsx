import React from 'react'
import myPhoto from "../../../imags/myPhoto.png"
import { Image, useMediaQuery } from '@chakra-ui/react'

const HomeRightSide = () => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan1500] = useMediaQuery('(min-width: 1500px)')

    if (!isLargerThan1500 && isLargerThan1000) {
        return (
            <Image pointerEvents="none" src={myPhoto} alt='Dan Abramov'
                width="450px"
                position="absolute"
                top="80px"
                right={0}
            ></Image>
        )
    }
    if (!isLargerThan1000 && isLargerThan800) {
        return (
            <Image pointerEvents="none" src={myPhoto} alt='Dan Abramov'
                width="450px"
                position="absolute"
                right="200px"
                top="80px"

            ></Image>
        )
    }
    if (!isLargerThan800 && isLargerThan650) {

        return (
            <Image pointerEvents="none" src={myPhoto} alt='Dan Abramov'
                width="450px"
                position="absolute"
                right="100px"
                top="80px"
            ></Image>
        )
    }
    return (
        <Image pointerEvents="none" src={myPhoto} alt='Dan Abramov'
            width="450px"
            position="relative"
            top="20px"
            right="100px"
        ></Image>
    )

}

export default HomeRightSide