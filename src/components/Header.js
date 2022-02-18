import React from "react";
import { Text, Box, Center } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center className="header" bg="gray.700" color="white">
      <Text fontSize="6xl" fontWeight="semibold" color="white">
        Research Deliberation Canvas
      </Text>
    </Center>
  );
}
