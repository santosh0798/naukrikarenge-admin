// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  PersonIcon,
  HomeIcon,
  RocketIcon
} from "components/Icons/Icons.js";
import React from "react";
import { companiesTableData, dashboardTableData, invoicesData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import Invoices from "../Billing/components/Invoices";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Total Candidates"}
          amount={"0"}
          percentage={1}
          icon={<PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          to="/candidate-table"
        />
        <MiniStatistics
          title={"Total Company"}
          amount={"0"}
          percentage={1}
          icon={<HomeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Resume Received"}
          amount={"0"}
          percentage={1}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Placed"}
          amount={"0"}
          percentage={1}
          icon={<RocketIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>

      <Grid
        pt={7}
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Active Users"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Recently Joined Candidates"}
          captions={["Candidate Name", "Experience Type", "Email", "Phone" ]}
          data={dashboardTableData}
        />
        <Projects
          title={"Newly Addedd Companies"}
          captions={["Company Name", "Opening Position" ]}
          data={companiesTableData}
        />
      </Grid>
    </Flex>
  );
}
