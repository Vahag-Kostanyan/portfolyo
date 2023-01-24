import React from 'react'
import Home from "../pages/home/Index";
import Skils from "../pages/skils/Index";
import Projects from "../pages/projects/Index";
import Contacts from "../pages/contacts/Index";
import NoteFound from '../components/NoteFound';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import { ChakraProvider, ColorModeProvider, CSSReset, Flex, theme } from '@chakra-ui/react';
import { useState } from 'react';

const AnimatedRoutes = () => {
    const location = useLocation();
    const [nextPage, setNextPage] = useState("right");

    return (
        <Flex
            flexDirection="column"
        >
            <ChakraProvider theme={theme}>
                <ColorModeProvider>
                    <CSSReset />
                    <NavLink setNextPage={setNextPage} />
                </ColorModeProvider>
            </ChakraProvider>

            <AnimatePresence>

                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home nextPage={nextPage} />} />
                    <Route path='/skils' element={<Skils nextPage={nextPage} />} />
                    <Route path='/projects' element={<Projects nextPage={nextPage} />} />
                    <Route path='/contacts' element={<Contacts nextPage={nextPage} />} />
                    <Route path='*' element={<NoteFound />} />
                </Routes>
            </AnimatePresence>
        </Flex>

    )
}

export default AnimatedRoutes