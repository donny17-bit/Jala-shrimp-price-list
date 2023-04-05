import { Box, Flex, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Chart,
  Filler,
} from "chart.js";

function CardPriceTrend({ data, size }) {
  Chart.register(Filler);
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);

  let keys;
  let dateNow = new Date(data.date);
  dateNow = dateNow.toDateString().split(" ");
  let dateBefore = new Date(data.date);
  dateBefore.setDate(dateBefore.getDate() - 7);
  dateBefore = dateBefore.toDateString().split(" ");

  const sizePrice = (size) => {
    keys = Object.keys(data).filter((word) => word.match(`size_${size}`));
    return data[keys[0]];
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  // randomize price trend
  const minPrice = data.shrimp_price_per_week_region_id.min_size_100 - 10000;
  const maxPrice = data.shrimp_price_per_week_region_id.max_size_100;

  let dataTrend = [];
  for (let i = 0; i < 7; i++) {
    const price = Math.floor(
      Math.random() * (maxPrice - minPrice + 1) + minPrice
    );
    dataTrend.push(price);
  }

  const dataSet = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: true,
        id: 1,
        label: "",
        data: dataTrend,
        borderColor: "#35e3a7",
        backgroundColor: "#8cefcd",
      },
    ],
  };

  return (
    <Box
      paddingX="15px"
      width={{ base: "14rem", lg: "100%" }}
      backgroundColor="white"
      borderRadius="5px"
      border="1px"
      paddingTop="10px"
      paddingBottom="10px"
      borderColor="gray.200"
    >
      <Flex flexDirection="column">
        <Text color={"gray.600"} fontWeight="semibold" fontSize={"md"}>
          {data.region.name}
        </Text>
        <Text
          color={"gray.600"}
          fontWeight="bold"
          fontSize="smaller"
          marginTop="3px"
        >
          {data.currency.symbol} {sizePrice(size)}
        </Text>
        <Text
          color={"gray.600"}
          fontWeight="normal"
          fontSize="small"
          marginTop="5px"
        >
          {dateBefore[2]} {dateBefore[1]} - {dateNow[2]} {dateNow[1]}
        </Text>
        <Box width={"full"} height={"5rem"}>
          <Line datasetIdKey="id" data={dataSet} options={options} />
        </Box>
      </Flex>
    </Box>
  );
}

export default CardPriceTrend;
