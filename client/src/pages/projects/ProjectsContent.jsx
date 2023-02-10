// import React, { useMemo } from 'react';
// import { Box, Flex, Heading, Image } from '@chakra-ui/react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import React from 'react'
// // import myPhoto from "../../imags/myPhoto.png"
// // import flag from "../../imags/armeniaFlag.png"
// const ProjectsContent = () => {

//   let settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Flex 
//     gap="50px"
//     height="90px"
//     flexWrap="wrap"
//     alignItems="center"
//     justifyContent="center"    
//     marginTop="100px"
//     >
//      <Slider  {...settings}>
//       <div>
//         <h3>lorem8002</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   </Flex>
//   )
// }

// export default ProjectsContent

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex } from '@chakra-ui/react';

export default class ProjectsContent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Flex
        // gap="50px"
        height="90vh"
        // flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        marginTop="100px"
      >      
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Flex>
    );
  }
}