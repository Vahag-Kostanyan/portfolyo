import React from 'react';
import { Button, Flex, Heading, Link, useMediaQuery, } from '@chakra-ui/react'
import { FaDownload } from "@react-icons/all-files/fa/FaDownload"
import { useTranslation } from 'react-i18next';



const ContactLeftSide = () => {
  const { t } = useTranslation();
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isLargerThan450] = useMediaQuery('(min-width: 450px)')
  const [isLargerThan1040] = useMediaQuery('(min-width: 1040px)')


  let leftList = [
    { key: t('phone'), value: "+374 98 19 58 68" },
    { key: "Linkdin", value: "vahag kostanyan", link: "https://www.linkedin.com/in/vahag-kostanyan-963534249/" },
    { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
    { key: t('adress'), value: t('armeniaArmavir') },
    { key: "Github", value: "Vahag-Kostanyan", link: "https://github.com/Vahag-Kostanyan" },
  ];
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


              {item.link ? (
                <Link href={item.link} isExternal>
                  <Heading fontSize={isLargerThan450 ? "20px" : "15px"} as="p">{item.value}</Heading>
                </Link>
              ) : (
                <>
                  {item.key == "Mail" ? (
                    <Link onClick={() => window.location = 'mailto:vahag.kostanyan974@gmail.com'}>
                      <Heading fontSize={isLargerThan450 ? "20px" : "15px"} as="p">{item.value}</Heading>
                    </Link>
                  ) : (
                    <Heading fontSize={isLargerThan450 ? "20px" : "15px"} as="p">{item.value}</Heading>
                  )
                  }
                </>
              )}
            </Flex>
          )
        })}

        <Flex>
          <a href='newCV.pdf'
            download="newCV.pdf"
          >
            <Button decoration="none" width={150} leftIcon={<FaDownload />} colorScheme='teal' variant='solid'>
              {t('download')} CV
            </Button>
          </a>

        </Flex>
      </Flex>

    </Flex>
  );
}

export default ContactLeftSide;
