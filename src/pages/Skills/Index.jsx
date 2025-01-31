import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, useColorMode, Flex, useMediaQuery } from '@chakra-ui/react'
import SkillsContent from './SkillsContent'
import { motion } from 'framer-motion'
import i18next from 'i18next'

function Index({ nextPage }) {
  const language = i18next.language

  let theme = "";

  if( language == "am" ){
    theme = extendTheme({
      fonts: {
        heading: `Arial`,
        body: `Arial`,
      },
    })
  }else{
    theme = extendTheme({
      fonts: {
        heading: `Roboto`,
        body: `Roboto`,
      },
    })
  }

  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

  if (isLargerThan650) {
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
          <SkillsContent />
        </ColorModeProvider>
      </ChakraProvider>
      </motion.div>
    )
  }else{
      return  <SkillsContent />
  }

}

export default Index