// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TransactionRow from "components/Tables/TransactionRow";
import React from "react";
import { FaRegCalendarAlt, FaWallet } from "react-icons/fa";

const Transactions = ({
  title,
  date,
  newestTransactions,
  olderTransactions,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card ms={{ lg: "24px" }}>
      <CardHeader mb='12px'>
        <Flex direction='column' w='100%'>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            justify={{ sm: "center", lg: "space-between" }}
            align={{ sm: "center" }}
            w='100%'
            my={{ md: "12px" }}>
            <Text
              color={textColor}
              fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
              fontWeight='bold'>
              {title}
            </Text>
            <Flex align='center'>
              <Icon
                as={FaWallet}
                color='gray.400'
                fontSize='md'
                me='6px'></Icon>
              <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction='column' w='100%'>
          {newestTransactions.map((row) => {
            return (
              <TransactionRow
                name={row.name}
                date={row.date}
                price={row.price}
                logo={row.logo}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Transactions;
