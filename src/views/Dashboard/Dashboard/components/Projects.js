// Chakra imports
import {
  Flex,
  Icon,
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
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import DashboardTableRowCompany from "components/Tables/DashboardTableComapany";
import React from "react";

const Projects = ({ title, captions, data,isc }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px'>
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
          {isc?
            data.map((row) => {
            return (
              <DashboardTableRowCompany
                key={row?.name}
                name={row?.company}
                vacancy={row?.vacancy}
              />
            );
          })
          :data.map((row) => {
            return (
              <DashboardTableRow
                key={row?.name}
                name={row?.name}
                experience={row?.explevel}
                email={row?.email}
                phone={row?.mobile}
              />
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default Projects;
