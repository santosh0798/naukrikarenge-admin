// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  PersonIcon,
  HomeIcon,
  RocketIcon
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
import {
  companiesTableData,
  dashboardTableData
} from "variables/general";
import MiniStatistics from "./components/MiniStatistics";
import Projects from "./components/Projects";

import firestore from '../../../firebase/firebase';

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");



  const [candidate, setCandidate] = useState([]);
  const [companyCount, setCompanyCount] = useState(0);
  const [company, setCompany] = useState([]);
  const [candidateCount, setCandidateCount] = useState(0);
  const [resumeCount, setResumeCount] = useState(0);
  const [placedCount, setPlacedCount] = useState(0);



  useEffect(() => {

    async function getData() {


      setCandidate([]);


      if (JSON.parse(localStorage.getItem("user")).role != "company") {
        const firestoreRef = await firestore.collection('candidates');





        const queryRef = await firestoreRef.limit(10)
          .get()






        const userData = queryRef.forEach(function (childSnapshot) {
          setCandidate((companyData) => [...companyData, childSnapshot.data()]);
        });

      }
      else {
        const firestoreRef = await firestore.collection('appliedJob');





        const queryRef = await firestoreRef.where("company", "==", JSON.parse(localStorage.getItem("userId"))).limit(10)
          .get()









        const userData = queryRef.forEach(async function (childSnapshot) {

          const firestoreRef2 = await firestore.collection('candidates');





          const queryRef2 = await firestoreRef2.doc(childSnapshot.data().userid)
            .get()

          if (queryRef2.data()) {

            setCandidate((companyData) => [...companyData, queryRef2.data()]);
          }
        });
      }



    }



    async function getData3() {



      if (JSON.parse(localStorage.getItem("user")).role != "company") {


        const firestoreRef = await firestore.collection('candidates');



        const queryRef = await firestoreRef.get();




        let x = 0;

        const userData = queryRef.forEach(function (childSnapshot) {
          x += 1;
          setCandidateCount(x);
        });

      }

      else {
        const firestoreRef = await firestore.collection('appliedJob');



        const queryRef = await firestoreRef.where("company", "==", JSON.parse(localStorage.getItem("userId")))
          .get()




        let x = 0;

        const userData = queryRef.forEach(function (childSnapshot) {
          x += 1;
          setCandidateCount(x);
        });
      }


    }






    async function getData2() {


      setCompany([]);


      const firestoreRef = await firestore.collection('Company');






      const queryRef = await firestoreRef.limit(10)
        .get()




      const userData = queryRef.forEach(function (childSnapshot) {
        console.log(childSnapshot.data());
        setCompany((companyData) => [...companyData, childSnapshot.data()]);
      });


    }


    async function getData4() {





      const firestoreRef2 = await firestore.collection('Company');
      const candidateRef = await firestoreRef2.get();





      let y = 0;

      const userData4 = candidateRef.forEach(function (childSnapshot) {
        y++;
        setCompanyCount(y);
      });

    }


    async function getData5() {



      if (JSON.parse(localStorage.getItem("user")).role != "company") {


        const firestoreRef = await firestore.collection('candidates');



        const queryRef = await firestoreRef.where("cv", "!=", "").get();




        let x = 0;

        const userData = queryRef.forEach(function (childSnapshot) {
          x += 1;
          setResumeCount(x);
        });
      }


      else {
        const firestoreRef = await firestore.collection('appliedJob');



        const queryRef = await firestoreRef.where("company", "==", JSON.parse(localStorage.getItem("userId")))
          .get()




        let x = 0;

        const userData = queryRef.forEach(async function (childSnapshot) {

          const firestoreRef2 = await firestore.collection('candidates');





          const queryRef2 = await firestoreRef2.doc(childSnapshot.data().userid)
            .get()


          if (queryRef2.data().cv && queryRef2.data().cv != "") {
            x += 1;
            setResumeCount(x);
          }
        });
      }



    }



    async function getData6() {
      if (JSON.parse(localStorage.getItem("user")).role != "company") {


        const firestoreRef = await firestore.collection('candidates');



        const queryRef = await firestoreRef.where("status", "==", "true").get();




        let x = 0;

        const userData = queryRef.forEach(function (childSnapshot) {
          x += 1;
          setPlacedCount(x);
        });
      }


      else {
        const firestoreRef = await firestore.collection('appliedJob');



        const queryRef = await firestoreRef.where("company", "==", JSON.parse(localStorage.getItem("userId")))
          .get()




        let x = 0;

        const userData = queryRef.forEach(async function (childSnapshot) {

          const firestoreRef2 = await firestore.collection('candidates');





          const queryRef2 = await firestoreRef2.doc(childSnapshot.data().userid)
            .get()


          if (queryRef2.data().status || queryRef2.data().status == "true") {
            x += 1;
            setPlacedCount(x);
          }
        });
      }
    }


    getData();
    getData2();
    getData3();
    getData4();
    getData5();
    getData6();

  }, [])

  console.log(company, candidate)




  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Total Candidates"}
          amount={candidateCount}
          percentage={candidateCount}
          icon={<PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          to="/candidate-table"
        />
        {JSON.parse(localStorage.getItem("user")).role != "company" && <MiniStatistics
          title={"Total Company"}
          amount={companyCount}
          percentage={companyCount}
          icon={<HomeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />}
        <MiniStatistics
          title={"Total Resume Received"}
          amount={resumeCount}
          percentage={resumeCount}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Placed"}
          amount={placedCount}
          percentage={placedCount}
          icon={<RocketIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'
        mt='5'>
        <Projects
          title={"Recently Joined Candidates"}
          captions={["Candidate Name", "Experience Type", "Email", "Phone"]}
          data={candidate}
        />

        {JSON.parse(localStorage.getItem("user")).role != "company" && <Projects
          title={"Newly Added Companies"}
          captions={["Company Name", "Vacancy"]}
          data={company}
          isc={true}
        />}
      </Grid>
    </Flex>
  );
}
