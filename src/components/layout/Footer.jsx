import { Flex, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex paddingX="20px" paddingY="10px" justify="space-between">
      <Text fontSize={["xs", "sm"]} color="gray.600">
        <Text fontWeight="bold" display={{ base: "none", md: "contents" }}>
          Copyright &nbsp;
        </Text>
        PT JALA Akuakultur Lestari Alamku © 2023. &nbsp;
        <Link color="gray.400">Privacy Policy.</Link>
      </Text>
      <Text
        fontSize="sm"
        color="gray.600"
        display={{ base: "none", md: "block" }}
      >
        JALA v1.25.0
      </Text>
    </Flex>
  );
}

export default Footer;
