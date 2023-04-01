import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { HiOutlineInformationCircle } from "react-icons/hi";

function PriceHistory() {
  return (
    <Box
      flex="1"
      backgroundColor="white"
      borderRadius="5px"
      border="1px"
      borderColor="gray.200"
    >
      <Text color="gray.600" fontSize="md" fontWeight="medium" padding="15px">
        Riwayat Harga Di Daerah Jawa Tengah
      </Text>
      <hr></hr>
      <Flex padding="15px" flexDirection="column" gap="20px">
        <Flex justify="center">
          <Button
            bgColor="white"
            border="1px"
            borderColor="gray.300"
            borderRadius="3px"
            fontSize="sm"
            fontWeight="light"
            w="100px"
            h="30px"
            _hover={{ borderColor: "#bbdef8", fontWeight: "semibold" }}
            _active={{ bgColor: "#bbdef8", fontWeight: "semibold" }}
          >
            Riwayat
          </Button>
          <Button
            bgColor="white"
            border="1px"
            borderColor="gray.300"
            borderRadius="3px"
            fontSize="sm"
            fontWeight="light"
            w="100px"
            h="30px"
            _hover={{ borderColor: "#bbdef8", fontWeight: "semibold" }}
            _active={{ bgColor: "#bbdef8", fontWeight: "semibold" }}
          >
            Prediksi
          </Button>
        </Flex>
        <Flex alignItems="center" w="full">
          <Input type="date" borderRadius="3px" h="40px" />
          <Text marginX="5px">-</Text>
          <Input type="date" borderRadius="3px" h="40px" />
        </Flex>
        <Box
          bgColor="#fdf6e6"
          padding="15px"
          border="1px"
          borderColor="#f2d2a0"
          borderRadius="5px"
        >
          <Heading
            size="xs"
            fontWeight="bold"
            verticalAlign="center"
            color="gray.600"
          >
            <Icon as={HiOutlineInformationCircle} marginBottom="2px" />
            &nbsp;Informasi
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Perhitungan trend berdasarkan jumlah data supplier di satu area
            untuk mendapatkan nilai rata-rata di setiap area.
          </Text>
        </Box>
        <Link
          color="blue"
          textDecoration="underline"
          fontSize="xs"
          justifySelf="flex-start"
        >
          Lihat detail trend
        </Link>
        <Text fontSize={"sm"} color="gray.600" textAlign="center">
          Tertarik untuk berbagi info harga?
        </Text>
        <Box textAlign={"center"}>
          <Button
            fontSize="sm"
            h="35px"
            bgColor="#1b75db"
            color="white"
            _hover={{ bgColor: "#004492" }}
          >
            TAMBAH HARGA DI DAERAH SAYA
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default PriceHistory;
