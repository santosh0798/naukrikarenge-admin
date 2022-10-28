// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

export default function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Candidate Table"}
        captions={["Candidate Name", "Email", "Mobile No", "Education", "Job Type", "Placement Status", 'View more']}
        data={tablesTableData}
      />
    </Flex>
  );
}

