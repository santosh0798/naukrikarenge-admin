// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";
import firestore from "../../../firebase/firebase";
import { useState, useEffect } from "react";

function Billing() {


  const [datas, setData] = useState([]);




  useEffect(() => {

    async function getData() {
      setData([]);
      const firestoreRef = await firestore.collection('transaction');

      const queryRef = await firestoreRef
        .get();



      const userData = queryRef.forEach(function (childSnapshot) {
        setData((companyData) => [...companyData, childSnapshot.data()]);
      });
    }


    getData();

  }, [])

  console.log(datas)



  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap='26px'>

            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"Total Earned"}
              description={"From Candidates"}
              amount={datas?.reduce((previousValue, currentValue) => {
                return (
                  previousValue + parseInt(currentValue.amount)
                )
              }, 0)}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"Total Earned"}
              description={"From Companies"}
              amount={datas?.reduce((previousValue, currentValue) => {
                return (
                  previousValue + parseInt(currentValue.amount)
                )
              }, 0)}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"This Month Earned"}
              description={"From Candidates"}
              amount={datas?.reduce((previousValue, currentValue) => {
                if ((new Date(currentValue?.createdAt?.toDate().toDateString()).getMonth()) == (new Date().getMonth()) && (new Date(currentValue?.createdAt?.toDate().toDateString()).getFullYear()) == (new Date().getFullYear())) {
                  return (
                    previousValue + parseInt(currentValue.amount)
                  )
                }
                else {
                  return (
                    previousValue
                  )
                }
              }, 0)}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"This Month Earned"}
              description={"From Companies"}
              amount={datas?.reduce((previousValue, currentValue) => {
                if ((new Date(currentValue?.createdAt?.toDate().toDateString()).getMonth()) == (new Date().getMonth()) && (new Date(currentValue?.createdAt?.toDate().toDateString()).getFullYear()) == (new Date().getFullYear())) {
                  return (
                    previousValue + parseInt(currentValue.amount)
                  )
                }
                else {
                  return (
                    previousValue
                  )
                }
              }, 0)}
            />
          </Grid>

        </Box>
        <Transactions
          title={"Recent Transactions"}
          newestTransactions={newestTransactions}
          item={datas}
        />
      </Grid>

    </Flex>
  );
}

export default Billing;
