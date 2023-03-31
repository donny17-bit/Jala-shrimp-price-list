import { HStack, Select, Text } from "@chakra-ui/react";

function Filter() {
  return (
    <HStack
      spacing="24px"
      paddingX="15px"
      paddingY="15px"
      backgroundColor="white"
    >
      <Text fontSize="md" fontWeight="bold" color="gray.500">
        Filter&nbsp;:
      </Text>
      <Select placeholder="Select option" width="xl">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select option" width="52">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select option" width="52">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>
  );
}

export default Filter;
