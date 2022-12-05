import React from 'react'
import { extendTheme, ChakraProvider, ColorModeProvider, CSSReset, theme, useColorMode, Flex } from '@chakra-ui/react'

import NavLink from "../../components/NavLink"
import HomeContent from './HomeContent'

function Index() {

  return (
    <ChakraProvider theme={theme}>
        <ColorModeProvider>
            <CSSReset/>
            <NavLink/>
            <HomeContent/>
        </ColorModeProvider>
    </ChakraProvider>
  )
}

export default Index