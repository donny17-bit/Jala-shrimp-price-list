import { IconButton, Icon } from "@chakra-ui/react";
import { FaFacebookMessenger } from "react-icons/fa";

function Messenger() {
  return (
    <IconButton
      icon={<Icon as={FaFacebookMessenger} color="white" fontSize="15px" />}
      paddingX="0px"
      bgColor="#376f99"
      borderRadius="full"
      size="sm"
      _hover={{ bg: "#77bdf1", marginTop: "-5px" }}
    />
  );
}

export default Messenger;
