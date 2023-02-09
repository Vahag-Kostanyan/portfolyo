import React from 'react';
import { Box, Flex, Heading, Image, keyframes, useMediaQuery } from '@chakra-ui/react'
import myPhoto from "../../../imags/myPhoto.png"
import { useTranslation } from 'react-i18next';

let leftList = [
    { key: "Age", value: "17" },
    { key: "Phone", value: "+374 19 58 68" },
    { key: "Linkdin", value: "vahag kostanyan" },
    { key: "Experience", value: "6 months" },
];
let rightList = [
    { key: "Nationality", value: "Armenin" },
    { key: "Adress", value: "Armenia Armavir" },
    { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
    { key: "Position", value: "Junior" },

];

const HomeContent = () => {
    const { t } = useTranslation();
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')

    return (
        <Flex
            flexDirection="column"
            height="91vh"
            padding="20px 30px"
            overflowY="auto"
            gap="30px"
        >
            <Flex
                flexDir="column"
                alignItems={isLargerThan500 ? "center" : "flex-start"}
                textAlign={isLargerThan500 ? "center" : "left"}
            >
                <Heading
                    fontSize="28px"
                >{t("nameSurname")} </Heading>
                <Flex
                    gap="13px"
                >
                    <Heading fontSize="25px" fontWeight="500" size="xl">I</Heading>
                    <Heading fontSize="25px" fontWeight="500" size="xl">am</Heading>
                    <Heading fontSize="25px" fontWeight="500" size="xl">Web</Heading>
                    <Heading fontSize="25px" fontWeight="500" size="xl"> Developer</Heading>
                </Flex>
                <Image src={myPhoto} alt='Dan Abramov'
                    width="100%"
                ></Image>
            </Flex>
            <Flex
                flexDirection="column"
                gap="20px"

            >
                <Flex

                >
                    <Heading as="p" fontWeight="400" size="l">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos
                        amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos amet consectetur adipisicing elit. Dolore voluptates sed hic nihil eos
                        necessitatibus.</Heading>
                </Flex>
                <Flex
                    flexDirection="column"
                    gap="30px"
                >
                    <Heading as="h4">PERSONAL INFOS</Heading>
                    <Flex
                        gap="40px"
                        flexWrap="wrap"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            gap="20px"
                            alignItems="flex-start"
                        >
                            {leftList.map(item => {
                                return (
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        gap="10px"
                                    >
                                        <Heading
                                            fontWeight="500"
                                            fontSize="17px"
                                            color="#cbcbcb"
                                            as="p">
                                            {item.key}:
                                        </Heading>
                                        <Heading
                                            fontSize="17px" as="p">{item.value}</Heading>
                                    </Flex>
                                )
                            })}


                        </Box>

                        <Box
                            display="flex"
                            flexDirection="column"

                            gap="20px"
                            alignItems="flex-start"
                        >
                            {rightList.map(item => {
                                return (
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        gap="10px"
                                    >
                                        <Heading
                                            fontWeight="500"
                                            fontSize="17px"
                                            color="#cbcbcb"
                                            as="p">
                                            {item.key}:
                                        </Heading>
                                        <Heading fontSize="17px" width="auto" as="p">{item.value}</Heading>
                                    </Flex>
                                )
                            })}


                        </Box>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default HomeContent;
