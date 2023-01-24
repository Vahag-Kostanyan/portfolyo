import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const SkilsSkil = () => {
    return (
        <Flex
      // minHeight="90vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflowY="scroll"
    >

      <Flex
        // maxHeight="90vh"
        gap="50px"
        // overflowY="scroll"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          marginTop="10vh"
          flex={3}
          alignItems="center"
          justifyContent="center"
          justify="center"
          fontSize="24px"
        >
          <Heading as="h1" >
            MY SKILLS

          </Heading>
        </Flex>

        <Flex
          fontSize="10px"
          justifyContent="center"
          alignItems="center"
          gap={100}
          flexWrap="wrap"
          padding="0 200px"
          flex={9}
        >
          <SkilsSkil2 value={60} img={phpIcon} />

          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} img={phpIcon} />
          <SkilsSkil2 value={60} />
          <SkilsSkil2 value={60} />


        </Flex>
      </Flex>

    </Flex> 
    )
}

export default SkilsSkil