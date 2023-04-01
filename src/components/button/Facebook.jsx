import { IconButton, Icon } from "@chakra-ui/react";
import { TiSocialFacebook } from "react-icons/ti";

function Facebook() {
  return (
    <IconButton
      icon={<Icon as={TiSocialFacebook} color="white" fontSize="20px" />}
      paddingX="0px"
      bgColor="#4267b2"
      borderRadius="full"
      size="sm"
      _hover={{ bg: "#6885c1", marginTop: "-5px" }}
    />
  );
}

export default Facebook;
