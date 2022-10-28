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
import { toast } from "react-toastify";
import firestore from "../../firebase/firebase";

function CandidateTableRow(props) {
  const { logo, name, email, mobile, domain, status, date, education, jobType, files } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {email}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {mobile}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {education}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {jobType}
        </Text>
      </Td>
      <Td>
        <Badge
          bg={status === true ? "green.400" : bgStatus}
          color={status === true ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status ? "Placed" : "Pending"}
        </Badge>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"

          >
            <a href={files ? files : "/"}> <i className="fas fa-download"></i></a>
          </Text>
        </Button>
        {JSON.parse(localStorage.getItem("user")).role != "admin" &&
          <Button onClick={() => {
            firestore.collection("candidates").doc(props.id).update({ status: true }).then((res) => {
              toast.success("Selected successfully");
            })
          }} p="0px" bg="transparent" variant="no-hover">
            <Text
              fontSize="md"
              color="gray.400"
              fontWeight="bold"
              cursor="pointer"

            >
              Select
            </Text>
          </Button>}
      </Td>
    </Tr>
  );
}

export default CandidateTableRow;
