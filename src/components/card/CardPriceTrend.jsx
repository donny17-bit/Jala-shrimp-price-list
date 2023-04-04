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

  let dateNow = new Date(data.date);
  dateNow = dateNow.toDateString().split(" ");
  let dateBefore = new Date(data.date);
  dateBefore.setDate(dateBefore.getDate() - 7);
  dateBefore = dateBefore.toDateString().split(" ");

  const sizePrice = (size) => {
    switch (size) {
      case 20:
        return data.size_20;
        break;
      case 30:
        return data.size_30;
        break;
      case 40:
        return data.size_40;
        break;
      case 50:
        return data.size_50;
        break;
      case 60:
        return data.size_60;
        break;
      case 70:
        return data.size_70;
        break;
      case 80:
        return data.size_80;
        break;
      case 90:
        return data.size_90;
        break;
      case 100:
        return data.size_100;
        break;
      case 110:
        return data.size_110;
        break;
      case 120:
        return data.size_120;
        break;
      case 130:
        return data.size_130;
        break;
      case 140:
        return data.size_140;
        break;
      case 150:
        return data.size_150;
        break;
      case 160:
        return data.size_160;
        break;
      case 170:
        return data.size_170;
        break;
      case 180:
        return data.size_180;
        break;
      case 190:
        return data.size_190;
        break;
      case 200:
        return data.size_200;
        break;
      default:
        break;
    }
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
      width={{ sm: "full", md: "full", lg: "12rem", xl: "15.7rem" }}
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
        <Box
          width={{ sm: "15rem", md: "full", lg: "10rem", xl: "14.7rem" }}
          height={{ md: "9rem", lg: "5rem", xl: "5rem" }}
        >
          <Line datasetIdKey="id" data={dataSet} options={options} />
        </Box>
      </Flex>
    </Box>
  );
}

export default CardPriceTrend;
