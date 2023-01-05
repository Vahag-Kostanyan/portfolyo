import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const SkilsSkil2 = () => {

  const [value, setValue] = useState(60);

  return (
    <Flex
      width="200px"
      height="200px"
      padding="10px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="10px"
    >
      <Heading as="p" fontSize="25px">asd</Heading>
      {/* <CircularProgressbar value={value} text={`${value}%`}
      /> */}
      <CircularProgressbar  strokeWidth={6} value={value} text={`${value}%`} 
       styles={buildStyles({
    
        // Text size
        textSize: '16px',
    
        // How long animation takes to go from one percentage to another, in seconds

        // strokeLinecap: "butt",
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
    
        // Colors
        pathColor: `rgba(62, 152, 199,0.9)`,
        textColor: '#f88',
        trailColor: '#d6d6d6',
        backgroundColor: '#3e98c7',
      })}
      />

      {/* <ChangingProgressProvider values={[0, 20, 40, 60, 80]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
            })}
          />
        )}
      </ChangingProgressProvider> */}
    </Flex>
  )
}

export default SkilsSkil2