import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import myPhoto from "../../imags/myPhoto.png"

const AbouteMeContent = () => {
  return (
    <Flex
      gap="50px"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="90vh"
    >
      <Heading as="h1">Aboute me</Heading>

      <Flex>
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
              // justifyContent="flex-start"
              gap="20px"
              alignItems="flex-start"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Heading fontSize="22px" as="p">
                  First Name:
                </Heading>
                <Heading fontSize="20px" as="p">Vahagn</Heading>
              </Flex>

              <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Heading fontSize="22px" as="p">
                  Age:
                </Heading>
                <Heading fontSize="20px" as="p">17 Years</Heading>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Heading fontSize="22px" as="p">
                  First Name:
                </Heading>
                <Heading fontSize="20px" as="p">Vahagn</Heading>
              </Flex>
            </Box>
            <Box>
              <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Heading fontSize="22px" as="p">
                  Last Name:
                </Heading>
                <Heading fontSize="20px" as="p">Kostanyan</Heading>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Heading fontSize="22px" as="p">
                  Last Name:
                </Heading>
                <Heading fontSize="20px" as="p">Kostanyan</Heading>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Heading fontSize="22px" as="p">
                  Last Name:
                </Heading>
                <Heading fontSize="20px" as="p">Kostanyan</Heading>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex>

        </Flex>
      </Flex>
    </Flex>
  )
}

export default AbouteMeContent