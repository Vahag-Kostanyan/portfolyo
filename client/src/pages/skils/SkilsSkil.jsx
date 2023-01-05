import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const SkilsSkil = () => {
    return (
        <Box
            width="160px"
            height="160px"
            // backgroundColor="cornflowerblue"
            position="relative"
        >
            <Box
                width="160px"
                height="160px"
                borderRadius="50%"
                padding="20px"
                boxShadow="6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    width="120px"
                    height="120px"
                    borderRadius="50%"
                    boxShadow="inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(225,225,225,0.7), -0.5px -0.5px 0px rgba(225,225,225,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -1px rgba(0,0,0,0.05)"
                >
                    <Box
                        fontWeight="600px"
                        fontSize="20px"
                    >65%</Box>
                </Flex>
            </Box>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
        </Box>
    )
}

export default SkilsSkil