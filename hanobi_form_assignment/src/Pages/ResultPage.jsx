import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const ResultPage = () => {
  return (
    <Box w={'50%'} m={' 3% auto'}>

<Heading color={"green"} size={'md'}>congratulation form submitted successfully</Heading>
  <Button as={Link} to='/' mt={'10px'}>Back to Home</Button>
    </Box>
  )
}
