import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Moment from 'react-moment';
import moment from 'moment';
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart
} from "react-icons/fa";
function TransactionRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const { name, date, logo, price } = props;

  return (
    <Flex my="1rem" justifyContent="space-between">
      <Flex alignItems="center">
        <Box
          me="12px"
          borderRadius="50%"
          color={
            price[0] === "+"
              ? "green.400"
              : price[0] === "-"
              ? "red.400"
              : "gray.400"
          }
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="35px"
          h="35px"
        >
          <Icon as={FaArrowUp} />
        </Box>
        <Flex direction="column">
          <Text
            fontSize={{ sm: "md", md: "lg", lg: "md" }}
            color={textColor}
            fontWeight="bold"
          >
            {name}
          </Text>
          <Text
            fontSize={{ sm: "xs", md: "sm", lg: "xs" }}
            color="gray.400"
            fontWeight="semibold"
          >
            <Moment date={date} element="span" />
          </Text>
        </Flex>
      </Flex>
      <Box
        color={
          price[0] === "+"
            ? "green.400"
            : price[0] === "-"
            ? "red.400"
            : { textColor }
        }
      >
        <Text fontSize={{ sm: "md", md: "lg", lg: "md" }} fontWeight="bold">
          {price}
        </Text>
      </Box>
    </Flex>
  );
}

export default TransactionRow;
