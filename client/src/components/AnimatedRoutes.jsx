import React from 'react'
import Home from "../pages/home/Index";
import Skills from "../pages/Skills/Index";
import Projects from "../pages/projects/Index";
import Contacts from "../pages/contacts/Index";
import NoteFound from '../components/NoteFound';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import { ChakraProvider, ColorModeProvider, CSSReset, Flex, extendTheme, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';

const AnimatedRoutes = () => {
    const location = useLocation();
    const [nextPage, setNextPage] = useState("right");


    const theme = extendTheme({
        fonts: {
          heading: `Roboto`,
          body: `Roboto`,
        },
      })

    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

    if (isLargerThan650) {
        return (
            <Flex
                flexDirection="column"
            >

                <ChakraProvider theme={theme}>
                    <ColorModeProvider>
                        <CSSReset />
                        <Flex display={location.pathname == "/" || location.pathname == "/Skills" || location.pathname == "/Projects" || location.pathname == "/Contacts" ? "flex" : "none"}>
                            <NavLink setNextPage={setNextPage} />
                        </Flex>
                    </ColorModeProvider>
                </ChakraProvider>

                <AnimatePresence>

                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home nextPage={nextPage} />} />
                        <Route path='/Skills' element={<Skills nextPage={nextPage} />} />
                        <Route path='/Projects' element={<Projects nextPage={nextPage} />} />
                        <Route path='/Contacts' element={<Contacts nextPage={nextPage} />} />
                        <Route path='*' element={<NoteFound />} />
                    </Routes>
                </AnimatePresence>
            </Flex>

        )
    } else {

        return (
            <ChakraProvider theme={theme}>
                <ColorModeProvider>
                    <CSSReset />
                    <NavLink setNextPage={setNextPage} />

                    <Flex
                        flexDirection="column"
                        height="90vh"
                        overflow="hidden"
                        overflowY="scroll"
                        padding="0 0 90px 0"
                    >
                        <Home nextPage={nextPage} />
                        <Skills nextPage={nextPage} />
                        <Projects nextPage={nextPage} />
                        <Contacts nextPage={nextPage} />
                    </Flex>
                </ColorModeProvider>
            </ChakraProvider>
        )
    }


}

export default AnimatedRoutes