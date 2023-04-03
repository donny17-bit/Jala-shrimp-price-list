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
// import { useDispatch, useSelector } from "react-redux";

function CardPriceTrend({ data, size }) {
  // const price = useSelector((state) => state.priceList);

  Chart.register(Filler);
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);

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
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const dataSet = {
    labels: ["Jun", "Jul", "Aug", "Sep", "per", "asd"],
    datasets: [
      {
        fill: true,
        id: 1,
        label: "",
        data: [
          data.shrimp_price_per_week_region_id.avg_size_20,
          data.shrimp_price_per_week_region_id.avg_size_30,
          data.shrimp_price_per_week_region_id.avg_size_40,
          data.shrimp_price_per_week_region_id.avg_size_90,
          data.shrimp_price_per_week_region_id.avg_size_60,
          data.shrimp_price_per_week_region_id.avg_size_70,
          data.shrimp_price_per_week_region_id.avg_size_80,
        ],
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
          19 Feb - 26 Feb
        </Text>

        <Line
          datasetIdKey="id"
          data={dataSet}
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
