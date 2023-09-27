import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { getUserData, submitForm, updateform } from '../Component/apiCalls/api';
import axios from 'axios';

export const FormPage = () => {
  const navigate = useNavigate()  // for navigate 
  const [user, setUser] = useState(false) // maintaining is user exixt or not 
  const [id, setId] = useState('')
  const { userName } = useParams();

  const [formData, setFormData] = useState({  // form data 
    phNo: '',
    email: '',
    name: '',
    dob: '',
  });

  const gotoResult = () => {
    navigate(`/result`)

  }
// this api call is for checking if username is already registered or not 
  useEffect(() => {
    (async () => {
      try {
        await axios.post(`https://hanobi-assign-backend.onrender.com/userform`, { userName }, {
          headers: {
            "Content-Type": "application/json"
          }
        }).
          then(({ data }) => {
            const user = data.user;
            if (user !== null) {
              setUser(true)  // if user is already registered
              setId(user._id)
              setFormData({
                phNo: user.phNo,
                email: user.email,
                name: user.name,
                dob: "",
              })} else {
              setFormData({
                phNo: '',
                email: '',
                name: '',
                dob: '',
              })
            }
          })
      } catch (error) {
        console.log(error)
      }})()

  }, [userName])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user) {
      updateform(userName, formData, gotoResult, id)//if user is already registered then  this update api call
    } else {
      submitForm(userName, formData, gotoResult); // if user is new this api call
    }
  };



  return (
    <Box id="formPage_container">
      {user && <Text id="formPage_heading" >user
        <span style={{ color: "blue", textDecoration: "underline" }}> {userName}</span>
        already exist update your form</Text>}

      <form onSubmit={handleSubmit}>
        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            name="phNo"
            placeholder="Phone Number"
            value={formData.phNo}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <Button mt={4} type='submit' colorScheme="blue" >
          Submit
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button as={Link} to={'/'} mt={4} colorScheme="gray" >
          Cancel
        </Button>
      </form>
    </Box>
  );
};
