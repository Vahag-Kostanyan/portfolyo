import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Image, Link, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const MyCard = (props) => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

    return (
        <Flex
            minW="100%"
            height="100%"
            gap="50px"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"

        >
            <Image width={isLargerThan1000 ? "65%" : "90%"} height="100%" src={props.image} pointerEvents="none" ></Image>
            <Flex
                width="100%"
                justifyContent="space-between"
                padding={isLargerThan1000 ? "0 100px" : ""}
            >
                <Link href={props.page} isExternal>
                    <Button fontSize={isLargerThan650 ? "16px" : "13px"} rightIcon={<ArrowForwardIcon />}>
                        Go to page
                    </Button>
                </Link>
                <Link href={props.repasitory} isExternal>
                    <Button fontSize={isLargerThan650 ? "16px" : "13px"} rightIcon={<ArrowForwardIcon />}>
                        Go to repository
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
}

export default MyCard;
