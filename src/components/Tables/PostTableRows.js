import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ReadMoreReact from 'read-more-react';

function PostTableRow(props) {
  const { Description,
    ExperianceType,
    Position,
    Vacancy,
    Qualification,
    OtherDetails,
    Location,
    Salary } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">

          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "box",
                lineClamp: 2,
              }}
            >
              <ReadMoreReact min={40} text={Description ? Description : ""} />

            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {ExperianceType}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Position}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Vacancy}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Qualification}
        </Text>
      </Td>
      <Td>
        <Text style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "box",
          lineClamp: 2,
        }} minWidth="100%" fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          <ReadMoreReact min={40} text={OtherDetails ? OtherDetails : ""} />

        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Location}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {Salary}
        </Text>
      </Td>

    </Tr>
  );
}

export default PostTableRow;
