import { IconButton, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <IconButton
      icon={<Icon as={FaWhatsapp} color="white" fontSize="18px" />}
      paddingX="0px"
      bgColor="#25d366"
      borderRadius="full"
      size="sm"
      _hover={{ bg: "#51dc85", marginTop: "-5px" }}
    />
  );
}

export default Whatsapp;
