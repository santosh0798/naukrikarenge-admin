// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";


import firestore from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { useState } from "react";

function AddJobPost() {

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");



  const [des, setDes] = useState("");
  const [exptype, setExpType] = useState("");
  const [position, setPosition] = useState("");
  const [vacancy, setVacancy] = useState(1);
  const [qualification, setQualification] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [title, setTitle] = useState("");

  const history = useHistory();


  const submitHandler = async () => {



    const firestoreRef = await firestore.collection('JobPost');

    const queryRef = await firestoreRef
      .add({
        description: des,
        experienceType: exptype,
        position: position,
        vacancy: vacancy,
        qualification: qualification,
        otherDetails: otherDetails,
        location: location,
        salary: salary,
        title: title,
        company: JSON.parse(localStorage.getItem("userId")),
        createdAt: new Date()
      }).then((res) => {

        toast.success("Job Post added successfully!");
        console.log(res);

      }).catch((err) => {
        console.log(err)
      });



  }




  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='845px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>




          <FormControl>


            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Title
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Title'
              mb='24px'
              size='lg'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />


            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Job Description
            </FormLabel>
            <Textarea
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              placeholder='Enter Job Description'
              mb='24px'
              size='lg'
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Experience Type
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              placeholder='Select Experience Type'
              value={exptype}
              onChange={(e) => {
                setExpType(e.target.value);
              }}
            >
              <option value='0-2 Year'>0-2 Year</option>
              <option value='2-5 Year'>2-5 Year</option>
              <option value='5+ Year'>5+ Year</option>
            </Select>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Opening Position
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Opening Position'
              mb='24px'
              size='lg'
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />



            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Location
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Location Of Job'
              mb='24px'
              size='lg'
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Salary
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Salary Of Job'
              mb='24px'
              size='lg'
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
              }}
            />

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Number of Vacancy
            </FormLabel>
            <Input
              defaultValue={1} min={1} max={1000}
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              type="number"
              size='lg'
              value={vacancy}
              onChange={(e) => {
                setVacancy(e.target.value);
              }}
            >

            </Input>

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Qualification Required
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              value={qualification}
              onChange={(e) => {
                setQualification(e.target.value);
              }}
              placeholder='Select Qualification'>
              <option value='10th'>10th</option>
              <option value='12th'>12th</option>
              <option value='ITI'>ITI</option>
              <option value='Diploma'>Diploma</option>
              <option value='Under Graduate'>Under Graduate</option>
              <option value='Post Graduate'>Post Graduate</option>
            </Select>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Other Details
            </FormLabel>
            <Textarea
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              placeholder='Enter Job Description'
              mb='24px'
              size='lg'
              value={otherDetails}
              onChange={(e) => {
                setOtherDetails(e.target.value);
              }}
            />
            <Button
              type='submit'
              bg='teal.300'
              fontSize='15px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={submitHandler}
            >
              Add Post
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddJobPost;
