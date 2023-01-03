import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'
import SkilsContent from './SkilsContent'
import { motion } from 'framer-motion'

function Index({nextPage}) {


  console.log(nextPage);

  return (
    <motion.div

    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: nextPage == "left" ? window.innerWidth :  -window.innerWidth, transition:{duration: 0.4}}}
    >
    <ChakraProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <SkilsContent/>
        </ColorModeProvider>
    </ChakraProvider>
    </motion.div> 
  )
}

export default Index