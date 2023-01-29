import React from 'react'
import { Box, Flex, Heading, useMediaQuery } from '@chakra-ui/react'
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

const HomeLeftSide = () => {
    const {t} = useTranslation();
    const [isLargerThan1500] = useMediaQuery('(min-width: 1500px)')
    const [isLargerThan1650] = useMediaQuery('(min-width: 1650px)')


  return (
    <Flex
        flex="5"
        padding="0 50px 30px 50px"
        flexDirection="column"
        gap={isLargerThan1650 ? "90px" : "40px"}
      >
        <Flex
          boxSizing="content-box"
          gap={5}
          flexDirection="column"

        >
          <Heading
            as="h1" size={isLargerThan1500 ? "2xl" : "xl"}
          >{t("nameSurname")} </Heading>
          <Flex
            gap="13px"
          >
            <Heading fontSize="33px" fontWeight="500" size="xl">I</Heading>
            <Heading fontSize="33px" fontWeight="500" size="xl">am</Heading>
            <Heading fontSize="33px" fontWeight="500" size="xl">Web</Heading>
            <Heading fontSize="33px" fontWeight="500" size="xl"> Developer</Heading>
          </Flex>
          {/* <Heading as="h1"   fontWeight="500" size="xl">I am Web Developer</Heading> */}
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
            gap="90px"
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
                      <Heading fontSize="17px" as="p">{item.value}</Heading>
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