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

function Billing() {
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
              amount={2000}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"Total Earned"}
              description={"From Companies"}
              amount={4550}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"This Month Earned"}
              description={"From Candidates"}
              amount={2000}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
              title={"This Month Earned"}
              description={"From Companies"}
              amount={4550}
            />
          </Grid>

        </Box>
        <Transactions
          title={"Recent Transactions"}
          newestTransactions={newestTransactions}
        />
      </Grid>

    </Flex>
  );
}

export default Billing;
