import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'
import NavLink from "../../components/NavLink"
import AbouteMeContent from './AbouteMeContent'

function Index() {

  return (
    <ChakraProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <NavLink/>
            <AbouteMeContent/>
        </ColorModeProvider>
    </ChakraProvider>
  )
}

export default Index