import React, { useRef } from 'react';
import { Box, Button, Flex, Input, Stack, Textarea, useMediaQuery } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { EmailIcon } from '@chakra-ui/icons'


const ContactForm = ({ errorText, setErrorText, setAlertStatus, onOpen, onClose }) => {
    const [isLargerThan700] = useMediaQuery('(min-width: 700px)')
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')

    const form = useRef();

    function validations(errorText) {
        setErrorText(errorText)
        onOpen();
        setTimeout(() => {
            onClose();
        }, 7000)
    }




    const sendMail = (e) => {


        e.preventDefault();

        if (form.current.from_name.value == "") {
            setAlertStatus("error")
            return validations("Name filde is required")
        } else if (form.current.from_email.value == "") {
            setAlertStatus("error")
            return validations("Mail filde is required")
        } else if (form.current.message.value == "") {
            setAlertStatus("error")
            return validations("Massage filde is required")
        }
        
        
        emailjs.sendForm('service_oa6pzap', 'template_kwjnvhh', form.current, 'cQeqpXLR702GWfXyj')
            .then((result) => {
                setAlertStatus("success")
                validations("Massage sented successfuly")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                return
            });
    }

    return (
        <Flex
            flex="7"
            width="100%"
            alignItems="center"
            justifyContent="center"
        >
            <form style={{width: "95%"}} onSubmit={sendMail} ref={form}>

                <Stack display="flex" flexDirection="column" justifyContent="center" alignItems="center" spacing={10}>
                    <Input name="from_name" placeholder='name' size='md' width={isLargerThan700 ? 600 : "100%"} />
                    <Input name="from_email" placeholder='mail from' size='md' width={isLargerThan700 ? 600 : "100%"}  />
                    <Textarea
                        name='message'
                        width={isLargerThan700 ? 600 : "100%"}
                        placeholder='text'
                        size='md'
                    />
                    <Box  width={isLargerThan700 ? 600 : "100%"}>
                    <Button  type="submit" width={150} leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                        Email
                    </Button>
                    </Box>
                </Stack>
            </form>


        </Flex>
    );
}

export default ContactForm;
