import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'
import HomeContent from './HomeContent'
import { motion } from 'framer-motion'

function Index({nextPage}) {
  const theme = extendTheme({
    fonts: {
      heading: `Roboto`,
      body: `Roboto`,
    },
  })

  return (
    <motion.div
      key={"home"}
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: nextPage == "left" ? window.innerWidth :  -window.innerWidth, transition:{duration: 0.4}}}
      >
    <ChakraProvider  theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <HomeContent/>
        </ColorModeProvider>
    </ChakraProvider>
    </motion.div>
  )
}

export default Index