import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, useColorMode, Flex } from '@chakra-ui/react'
// import ProjectsContent from './ProjectsContent'
import { motion } from 'framer-motion'
import ProjectsContent from './ProjectsContent'

function Index({ nextPage }) {
  const theme = extendTheme({
    fonts: {
      heading: `Roboto`,
      body: `Roboto`,
    },
  })

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: nextPage == "left" ? window.innerWidth : -window.innerWidth, transition: { duration: 0.4 } }}
    >
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ProjectsContent/>
        </ColorModeProvider>
      </ChakraProvider>
    </motion.div>
  )
}

export default Index