import React from 'react'
import Home from "../pages/home/Index";
import AboutMe from "../pages/aboutMe/Index"
import Skils from "../pages/skils/Index";
import Projects from "../pages/projects/Index";
import Contacts from "../pages/contacts/Index";
import NoteFound from '../components/NoteFound';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/aboutme' element={<AboutMe />} />
                <Route path='/skils' element={<Skils />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<NoteFound />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes