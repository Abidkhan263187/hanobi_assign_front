import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box backgroundColor={'black'} color={'white'} p={'10px'} >
       <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
       <Link to='/form'>Form</Link>&nbsp;&nbsp;&nbsp;&nbsp;
       <Link to='/result'>Result</Link>
    </Box>
  )
}
