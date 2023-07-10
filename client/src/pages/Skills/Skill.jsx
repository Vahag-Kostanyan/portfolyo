import { Flex, Image, position } from '@chakra-ui/react';
import React from 'react';

const Skill = ({ skil, skilName }) => {


    return (
        <Flex
            flexDirection="column"
            width="220px"
            height="270px"
            boxShadow="rgb(100 100 111 / 15%) 0px 7px 29px 0px;"
            _hover={{
                boxShadow: "rgb(100 100 111 / 80%) 0px 7px 29px 0px;",
                width: "230px",
                height: "280px",
                transitionDuration: "150ms",
            }}
            borderRadius={10}
            padding="10px 5px"
            alignItems="center"
            justifyContent="center"
            fontSize="30px"

        >
            <Flex
                maxW="130px"

                flex={9}
                justifyContent="center"
                alignItems="center"
            >
                {skilName == 'S.O.L.I.D' ? (
                    <Image
                        src={skil}
                        width={skilName == "CSS 3" ? "75%" : "180%"}
                    ></Image>
                ) : (
                    <Image
                        src={skil}
                        width={skilName == "CSS 3" ? "75%" : "100%"}
                    ></Image>
                )}

            </Flex>
            <Flex
                flex={3}
                alignItems="center"
                justifyContent="center"
            >
                {skilName}
            </Flex>
        </Flex>
    );
}

export default Skill;
