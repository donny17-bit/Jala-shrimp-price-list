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

function CardPriceTrend() {
  Chart.register(Filler);
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);

  const options = {
    responsive: true,
  };

  const dataSet1 = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        fill: true,
        id: 1,
        label: "",
        data: [5, 6, 7],
        borderColor: "#35e3a7",
        backgroundColor: "#8cefcd",
      },
    ],
  };

  return (
    <Box
      paddingX="15px"
      width="15.7rem"
      height="12rem"
      backgroundColor="white"
      borderRadius="5px"
      border="1px"
      paddingTop="10px"
      paddingBottom="10px"
      borderColor="gray.200"
    >
      <Flex flexDirection="column">
        <Text color={"gray.600"} fontWeight="semibold" fontSize={"md"}>
          Lampung
        </Text>
        <Text
          color={"gray.600"}
          fontWeight="bold"
          fontSize="smaller"
          marginTop="3px"
        >
          Rp 52.000
        </Text>
        <Text
          color={"gray.600"}
          fontWeight="normal"
          fontSize="small"
          marginTop="5px"
        >
          19 Feb - 26 Feb
        </Text>

        <Line
          datasetIdKey="id"
          data={dataSet1}
          options={options}
          // options={{ maintainAspectRatio: false }}
          // width={100}
          // height={50}
        />
      </Flex>
    </Box>
  );
}

export default CardPriceTrend;
