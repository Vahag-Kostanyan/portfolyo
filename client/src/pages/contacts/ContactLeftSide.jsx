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
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)')
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

    return (
        <Flex
          flex="5"
          // height="100%"
          height={ !isLargerThan1100 ? "55%" : "100%"}
          boxSizing="content-box"
          gap={10}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"

        >



          <Flex
            marginLeft={ !isLargerThan1100 && isLargerThan500 ? "80px" : "0"}
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
                    fontSize={isLargerThan400 ? "17px" : "14px"}
                    color="#cbcbcb"
                    as="p">
                    {item.key}:
                  </Heading>
                  <Heading
                    fontSize={isLargerThan400 ? "20px" : "15px"} as="p">{item.value}</Heading>
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
