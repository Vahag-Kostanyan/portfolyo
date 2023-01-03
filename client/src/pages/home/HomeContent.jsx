import { Box, Button, Flex, Heading, Image, keyframes } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next';
import myPhoto from "../../imags/myPhoto.png"


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

const animation = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
`


const HomeContent = () => {
  const {t} = useTranslation();
  


  const homeTextAnimation = `${animation} 1 8s`
  return (
    <Flex
      gap="50px"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="end"
      height="90vh"
      
    >

      <Flex
        flex="5"
        padding="0 50px 30px 50px"
        flexDirection="column"
        gap="90px"
        animation={homeTextAnimation}

      >
        <Flex
          boxSizing="content-box"
          gap={5}
          flexDirection="column"

        >
          <Heading
            as="h1" size="2xl"
          >{t("nameSurname")} </Heading>
          <Heading as="h1"   fontWeight="500" size="xl">I am Web Developer</Heading>
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
                     fontSize="20px" as="p">{item.value}</Heading>
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

      <Flex
        flex="7"
        alignItems="center"
        justifyContent="center"
        animation={homeTextAnimation}
      >
        <Image src={myPhoto} alt='Dan Abramov'
          width="2xl"
        ></Image>
      </Flex>

    </Flex >
  )
}

export default HomeContent