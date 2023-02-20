import React from 'react'
import { Box, Flex, Heading, Link, useMediaQuery } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const HomeLeftSide = ({ }) => {
  const { t } = useTranslation();
  const [isLargerThan1650] = useMediaQuery('(min-width: 1650px)')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const language = i18next.language

  let leftList = [
    { key: t('age'), value: "18" },
    { key: t('phone'), value: "+374 19 58 68" },
    { key: "Linkdin", value: "vahag kostanyan", link: "https://www.linkedin.com/in/vahag-kostanyan-963534249/" },
    { key: t('experience'), value: t('months') },
  ];

  let rightList = [
    { key: t('nationality'), value: t('armenia') },
    { key: t('adress'), value: t('armeniaArmavir') },
    { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
    { key: t('position'), value: t('junior') },

  ];

  return (
    <Flex
      width="100%"
      padding={isLargerThan600 ? "0 50px 30px" : "60px 30px 30px"}
      flexDirection="column"
      minW={isLargerThan600 ? "650px" : "20px"}
      maxW={isLargerThan1000 ? "900px" : "100%"}
      zIndex={2}
      gap={isLargerThan1650 ? "90px" : "40px"}
      alignItems={isLargerThan1000 ? "flex-start" : "center"}

    >
      <Flex
        boxSizing="content-box"
        gap={5}
        flexDirection="column"
        alignItems={isLargerThan1000 ? "flex-start" : "center"}

      >
        {language == "am" ? (
          <Flex gap="20px" alignItems={isLargerThan900 ? "flex-end" : "center"}
            justifyContent={isLargerThan900 ? "flex-end" : "center"}
            flexDirection={isLargerThan900 ? "row" : "column"}
          >
            <Heading
              as="h1" size={"2xl"} borderBottom='1px solid ' fontWeight={100}
            >{t('nameSurnameFirstSide')} </Heading>
            <Heading
              as="h1" fontWeight={500} size={"xl"}
            >{t('nameSurnameLastSide')}</Heading>
          </Flex>
        ) : (
          <Flex gap="20px" alignItems="flex-end"
            justifyContent="flex-left"
          >
            <Heading
              as="h1" size={"2xl"} borderBottom='1px solid ' fontWeight={100}
            >{t('nameSurnameFirstSide')} </Heading>
            <Heading
              as="h1" fontWeight={500} size={"xl"}
            >{t('nameSurnameLastSide')}</Heading>
          </Flex>
        )}
        <Flex
          gap="8px"
        >
          <Heading fontSize="33px" letterSpacing={6} fontWeight="500" size="xl">{t('i')}</Heading>
          <Heading fontSize="33px" letterSpacing={6} fontWeight="500" size="xl">{t('am')}</Heading>
          <Heading fontSize="33px" letterSpacing={6} fontWeight="500" size="xl">{t('web')}</Heading>
          <Heading fontSize="33px" letterSpacing={6} fontWeight="500" size="xl"> {t('developer')}</Heading>

        </Flex>
        <Heading as="p" fontWeight="400" size="l">{t('TextAboutMe')}</Heading>
      </Flex>
      <Flex
        flexDirection="column"
        gap="30px"
      >
        <Heading as="h4" size={"xl"}>{t('personalInfo')}</Heading>
        <Flex
          gap="90px"
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

                  {item.link ? (
                    <Link href={item.link} isExternal>
                      <Heading
                        fontSize="17px" as="p">{item.value}</Heading>
                    </Link>
                  ) : (
                    <Heading
                      fontSize="17px" as="p">{item.value}</Heading>
                  )}

                </Flex>
              )
            })}


          </Box>
          <Box>

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
                    {item.key == "Mail" ? (
                      <Link onClick={() => window.location = 'mailto:vahag.kostanyan974@gmail.com'}>
                        <Heading fontSize="17px" as="p">{item.value}</Heading>
                      </Link>
                    ) : (
                      <Heading fontSize="17px" as="p">{item.value}</Heading>
                    )}
                  </Flex>
                )
              })}


            </Box>

          </Box>
        </Flex>
      </Flex>


    </Flex >
  )
}

export default HomeLeftSide