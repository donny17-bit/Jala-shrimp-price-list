import { Flex, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex paddingX="20px" paddingY="10px" justify="space-between">
      <Text fontSize="sm" color="gray.600">
        <span className="font-bold">Copyright</span> PT JALA Akuakultur Lestari
        Alamku © 2023. &nbsp;
        <Link color="gray.400">Privacy Policy.</Link>
      </Text>
      <Text fontSize="sm" color="gray.600">
        JALA v1.25.0
      </Text>
    </Flex>
  );
}

export default Footer;
