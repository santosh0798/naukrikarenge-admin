// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import firestore from "../../../../firebase/firebase";
import React, { useEffect, useState } from "react";

const Authors = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");




  const [datas, setData] = useState([]);




  useEffect(() => {

    async function getData() {
      setData([]);


      if (JSON.parse(localStorage.getItem("user")).role == "admin") {

        const firestoreRef = await firestore.collection('candidates');

        const queryRef = await firestoreRef
          .get();



        const userData = queryRef.forEach(function (childSnapshot) {
          setData((companyData) => [...companyData, childSnapshot.data()]);
        });
      }
      else {

        console.log(JSON.parse(localStorage.getItem("userId")))

        const firestoreRef = await firestore.collection('appliedJob');

        const queryRef = await firestoreRef
          .where("company", "==", JSON.parse(localStorage.getItem("userId")))
          .get();

        console.log(JSON.parse(localStorage.getItem("userId")))


        const userData = queryRef.forEach(async function (childSnapshot) {
          console.log(childSnapshot)

          const firestoreRef2 = await firestore.collection('candidates');

          const queryRef2 = await firestoreRef2
            .doc(childSnapshot.data().userid)
            .get();

          let xyz = queryRef2.data();
          xyz.id = childSnapshot.data().userid;

          setData((companyData) => [...companyData, xyz]);
        });
      }
    }

    getData();

  }, [])

  console.log(datas)




  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {datas.map((row) => {
              return (
                <TablesTableRow
                  key={`${row.email}-${row.name}`}
                  id={row.id}
                  name={row.name}
                  email={row.email}
                  mobile={row.mobile}
                  education={row.explevel}
                  jobType={row.explevel}
                  status={row.status}
                  files={row.cv}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Authors;
