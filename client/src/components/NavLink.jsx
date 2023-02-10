import { Box, Button, Flex, LinkBox, IconButton, useColorMode, Menu, MenuList, MenuItem, MenuButton, Image, useMediaQuery, useDisclosure } from '@chakra-ui/react'
import { SunIcon, Icon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import { BsFillMoonFill } from "react-icons/bs";
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import i18next from 'i18next';
import UkFlag from "../imags/ukFlag.png"
import ArmeniaFlag from "../imags/armeniaFlag.png"
import { useEffect } from 'react';

const NavLink = ({ setNextPage }) => {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  const [BugerValue, setBurgerValue] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()


  const location = useLocation()
  let navigate = useNavigate();
  const language = i18next.language

  const changeBurgerValue = () => {
    setBurgerValue(!BugerValue);
  }
  const LanguagesChangeAm = () => {
    i18next.changeLanguage("am");
  }
  const LanguagesChangeEn = () => {
    i18next.changeLanguage("en");
  }

  function pageNavigate(e) {
    e.preventDefault();
    const arr = ["/", "/Skils", "/Projects", "/Contacts"];
    let current, next;

    let nextRoute = "";
    if (e.target.innerHTML === "Home") {
      nextRoute = "/";
    } else {
      nextRoute = "/" + e.target.innerHTML;
    }

    arr.forEach((item, key) => {
      if (item == nextRoute) {
        next = key;
      }
      if (item == location.pathname) {
        current = key;
      }
    });

    if (next > current) {
      setNextPage("right")
      setTimeout(() => {
        navigate(nextRoute)
      }, 5)

    } else if (next < current) {
      setNextPage("left")
      setTimeout(() => {
        navigate(nextRoute);
      }, 2)
    }

  }

  useEffect(() => {
    if (!isLargerThan800) {
      changeBurgerValue();
    }
  }, [isLargerThan800])

  const color = "teal.500";

  return (
    <Flex key={1}>
      <Flex
        display={!isLargerThan500 ? "none" : "flex"}
        flexDirection={!isLargerThan800 && BugerValue ? "column" : "row"}
        gap={!isLargerThan800 && BugerValue ? "10px" : "0"}

        width="100vw" height="auto" alignItems="center" justifyContent="space-between" fontSize="18px" padding="20px 90px" boxShadow="rgb(100 100 111 / 10%) 0px 7px 29px 0px;">
        <Flex
          justifyContent="left"
          alignItems={!isLargerThan800 && BugerValue ? "left" : "center"}
          width="100%"
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

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Select language
              </MenuButton>
              <MenuList zIndex={2}>
                <MenuItem minH='20px' onClick={LanguagesChangeEn}>
                  <Image
                    boxSize='1.5rem'
                    src={UkFlag}
                    mr='12px'
                  />
                  <span style={{ opacity: language === "en" ? 0.5 : 1 }}>English</span>
                </MenuItem>
                <MenuItem minH='20px' onClick={LanguagesChangeAm}>
                  <Image
                    boxSize='1.5rem'
                    src={ArmeniaFlag}
                    alt='Simon the pensive'
                    mr='12px'
                  />
                  <span style={{ opacity: language === "am" ? 0.5 : 1 }}>Armenian</span>
                </MenuItem>
              </MenuList>
            </Menu>

          </Flex>
        </Flex>
        <Box
          className='NavbarMenues' display={isLargerThan800 || BugerValue ? "flex" : "none"}
          alignItems={!isLargerThan800 && BugerValue ? "right" : "center"}
          justifyContent={!isLargerThan800 && BugerValue ? "flex-start" : "flex-end"}
          width="100%"
          gap={8} fontSize="18px">

          <LinkBox
            as='article'
            color={location.pathname === "/" ? color : ""}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} >Home</Link>
          </LinkBox>

          <LinkBox
            as='article'
            color={location.pathname === "/Skils" ? color : ""}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate}>Skils</Link>
          </LinkBox>


          <LinkBox
            as='article'
            color={location.pathname === "/Projects" ? color : ""}

            _hover={{
              color:"teal.500",
            }}
          >
            <Link onClick={pageNavigate} >Projects</Link>
          </LinkBox>

          <LinkBox
            color={location.pathname === "/Contacts" ? color : ""}
            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} >Contacts</Link>
          </LinkBox>

        </Box>
        <Flex position="absolute" right={20} display={isLargerThan800 ? "none" : "flex"}>
          <Menu>
            <MenuButton
              as={IconButton}
              onClick={changeBurgerValue}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
          </Menu>
        </Flex>


      </Flex>

      <Flex
        display={!isLargerThan500 ? "flex" : "none"}
        width="100vw" height="auto" alignItems="center" justifyContent="space-between" fontSize="18px" padding="20px" boxShadow="rgb(100 100 111 / 10%) 0px 7px 29px 0px;">

        <Flex right={20}>
          <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                />
                <MenuList
                  marginLeft="-15px"
                  padding="30px 15px"
                  width="95vw"
                  display="flex"
                  flexDirection="column"
                  gap="20px"
                  >
                    <Flex
                      flexWrap="wrap"
                      justifyContent="left"
                      alignItems={!isLargerThan500 ? "left" : "center"}
                      width="100%"
                      gap="30px"
                      padding="0 25px"
                    >

                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        gap="10px"
                      >

                        <Menu >
                          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Select language
                          </MenuButton>
                          <MenuList zIndex={2}>
                            <MenuItem minH='20px' onClick={LanguagesChangeEn}>
                              <Image
                                boxSize='1.5rem'
                                src={UkFlag}
                                mr='12px'
                              />
                              <span style={{ opacity: language === "en" ? 0.5 : 1 }}>English</span>
                            </MenuItem>
                            <MenuItem minH='20px' onClick={LanguagesChangeAm}>
                              <Image
                                boxSize='1.5rem'
                                src={ArmeniaFlag}
                                alt='Simon the pensive'
                                mr='12px'
                              />
                              <span style={{ opacity: language === "am" ? 0.5 : 1 }}>Armenian</span>
                            </MenuItem>
                          </MenuList>
                        </Menu>

                      </Flex>
                      <IconButton onClick={toggleColorMode} >
                        {colorMode === "light" ? (
                          <Icon as={BsFillMoonFill} />
                        ) : (
                          <Icon as={SunIcon} />
                        )}
                      </IconButton>
                    </Flex>
                    <Flex>
                      <Flex
                        flexDirection="column"
                        padding="0 20px"
                        width="100%"
                        gap={8} fontSize="18px">


                        <MenuItem
                          as='article'

                          color={location.pathname === "/" ? color : ""}

                          _hover={{
                            color: "teal.500",
                          }}
                        >
                          <Link onClick={pageNavigate} >Home</Link>
                        </MenuItem>

                        <MenuItem
                          as='article'
                          color={location.pathname === "/Skils" ? color : ""}

                          _hover={{
                            color: "teal.500",
                          }}
                        >
                          <Link onClick={pageNavigate}>Skils</Link>
                        </MenuItem>


                        <MenuItem
                          as='article'
                          color={location.pathname === "/Projects" ? color : ""}

                          _hover={{
                            color: "teal.500",
                          }}
                        >
                          <Link onClick={pageNavigate} >Projects</Link>
                        </MenuItem>

                        <MenuItem
                          color={location.pathname === "/Contacts" ? color : ""}
                          _hover={{
                            color: "teal.500",
                          }}
                        >
                          <Link onClick={pageNavigate} >Contacts</Link>
                        </MenuItem>

                      </Flex>
                    </Flex>

                </MenuList>
          </Menu>

        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavLink
