import { HStack, Select, Text } from "@chakra-ui/react";
import { data } from "../../data/regions.json";

function Filter() {
  const sizes = [
    20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
    190, 200,
  ];

  return (
    <HStack
      spacing="24px"
      paddingX="15px"
      paddingY="15px"
      backgroundColor="white"
    >
      <Text fontSize="md" fontWeight="bold" color="gray.600">
        Filter&nbsp;:
      </Text>
      <Select placeholder="Pilih Lokasi" width="xl">
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </Select>
      <Select placeholder="Pilih size udang" width="52">
        {sizes.map((item, index) => (
          <option key={index} value={item}>
            Size {item}
          </option>
        ))}
      </Select>
      <Select width="52">
        <option value="vannamei">Vannamei</option>
      </Select>
    </HStack>
  );
}

export default Filter;
