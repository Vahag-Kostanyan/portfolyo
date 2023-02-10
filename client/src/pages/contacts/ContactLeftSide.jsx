import React from 'react';
import { Button, Flex, Heading, useMediaQuery, } from '@chakra-ui/react'
import { FaDownload } from "@react-icons/all-files/fa/FaDownload"

let leftList = [
    { key: "Phone", value: "+374 19 58 68" },
    { key: "Linkdin", value: "vahag kostanyan" },
    { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
    { key: "Adress", value: "Armenia Armavir" },
    { key: "Github", value: "Vahag-Kostanyan" },
  ];

const ContactLeftSide = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isLargerThan450] = useMediaQuery('(min-width: 450px)')
  const [isLargerThan1040] = useMediaQuery('(min-width: 1040px)')

    return (
        <Flex
          flex="5"
          height={isLargerThan1040 ? "100%" : "65%"}
          boxSizing="content-box"
          gap={10}
          flexDirection="column"
          justifyContent="center"
          alignItems={isLargerThan650 ? "center" : "flex-start"}
          padding="5px 10px"
        >

          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            gap={isLargerThan450 ? 10 : 8}
          >

            {leftList.map(item => {
              return (
                <Flex
                  alignItems="center"
                  gap="10px"
                >
                  <Heading
                    fontWeight="500"
                    fontSize={isLargerThan450 ? "17px" : "14px"}
                    color="#cbcbcb"
                    as="p">
                    {item.key}:
                  </Heading>
                  <Heading
                    fontSize={isLargerThan450 ? "20px" : "15px"} as="p">{item.value}</Heading>
                </Flex>
              )
            })}

            <Flex>
              <a href='cv.pdf'
                download="cv.pdf"
              >
                <Button decoration="none" width={150} leftIcon={<FaDownload />} colorScheme='teal' variant='solid'>
                  Download CV
                </Button>
              </a>

            </Flex>
          </Flex>

        </Flex>
    );
}

export default ContactLeftSide;
