import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function DetailHeader() {
  return (
    <>
      <Flex w="full" bgColor="white" justify="space-between" padding="15px">
        <Flex flexDirection="column">
          <Text fontSize="lg" fontWeight="medium" color="blue">
            JAWA TENGAH
          </Text>
          <Text fontSize="sm" color="gray.600">
            KEBUMEN
          </Text>
        </Flex>
        <Link to={"/"}>
          <Button
            fontSize="sm"
            bgColor="#55bbee"
            color="white"
            h="fit-content"
            padding="2"
          >
            KEMBALI
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default DetailHeader;
