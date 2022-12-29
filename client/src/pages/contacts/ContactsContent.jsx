import { EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, Heading, Image, Input, Stack, Textarea, useColorMode } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaDownload } from "@react-icons/all-files/fa/FaDownload"
import emailjs from '@emailjs/browser';


let leftList = [
  { key: "Phone", value: "+374 19 58 68" },
  { key: "Linkdin", value: "vahag kostanyan" },
  { key: "Mail", value: "vahag.kostanyan974@gmail.com" },
  { key: "Phone", value: "+374 19 58 68" },

];


const ContactsContent = () => {
  const [mailName, setMailName] = useState("");
  const [mailFrom, setMailFrom] = useState("");
  const [mailText, setMailText] = useState("");
  const form = useRef();

  const downloadCV = () => {
    // download cv code
  }

  const sendMail = () => {
    console.log(form.current);

    // emailjs.sendForm('service_oa6pzap', 'template_kwjnvhh', {}, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  return (
    <Flex
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >

      <Flex
        flex={3}
        justifyContent="center"
        alignItems="center"
      >
        <Heading textAlign="center" as="h1" size="2xl">CONTACTS</Heading>
      </Flex>


      <Flex
        gap="50px"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        flex={9}
        width="100%"
      >
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
              <Button onClick={downloadCV} width={150} leftIcon={<FaDownload />} colorScheme='teal' variant='solid'>
                Download CV
              </Button>
            </Flex>
          </Flex>

        </Flex>

        <Flex
          flex="7"
          alignItems="center"
          justifyContent="center"
        >
          <FormControl ref={form}>

            <Stack spacing={10}>
              <Input value={mailName} onChange={(e) => setMailName(e.target.value)} name="from_name" placeholder='name' size='md' width={600} />
              <Input value={mailFrom} onChange={(e) => setMailFrom(e.target.value)} name="from_email" placeholder='mail from' size='md' width={600} />
              <Textarea
                name='message'
                width={600}
                value={mailText} onChange={(e) => setMailText(e.target.value)}
                placeholder='text'
                size='md'
              />
              <Button onClick={sendMail} width={150} leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                Email
              </Button>
            </Stack>
          </FormControl>


        </Flex>
      </Flex>

    </Flex>
  )
}

export default ContactsContent