import { Box, Flex, Heading, keyframes, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import phpIcon from "../../imags/PHP-logo.svg.png";
import Skill from './Skill';
import php from "../../imags/PHP-logo.svg.png"
import laravel from "../../imags/laravel.png"
import MySQL from "../../imags/mysql.png"
import Jquery from "../../imags/jquery.png"
import html from "../../imags/html.png"
import css from "../../imags/css.png"
import JavaScript from "../../imags/javascript.png"
import react from "../../imags/react.png"
import chakraUI from "../../imags/chakraui.png"
import redux from "../../imags/redux.png"
import git from "../../imags/git.png"
import bootstrap from "../../imags/bootstrap.png"



const animation = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
`


const SkillsContent = () => {
  const [isLargerThan1500] = useMediaQuery('(min-width: 1500px)')
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)')
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')

  const homeTextAnimation = `${animation} 1 8s`

  const color = useColorModeValue('white', 'gray.500')

  return (
    <Flex
      flexDirection="column"
      overflowY={isLargerThan650 ? "auto" : ""}
      padding="20px 50px"
      height={isLargerThan650 ? "92vh" : "auto"}
      gap="30px"
      animation={homeTextAnimation}

    >
      <Flex
        flex={2}
        width="100%"
        justifyContent="center"
        alignItems="center"
      >

        <Heading as="h1" size="2xl" > MY Skills </Heading>

      </Flex>
      <Flex
        flex={10}
        padding={isLargerThan1500 ? "20px 100px" : "50px 0"}
        justifyContent="center"
        gap={isLargerThan580 ? "150px" : "70px"}

        flexWrap="wrap"
      >
        <Skill skil={php} skilName={"PHP"} />
        <Skill skil={laravel} skilName={"Laravel"} />
        <Skill skil={MySQL} skilName={"MySQL"} />
        <Skill skil={git} skilName={"Git"} />
        <Skill skil={html} skilName={"HTML 5"} />
        <Skill skil={css} skilName={"CSS 3"} />
        <Skill skil={bootstrap} skilName={"Bootstrap"} />
        <Skill skil={JavaScript} skilName={"JavaScript"} />
        <Skill skil={Jquery} skilName={"JQuery"} />
        <Skill skil={redux} skilName={"Redux"} />
        <Skill skil={react} skilName={"React JS"} />
        <Skill skil={chakraUI} skilName={"Chakra UI"} />
      </Flex>
    </Flex>
  )
}

export default SkillsContent