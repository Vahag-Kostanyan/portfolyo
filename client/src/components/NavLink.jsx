import { Box, Button, Flex, LinkBox, IconButton, useColorMode, Img, Select } from '@chakra-ui/react'
import { SunIcon, Icon } from "@chakra-ui/icons"
import { BsFillMoonFill } from "react-icons/bs";
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import i18next from 'i18next';

const NavLink = ({setNextPage}) => {

  const { colorMode, toggleColorMode } = useColorMode()

  const location = useLocation()
  let navigate = useNavigate();




  const language = i18next.language
  const LanguagesChange = (e) => {
    const value = e.target.value;

    if(value == "English"){
      i18next.changeLanguage("en")
    }else if(value == "Armenia"){
      i18next.changeLanguage("am")
    }
  }

  // navigate("/Skils")
  function pageNavigate(e) {
    e.preventDefault();
    const arr = ["/", "/Skils", "/Projects", "/Contacts"];
    let current, next;
    
    let nextRoute = "";
    if(e.target.innerHTML === "Home"){
      nextRoute = "/";
    }else{
      nextRoute = "/" + e.target.innerHTML;
    }

    arr.forEach((item, key) => {
        if(item == nextRoute){
          next = key;
        }
        if(item == location.pathname){
          current = key;
        }
    });

    if(next > current){
      setNextPage("right")
      setTimeout(() => {
        navigate(nextRoute)
      }, 5)

    }else if(next < current){
      setNextPage("left")
      setTimeout(() => {
        navigate(nextRoute)
      }, 2)
    }
  }

  const color = "teal.500";
  return (
    <Flex width="100vw" height="auto" alignItems="center" justifyContent="space-between" fontSize="18px" padding="20px 90px" boxShadow="rgb(100 100 111 / 20%) 0px 7px 29px 0px;">


      <Flex
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        <IconButton onClick={toggleColorMode} >
          {colorMode === "light" ? (
            <Icon as={BsFillMoonFill} />
          ) : (
            <Icon as={SunIcon} />
          )}
        </IconButton>

        <Flex
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <Select onChange={LanguagesChange} placeholder='Select language'>
            <option disabled = {language !== "en" ? false : true} >
              English
            </option>
            <option disabled = {language !== "am" ? false : true}>
              Armenia
            </option>
          </Select>
        </Flex>
      </Flex>
      <Box display="flex" gap={8} fontSize="18px">

          <LinkBox
            as='article'
            color={ location.pathname === "/" ? color : ""}
            
            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} >Home</Link> 
          </LinkBox>

          <LinkBox
            as='article'
            color={ location.pathname === "/Skils" ? color : ""}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate}>Skils</Link>
          </LinkBox>


          <LinkBox
            as='article'
            color={ location.pathname === "/Projects" ? color : ""}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} >Projects</Link>
          </LinkBox>

          <LinkBox
            color={ location.pathname === "/Contacts" ? color : ""}
            _hover={{
              color: { color },
            }}
          >
            <Link onClick={pageNavigate} >Contacts</Link>
          </LinkBox>

      </Box>

    </Flex>
  )
}

export default NavLink
