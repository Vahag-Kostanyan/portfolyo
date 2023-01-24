import { Flex, Heading, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const SkilsSkil2 = ({value, img}) => {



  return (
    <Flex
      width="170px"
      height="170px"
      padding="10px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="10px"
    >
      <CircularProgressbarWithChildren  strokeWidth={5} value={value}

        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          // rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          // strokeLinecap: 'butt',

          // Text size
          textSize: '16px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          
          // Colors
          pathColor: `#d5b253`,
          textColor: '#f88',
          // trailColor:  '#d6d6d6',
          trailColor:  '#c4cad1',

          backgroundColor: "#252525",
        })}
      >
        <img style={{ width: 80, marginTop: -5, marginBottom: 8 }}  src={img} alt="doge" />
        <div style={{ fontSize: 18, marginTop: -5 }}>
          <strong>{value} %</strong>
        </div>
      </CircularProgressbarWithChildren>
      <Heading as="p" fontSize="25px">PHP</Heading>

    </Flex>
  )
}

export default SkilsSkil2