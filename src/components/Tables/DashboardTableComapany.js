import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function DashboardTableRowCompany(props) {
  const { name, vacancy} = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {name}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {vacancy}
        </Text>
      </Td>
      

    </Tr>
  );
}

export default DashboardTableRowCompany;
