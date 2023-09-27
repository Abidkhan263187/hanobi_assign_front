import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { getUserData } from '../Component/apiCalls/api'
import { useNavigate } from 'react-router-dom'
import '../App.css'


export const HomePage = () => {

  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const gotoForm = () => { navigate(`/form/${userName}`) }

  const handleSubmit = () => { getUserData(userName, gotoForm) } // after entering username  this function call

  return (
    <>
      <Heading id="home_heading">Home Page</Heading>
      <Box id="home_container">

        <FormControl>
          <FormLabel>UserName</FormLabel>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='enter username' />
        </FormControl>

        <Button mt={'20px'} onClick={handleSubmit}>submit</Button>
      </Box>
    </>
  )
}
