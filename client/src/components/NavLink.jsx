import { Box, Button, Flex, LinkBox, IconButton, useColorMode, Menu, MenuList, MenuItem, MenuButton, Image, useMediaQuery, useDisclosure } from '@chakra-ui/react'
import { SunIcon, MoonIcon, Icon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import i18next from 'i18next';
import UkFlag from "../imags/ukFlag.png"
import ArmeniaFlag from "../imags/armeniaFlag.png"
import RussiaFlag from "../imags/russiaFlag.png"
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NavLink = ({ setNextPage }) => {

  const { t } = useTranslation();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [BugerValue, setBurgerValue] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()


  const location = useLocation();
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
  const LanguagesChangeRu = () => {
    i18next.changeLanguage("ru");
  }

  function pageNavigate(e) {
    e.preventDefault();
    const arr = ["/", "/Skills", "/Projects", "/Contacts"];
    let current, next;

    let nextRoute = "/" + e.target.className;

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
        display={!isLargerThan650 ? "none" : "flex"}
        flexDirection={!isLargerThan800 && BugerValue ? "column" : "row"}
        gap={!isLargerThan800 && BugerValue ? "10px" : "0"}

        width="100vw" height="auto" alignItems="center" justifyContent="space-between" fontSize="18px" padding={isLargerThan650 ? "20px 50px" : "20px 30px"} boxShadow="rgb(100 100 111 / 20%) 0px 7px 29px 0px;">
        <Flex
          justifyContent="left"
          alignItems={!isLargerThan800 && BugerValue ? "left" : "center"}
          width="100%"
          gap="30px"
        >
          <IconButton onClick={toggleColorMode} >
            {colorMode === "light" ? (
              <Icon as={MoonIcon} />
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
                {t('selectLanguage')}
              </MenuButton>
              <MenuList zIndex={3}>
                <MenuItem minH='20px' onClick={LanguagesChangeEn}>
                  <Image
                    boxSize='1.5rem'
                    src={UkFlag}
                    mr='12px'
                  />
                  <span style={{ opacity: language === "en" ? 0.5 : 1 }}>{t('english')}</span>
                </MenuItem>
                <MenuItem minH='20px' onClick={LanguagesChangeRu}>
                  <Image
                    boxSize='1.4rem'
                    height="1rem"
                    src={RussiaFlag}
                    alt='Simon the pensive'
                    mr='12px'
                  />
                  <span style={{ opacity: language === "ru" ? 0.5 : 1 }}>{t('russian')}</span>
                </MenuItem>
                <MenuItem minH='20px' onClick={LanguagesChangeAm}>
                  <Image
                    boxSize='1.5rem'
                    src={ArmeniaFlag}
                    alt='Simon the pensive'
                    mr='12px'
                  />
                  <span style={{ opacity: language === "am" ? 0.5 : 1 }}>{t('armenian')}</span>
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
            <Link onClick={pageNavigate} className='' >{t('home')}</Link>
          </LinkBox>

          <LinkBox
            as='article'
            color={location.pathname === "/Skills" ? color : ""}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} className='Skills' >{t('skills')}</Link>
          </LinkBox>


          <LinkBox
            as='article'
            color={location.pathname === "/Projects" ? color : ""}

            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} className='Projects' >{t('projects')}</Link>
          </LinkBox>

          <LinkBox
            color={location.pathname === "/Contacts" ? color : ""}
            _hover={{
              color: "teal.500",
            }}
          >
            <Link onClick={pageNavigate} className='Contacts' >{t('contacts')}</Link>
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
        display={!isLargerThan650 ? "flex" : "none"}
        width="100vw" height="auto" alignItems="center" justifyContent="space-between" fontSize="18px" padding="20px 30px" boxShadow="rgb(100 100 111 / 20%) 0px 7px 29px 0px;">

        <IconButton onClick={toggleColorMode} >
          {colorMode === "light" ? (
            <Icon as={MoonIcon} />
          ) : (
            <Icon as={SunIcon} />
          )}
        </IconButton>

        <Flex
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >

          <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {t('selectLanguage')}
            </MenuButton>
            <MenuList zIndex={999}>
              <MenuItem minH='20px' onClick={LanguagesChangeEn}>
                <Image
                  boxSize='1.5rem'
                  src={UkFlag}
                  mr='12px'
                />
                <span style={{ opacity: language === "en" ? 0.5 : 1 }}>{t('english')}</span>
              </MenuItem>
              <MenuItem minH='20px' onClick={LanguagesChangeRu}>
                <Image
                  boxSize='1.4rem'
                  height="1rem"
                  src={RussiaFlag}
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span style={{ opacity: language === "ru" ? 0.5 : 1 }}>{t('russian')}</span>
              </MenuItem>
              <MenuItem minH='20px' onClick={LanguagesChangeAm}>
                <Image
                  boxSize='1.5rem'
                  src={ArmeniaFlag}
                  alt='Simon the pensive'
                  mr='12px'
                />
                <span style={{ opacity: language === "am" ? 0.5 : 1 }}>{t('armenian')}</span>
              </MenuItem>

            </MenuList>
          </Menu>

        </Flex>
      </Flex>
    </Flex>
  )
}

export default NavLink
