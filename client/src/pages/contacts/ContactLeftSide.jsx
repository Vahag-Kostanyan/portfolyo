import React from 'react';
import { Button, Flex, Heading, } from '@chakra-ui/react'
import { FaDownload } from "@react-icons/all-files/fa/FaDownload"

let leftList = [
    { key: "Phone", value: "+374 19 58 68" },
    { key: "Linkdin", value: "vahag kostanyan" },
    { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
    { key: "Adress", value: "Armenia Armavir" },
    { key: "Github", value: "Vahag-Kostanyan" },
  ];

const ContactLeftSide = () => {
    return (
        <Flex
          flex="5"
          height="100%"
          boxSizing="content-box"
          gap={10}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"

        >



          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            gap={10}
          >

            {leftList.map(item => {
              return (
                <Flex
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
