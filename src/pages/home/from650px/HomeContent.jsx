import React from 'react';
import { Box, Flex, Heading, Image, keyframes, Link, useMediaQuery } from '@chakra-ui/react'
import myPhoto from "../../../imags/myPhoto.png"
import { useTranslation } from 'react-i18next';




const HomeContent = () => {
    const { t } = useTranslation();
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

    let rightList = [
        { key: t('age'), value: "19" },
        { key: t('phone'), value: "+374 98 19 58 68" },
        { key: "Linkdin", value: "vahag kostanyan", link: "https://www.linkedin.com/in/vahagn-kostanyan" },
        { key: t('experience'), value: t('months') },
        { key: t('nationality'), value: t('armenia') },
        { key: t('adress'), value: t('armeniaArmavir') },
        { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
        { key: t('position'), value: t('junior') },
    ];

    return (
        <Flex
            flexDirection="column"
            height={isLargerThan650 ? "91vh" : "auto"}
            padding="50px 30px"
            overflowY={isLargerThan650 ? "auto" : ""}
            gap="30px"
        >
            <Flex
                flexDir="column"
                alignItems={isLargerThan500 ? "center" : "flex-start"}
                textAlign={isLargerThan500 ? "center" : "left"}
            >
                <Flex gap="20px" alignItems="flex-end"
                    justifyContent="center"

                >
                    <Heading
                        as="h1" fontWeight={500} size={"xl"}
                    > <Heading as="span" borderBottom='1px solid' fontWeight="100px" size={"2xl"}>{t('nameSurnameFirstSide')}</Heading> {t('nameSurnameLastSide')}</Heading>
                </Flex>
                <Flex
                    gap="8px"
                    flexWrap="wrap"
                >
                    <Heading letterSpacing={6} fontWeight="500" fontSize="25px">{t('i')}</Heading>
                    <Heading letterSpacing={6} fontWeight="500" fontSize="25px">{t('am')}</Heading>
                    <Heading letterSpacing={6} fontWeight="500" fontSize="25px">{t('web')}</Heading>
                    <Heading letterSpacing={6} fontWeight="500" fontSize="25px"> {t('developer')}</Heading>

                </Flex>
                <Image pointerEvents="none" src={myPhoto} alt='Dan Abramov'
                    width="100%"
                ></Image>
            </Flex>
            <Flex
                flexDirection="column"
                gap="20px"

            >
                <Flex

                >
                    <Heading as="p" fontWeight="400" size="l">{t('TextAboutMe')}</Heading>
                </Flex>
                <Flex
                    flexDirection="column"
                    gap="30px"
                >
                    <Heading as="h4" size={"lg"}>{t('personalInfo')}</Heading>
                    <Flex
                        gap="40px"
                        flexWrap="wrap"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"

                            gap="30px"
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
                                        {item.link ? (
                                            <Link href={item.link} isExternal>
                                                <Heading fontSize="17px" width="auto" as="p">{item.value}</Heading>
                                            </Link>
                                        ) : (
                                            <>
                                                {item.key == "Mail" ? (
                                                    <Link onClick={() => window.location = 'mailto:vahag.kostanyan974@gmail.com'}>
                                                        <Heading fontSize="17px" as="p">{item.value}</Heading>
                                                    </Link>
                                                ) : (
                                                    <Heading fontSize="17px" width="auto" as="p">{item.value}</Heading>
                                                )
                                                }
                                            </>
                                        )}
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
