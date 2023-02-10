import React, { useMemo } from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import react from "../../imags/react.png"
import chakraUI from "../../imags/chakraui.png"
import redux from "../../imags/redux.png"
import git from "../../imags/git.png"
import bootstrap from "../../imags/bootstrap.png"


const slides = [
  {
    image: react
  },
  {
    image: chakraUI
  },
  {
    image: redux
  },
  {
    image: git
  },
  {
    image: bootstrap
  }
]

const ProjectsContent = () => {

  return (
    <Flex
      // gap="50px"
      height="92vh"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    // marginTop="100px"
    >

    <Flex
        width="80%"
    >
<Carousel
        height="auto"
        style={{ "margin-left": "10%" }}

      >
        {slides.map((slide) => {
          return <Image src={slide.image} height="500px" width="30%" />;
        })}
      </Carousel>
    </Flex>
      
    </Flex>
  )
}

export default ProjectsContent
