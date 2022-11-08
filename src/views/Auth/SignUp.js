// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text, Textarea,
  useColorModeValue
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";



import firestore, { firestorage } from "../../firebase/firebase";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { useState } from "react";
import { useEffect } from "react";
import queryString from 'query-string'


function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [web, setWeb] = useState("");
  const [image, setImage] = useState("");
  const [des, setDes] = useState("");

  const history = useHistory();


  const submitLogin = async () => {



    const firestoreRef = await firestore.collection('Company');

    const queryRef = await firestoreRef
      .add({
        email: email,
        password: password,
        company: company,
        name: name,
        role: "company",
        address: address,
        img: image,
        web: web,
        mobile: mobile,
        des: des,
        createdAt: new Date()
      }).then((res) => {

        toast("Signup successfully");
        history.push("/auth/signin")

      }).catch((err) => {
        console.log(err)
      });



  }


  const { search } = useLocation();
  const values = queryString.parse(search);

  useEffect(() => {

    console.log(values.editable)

    async function getData() {
      const firestoreRef = await firestore.collection('Company');

      const queryRef = await firestoreRef
        .doc(JSON.parse(localStorage.getItem("userId")))
        .get();



      setEmail(queryRef?.data().email);
      setCompany(queryRef?.data().company);
      setName(queryRef?.data().name);
      setAddress(queryRef?.data().address);
      setMobile(queryRef?.data().mobile);
      setWeb(queryRef?.data().web);
      setDes(queryRef?.data().des)

    }




    if (values.editable == "true") {
      getData();

    }

  }, [search])






  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome! To Naukrikarenge.com
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            {values.editable == "true" ? "Edit Company Profile" : "Company Register"}
          </Text>

          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Company Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Company Name'
              mb='24px'
              size='lg'
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Company logo
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='file'
              placeholder='Your mobile number'
              mb='24px'
              size='lg'
              onChange={(e) => {
                firestorage.ref(`/company/${e.target?.files[0].name}`)
                  .put(e.target?.files[0])
                  .then(({ ref }) => {
                    ref.getDownloadURL().then((url) => {
                      setImage(url);
                      toast.success("Pic uploaded");
                      console.log(url)

                    });
                  });
              }}
            />

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Person Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your full name'
              mb='24px'
              size='lg'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Your email address'
              mb='24px'
              size='lg'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Mobile
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='number'
              placeholder='Your mobile number'
              mb='24px'
              size='lg'
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Website
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your Website'
              mb='24px'
              size='lg'
              value={web}
              onChange={(e) => {
                setWeb(e.target.value);
              }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Enter Password'
              mb='24px'
              size='lg'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Address
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Company Address'
              mb='24px'
              size='lg'
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              About Company
            </FormLabel>
            <Textarea
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='About Company'
              mb='24px'
              size='lg'
              aria-multiline
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />


            {values.editable == "true" ?
              <Button
                type='submit'
                bg='teal.300'
                fontSize='10px'
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

                onClick={() => {


                  let x = image.toString() && image.toString() != "" ? {
                    email: email,
                    name: name,
                    mobile: mobile,
                    company: company,
                    address: address,
                    web: web ? web : "",
                    des: des ? des : "",
                    img: image.toString()

                  } : {
                    email: email,
                    name: name,
                    mobile: mobile,
                    company: company,
                    address: address,
                    web: web ? web : "",
                    des: des ? des : ""
                  }
                  console.log(x)


                  firestore.collection("Company")
                    .doc(JSON.parse(localStorage.getItem("userId")))
                    .update(x);

                  toast.success("Profile updates successfully")

                }}
              >
                Update
              </Button>
              : <Button
                type='submit'
                bg='teal.300'
                fontSize='10px'
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

                onClick={submitLogin}
              >
                SIGN UP
              </Button>}
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
              <Link
                onClick={() => {
                  history.push("/auth/signin");

                }}
                color={titleColor}
                as='span'
                ms='5px'
                href='#'
                fontWeight='bold'>
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
