import { Button, Flex, Heading, keyframes, useMediaQuery } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import todo from "../../imags/todo.png";
import SASA from "../../imags/SASA.png";

import React, { useState } from 'react';
import MyCard from '../../components/MyCard';


const todoPage = "https://v-todo-list.netlify.app/";
const todoRepasitory = "https://github.com/Vahag-Kostanyan/todo-list";
const SASAPage = "https://search-and-sort-algorithms.netlify.app/";
const SASARepasitory = "https://github.com/Vahag-Kostanyan/search-and-sort-algorithms";

const animation = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
`


const ProjectsContent2 = () => {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [item, setItem] = useState(1);
    let carussel = document.querySelector(".carussel");


    const homeTextAnimation = `${animation} 1 8s`


    const nextProject = () => {
        let currentWidth = carussel.clientWidth;

        if (item == 2) {
            carussel.scrollLeft = 0;
            setItem(1)
        } else {
            carussel.scrollLeft = carussel.scrollLeft + currentWidth;
            setItem(2)
        }
    }

    const previousProject = () => {
        let currentWidth = carussel.clientWidth;
        if (item == 2) {
            carussel.scrollLeft = carussel.scrollLeft - currentWidth;
            setItem(1)
        } else {
            carussel.scrollLeft = currentWidth * 2;
            setItem(2)
        }
    }

    return (
        <Flex
            height={isLargerThan650 ? "92vh" : "auto"}
            alignItems="center"
            justifyContent="center"
            padding={isLargerThan650 ? "0 50px" : "30px 30px"}
            gap="30px"
            flexDirection="column"
            animation={homeTextAnimation}
        >
            <Flex
                flex={2}
                width="100%"
                justifyContent="center"
                alignItems="center"
                padding={isLargerThan650 ? "" : "0 0 30px 0"}
            >

                <Heading as="h1" size="2xl" > My Last Projects </Heading>

            </Flex>
            <Flex
                flex={10}
                overflow="hidden"
                gap="60px"
                alignItems="center"
                justifyContent="center"
                width={isLargerThan1000 ? "80%" : "100%"}
                padding="20p 10px"
                flexDir={isLargerThan650 ? "row" : "column"}

            >
                {isLargerThan650 ? (
                    <Button
                        borderRadius={100}
                        padding="23px 10px"
                        fontSize="29px"
                        _hover={{
                            color: 'teal.500',
                            borderColor: 'teal.500'
                        }}
                        onClick={previousProject}
                    >
                        <ArrowBackIcon />
                    </Button>
                ) : (
                    <></>
                )}

                <Flex
                    className='carussel'
                    position="relative"
                    overflow="hidden"
                    width="100%"
                    padding="0 10px"
                    gap="30px"
                    scrollBehavior="smooth"
                >
                    <MyCard image={todo} page={todoPage} repasitory={todoRepasitory} />
                    <MyCard image={SASA}  page={SASAPage} repasitory={SASARepasitory} />
                </Flex>

                {isLargerThan650 ? (
                    <Button
                        borderRadius={100}
                        padding="23px 10px"
                        fontSize="28px"
                        _hover={{
                            color: 'teal.500',
                            borderColor: 'teal.500'
                        }}
                        onClick={nextProject}
                    >
                        <ArrowForwardIcon />
                    </Button>
                ) : (
                    <Flex
                        gap="50px"
                    >

                        <Button
                            borderRadius={100}
                            padding="23px 10px"
                            fontSize="29px"
                            _hover={{
                                color: 'teal.500',
                                borderColor: 'teal.500'
                            }}
                            onClick={previousProject}
                        >
                            <ArrowBackIcon />
                        </Button>

                        <Button
                            borderRadius={100}
                            padding="23px 10px"
                            fontSize="28px"
                            _hover={{
                                color: 'teal.500',
                                borderColor: 'teal.500'
                            }}
                            onClick={nextProject}
                        >
                            <ArrowForwardIcon />
                        </Button>
                    </Flex>
                )}


            </Flex>
        </Flex>
    );
}

export default ProjectsContent2;
