// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import firestore from "../../../firebase/firebase";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Conversations from "./components/Conversations";
import Header from "./components/Header";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );






  const [datas, setData] = useState({});




  useEffect(() => {

    async function getData() {
      const firestoreRef = await firestore.collection('Company');

      const queryRef = await firestoreRef
        .doc(JSON.parse(localStorage.getItem("userId")))
        .get();



      setData(queryRef?.data());
    }


    getData();

  }, [])

  console.log(datas)
  

  return (
    <Flex direction='column'>
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={datas?.img}
        name={datas?.company}
        email={datas?.email}
        tabs={[
          {
            name: "OVERVIEW",
            icon: <FaCube w='100%' h='100%' />,
          },
          {
            name: "TEAMS",
            icon: <IoDocumentsSharp w='100%' h='100%' />,
          },
          {
            name: "EDIT PROFILE",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px'>
        <ProfileInformation
          title={"About Company"}
          description={
            datas?.des
          }
          name={datas?.name}
          mobile={datas?.mobile}
          location={datas?.address}
          website={datas?.web}
        />

        <PlatformSettings
          title={"Platform Settings"}
          subtitle1={"ACCOUNT"}
        />
      </Grid>
    </Flex>
  );
}

export default Profile;
