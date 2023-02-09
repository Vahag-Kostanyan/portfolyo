import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, useColorMode, Flex } from '@chakra-ui/react'
import SkilsContent from './SkilsContent'
import { motion } from 'framer-motion'

function Index({ nextPage }) {
  const theme = extendTheme({
    fonts: {
      heading: `Roboto`,
      body: `Roboto`,
    },
  })

  return (
    <motion.div
      overflowY="scroll"

      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: nextPage == "left" ? window.innerWidth : -window.innerWidth, transition: { duration: 0.4 } }}
    >
    <ChakraProvider theme={theme}>
      <ColorModeProvider initialColorMode={theme.config.initialColorMode}>
        <CSSReset />
        <SkilsContent />
      </ColorModeProvider>
    </ChakraProvider>
    </motion.div>
  )
}

export default Index