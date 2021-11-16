import React from "react";
import { Box, HStack, VStack, Text } from "native-base";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";

interface Props {}

export const OrderItem = (props: Props) => {
  return (
    <>
      <Box
        bg="white"
        borderLeftWidth={2}
        width="100%"
        borderColor="red.500"
        px={2}
        py={3}
        rounded="lg"
      >
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontFamily="body" fontWeight={600} fontSize="sm">
            Order #123
          </Text>
          <Text fontFamily="body" fontWeight="light" fontSize="xs">
            11 Juni 2020 12:31
          </Text>
        </HStack>
        <VStack>
          <Text fontFamily="body" fontSize="md" fontWeight="bold">
            Kokom Kumalasari
          </Text>
          <Text fontFamily="body" fontWeight="normal" mt="2" color="gray.700">
            Cijagra 1 gang 1 no 17 RT 5 RW 2 Cijagra, Lengkong, Kota Bandung,
            Rumah Cat biru samping toko
          </Text>
          <Text fontFamily="body" mt="2" fontWeight="semibold">
            Total
          </Text>
          <Text fontFamily="body" fontWeight="bold" fontSize="lg">Rp. 1.320.000</Text>
        </VStack>
      </Box>
    </>
  );
};
