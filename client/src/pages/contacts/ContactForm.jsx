import React, { useRef } from 'react';
import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { EmailIcon } from '@chakra-ui/icons'


const ContactForm = ({ errorText, setErrorText, setAlertStatus, onOpen, onClose }) => {

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
            alignItems="center"
            justifyContent="center"
        >
            <form onSubmit={sendMail} ref={form}>

                <Stack spacing={10}>
                    <Input name="from_name" placeholder='name' size='md' width={600} />
                    <Input name="from_email" placeholder='mail from' size='md' width={600} />
                    <Textarea
                        name='message'
                        width={600}
                        placeholder='text'
                        size='md'
                    />

                    <Button type="submit" width={150} leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
                        Email
                    </Button>
                </Stack>
            </form>


        </Flex>
    );
}

export default ContactForm;
