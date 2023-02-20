import React from 'react';
import {Flex, Stack, Alert, AlertIcon, useMediaQuery } from '@chakra-ui/react'


const ContactAlert = ({ErrorTextAnimation, alertStatus, errorText, isVisible}) => {

  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

    return (
        <>
            {isVisible ? (
                <Flex
                    position="absolute"
                    top={isLargerThan650 ? "" : "480px"}
                    justifyContent="flex-end"
                    width="100%"
                    padding="0 30px"
                    animation={ErrorTextAnimation}

                >
                    <Stack  spacing={3}>
                        <Alert zIndex={999} status={alertStatus}>
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
