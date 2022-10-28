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
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CompanyTableRow from "../../../../components/Tables/CompanyTableRow";

const CompanyTitle = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  const [datas, setData] = useState([]);




  useEffect(() => {

    async function getData() {
      setData([]);
      const firestoreRef = await firestore.collection('Company');

      const queryRef = await firestoreRef
        .where("role", "==", "company")
        .get();



      const userData = queryRef.forEach(function (childSnapshot) {
        setData((companyData) => [...companyData, childSnapshot.data()]);
      });
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
            {datas?.map((row) => {
              return (
                <CompanyTableRow
                  key={`${row.email}-${row.company}`}
                  companyName={row.company}
                  personName={row.name}
                  companyEmail={row.email}
                  mobile={row.mobile}
                  companyAddress={row.address}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default CompanyTitle;
