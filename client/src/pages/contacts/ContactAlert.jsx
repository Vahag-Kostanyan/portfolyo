import React from 'react';
import {Flex, Stack, Alert, AlertIcon } from '@chakra-ui/react'


const ContactAlert = ({ErrorTextAnimation, alertStatus, errorText, isVisible}) => {
    return (
        <>
            {isVisible ? (
                <Flex
                    justifyContent="flex-end"
                    width="100%"
                    padding="0 30px"
                    animation={ErrorTextAnimation}

                >
                    <Stack spacing={3}>
                        <Alert status={alertStatus}>
                            <AlertIcon />
                            {errorText}
                        </Alert>
                    </Stack>
                </Flex>
            ) : (
                <></>
            )}
        </>
    );
}

export default ContactAlert;
