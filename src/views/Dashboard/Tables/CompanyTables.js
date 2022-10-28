// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import { companyTableData, dashboardTableData } from "variables/general";
import CompanyTitle from "./components/CompanyTitle";

export default function CompanyTables(){
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <CompanyTitle
        title={"Company Table"}
        captions={["Company Name", "Contact Person", "Email", "Mobile No", "Company Address","View More" ]}
        data={companyTableData}
      />
    </Flex>
  );
}