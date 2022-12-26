import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next';
import myPhoto from "../../imags/myPhoto.png"

const AbouteMeContent = () => {


  let leftList = [
    { key: "First Name", value: "Vahag" },
    { key: "Age", value: "17" },
    { key: "Phone", value: "+374 19 58 68" },
    { key: "Linkdin", value: "vahag kostanyan" },
  ];
  let rightList = [
    { key: "Last Name", value: "Kostanyan" },
    { key: "Nationality", value: "Armenin" },
    { key: "Adress", value: "Armenia Armavir" },
    { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
  ];


  return (
    <Flex
      gap="100px"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="90vh"
    >
      <Heading as="h1">Aboute me</Heading>

      <Flex
        gap={2}
      >
        <Flex
          flex={7}
          justifyContent="center"
        >
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
                    <Heading fontSize="22px" as="p">
                      {item.key}:
                    </Heading>
                    <Heading fontSize="20px" as="p">{item.value}</Heading>
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
                    <Heading fontSize="22px" as="p">
                      {item.key}:
                    </Heading>
                    <Heading fontSize="20px" as="p">{item.value}</Heading>
                  </Flex>
                )
              })}


            </Box>
        
            </Box>
          </Flex>
          </Flex>
        </Flex>
        <Flex
        flex="5">
              <Heading as="p" fontSize="20px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam, expedita neque debitis, vel esse animi aliquam officia reiciendis aspernatur, deserunt eveniet accusamus? Ratione, molestiae quisquam optio earum non nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illum amet ducimus, facere optio quibusdam possimus blanditiis ea eos, laborum, cum ipsum recusandae asperiores qui repellat dolor nam pariatur adipisci.</Heading>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AbouteMeContent