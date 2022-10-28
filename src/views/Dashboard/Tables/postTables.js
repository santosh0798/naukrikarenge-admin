// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import PostTitle from "./components/post";

export default function PostTables() {
    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
            <PostTitle
                title={"Job Post Table"}
                captions={["Description", "Experiance Type", "Position", "Vacancy", "Qualification", "Other Details", 'Location', 'Salary']}
                data={tablesTableData}
            />
        </Flex>
    );
}

