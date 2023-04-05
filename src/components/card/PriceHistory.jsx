import { useState } from "react";
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
  Center,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Line } from "react-chartjs-2";
import {
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Chart,
  Filler,
} from "chart.js";
import PredictionTable from "../table/PredictionTable";

function PriceHistory({ detail }) {
  Chart.register(Filler);
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);

  const provinceName = detail.region.province_name;
  const [btnActive, setBtnActive] = useState(0);

  // Uppercase first char in each word
  let province = provinceName.split(" ");
  province.map((item, i) => {
    province[i] = item[0] + item.substring(1).toLowerCase();
  });

  province = province.join(" ");

  // randomize price and date data
  const minPrice_100 =
    detail.shrimp_price_per_week_region_id.min_size_100 - 10000;
  const maxPrice_100 = detail.shrimp_price_per_week_region_id.max_size_100;
  const minPrice_70 =
    detail.shrimp_price_per_week_region_id.min_size_70 - 10000;
  const maxPrice_70 = detail.shrimp_price_per_week_region_id.max_size_70;
  const minPrice_40 =
    detail.shrimp_price_per_week_region_id.min_size_40 - 10000;
  const maxPrice_40 = detail.shrimp_price_per_week_region_id.max_size_40;
  let price;

  const date = new Date("02/16/2023");
  const date1 = new Date();
  const diff = date1.getTime() - date.getTime();
  const daydiff = Math.floor(diff / (1000 * 60 * 60 * 24));

  let totalPriceList100 = [];
  let totalPriceList70 = [];
  let totalPriceList40 = [];
  let day = [];
  let month = 1;
  let stringDate = [];
  let days = 15;

  if (totalPriceList100.length < 1) {
    for (let i = 0; i < daydiff; i++) {
      if (i % 7 == 0) {
        day.push({
          date: days + 7,
          month: month,
        });
        days += 7;
      }
      if (i % 30 == 0) {
        month += 1;
        days = 0;
      }
      price = Math.floor(
        Math.random() * (maxPrice_100 - minPrice_100 + 1) + minPrice_100
      );
      totalPriceList100.push(price);
    }
    for (let i = 0; i < daydiff; i++) {
      price = Math.floor(
        Math.random() * (maxPrice_70 - minPrice_70 + 1) + minPrice_70
      );
      totalPriceList70.push(price);
    }
    for (let i = 0; i < daydiff; i++) {
      price = Math.floor(
        Math.random() * (maxPrice_40 - minPrice_40 + 1) + minPrice_40
      );
      totalPriceList40.push(price);
    }

    day.map((item) => {
      switch (item.month) {
        case 1:
          stringDate.push(`${item.date} Jan`);
          break;
        case 2:
          stringDate.push(`${item.date} Feb`);
          break;
        case 3:
          stringDate.push(`${item.date} Mar`);
          break;
        case 4:
          stringDate.push(`${item.date} Apr`);
          break;
        case 5:
          stringDate.push(`${item.date} Mei`);
          break;
        case 6:
          stringDate.push(`${item.date} Jun`);
          break;
        case 7:
          stringDate.push(`${item.date} Jul`);
          break;
        case 8:
          stringDate.push(`${item.date} Aug`);
          break;
        case 9:
          stringDate.push(`${item.date} Sep`);
          break;
        case 10:
          stringDate.push(`${item.date} Oct`);
          break;
        case 11:
          stringDate.push(`${item.date} Nov`);
          break;
        case 12:
          stringDate.push(`${item.date} Dec`);
          break;
        default:
          break;
      }
      item.month;
    });
  }

  const options = {
    responsive: true,
  };

  const dataTable = {
    labels: stringDate,
    datasets: [
      {
        fill: true,
        id: 1,
        label: "",
        data: totalPriceList100,
        borderColor: "#2581d8",
        backgroundColor: "#4eadba",
      },
      {
        fill: true,
        id: 2,
        label: "",
        data: totalPriceList70,
        borderColor: "#22df9b",
        backgroundColor: "#82e793",
      },
      {
        fill: true,
        id: 3,
        label: "",
        data: totalPriceList40,
        borderColor: "#dae027",
        backgroundColor: "#ebef8c",
      },
    ],
  };

  return (
    <Box
      width={{ base: "full", lg: "40%" }}
      backgroundColor="white"
      borderRadius="5px"
      border="1px"
      borderColor="gray.200"
    >
      <Text
        color="gray.600"
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="medium"
        textAlign={{ base: "center", md: "start" }}
        padding="15px"
      >
        Riwayat Harga Di Daerah {province}
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
            isActive={!btnActive ? true : false}
            onClick={() => setBtnActive(0)}
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
            isActive={btnActive ? true : false}
            onClick={() => setBtnActive(1)}
          >
            Prediksi
          </Button>
        </Flex>

        {btnActive ? (
          <>
            <Text fontSize="sm" fontWeight="bold" color="gray.600">
              Prediksi seminggu kedepan
            </Text>
            <PredictionTable
              price={[
                maxPrice_100,
                minPrice_100,
                maxPrice_70,
                minPrice_70,
                maxPrice_40,
                minPrice_40,
              ]}
            />
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
                Hasil diatas merupakan sebuah prediksi dari berdasarkan data
                yang telah tercatat di Jala. Prediksi harga udang ini{" "}
                <b>hanya sebagai referensi</b>, bukan sebuah rujukan yang harus
                diikuti. <b>Jala tidak bertanggung jawab</b> atas kerugian yang
                ditimbulkan karena menggunakan prediksi harga udang
              </Text>
            </Box>
          </>
        ) : (
          <>
            <Flex alignItems="center" w="full">
              <Input type="date" borderRadius="3px" h="40px" />
              <Text marginX="5px">-</Text>
              <Input type="date" borderRadius="3px" h="40px" />
            </Flex>
            <Center>
              <Flex gap="10px">
                <Center w={["20px", "25px"]} h={["20px", "25px"]} bg="#1b77df">
                  <CheckIcon color="white" w="14px" />
                </Center>
                <Text
                  fontSize={["xs", "sm"]}
                  color="gray.600"
                  fontWeight="bold"
                >
                  Size 100
                </Text>
                <Center w={["20px", "25px"]} h={["20px", "25px"]} bg="#1bdf9c">
                  <CheckIcon color="white" w="14px" />
                </Center>
                <Text
                  fontSize={["xs", "sm"]}
                  color="gray.600"
                  fontWeight="bold"
                >
                  Size 70
                </Text>
                <Center w={["20px", "25px"]} h={["20px", "25px"]} bg="#d8e01c">
                  <CheckIcon color="white" w="14px" />
                </Center>
                <Text
                  fontSize={["xs", "sm"]}
                  color="gray.600"
                  fontWeight="bold"
                >
                  Size 40
                </Text>
              </Flex>
            </Center>
            <Line datasetIdKey="id" data={dataTable} options={options} />
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
          </>
        )}
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
