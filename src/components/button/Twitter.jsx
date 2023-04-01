import { IconButton, Icon } from "@chakra-ui/react";
import { TiSocialTwitter } from "react-icons/ti";

function Twitter() {
  return (
    <IconButton
      icon={<Icon as={TiSocialTwitter} color="white" fontSize="20px" />}
      paddingX="0px"
      bgColor="#55acee"
      borderRadius="full"
      size="sm"
      _hover={{ bg: "#77bdf1", marginTop: "-5px" }}
    />
  );
}

export default Twitter;
