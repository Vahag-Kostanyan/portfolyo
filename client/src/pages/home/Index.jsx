import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'
import NavLink from "../../components/NavLink"
import HomeContent from './HomeContent'
import { motion } from 'framer-motion'

function Index() {

  return (
    <motion.div

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
    <ChakraProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <NavLink/>
            <HomeContent/>
        </ColorModeProvider>
    </ChakraProvider>
    </motion.div>
  )
}

export default Index