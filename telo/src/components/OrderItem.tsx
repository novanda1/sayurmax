import React from "react";
import { Box, HStack, VStack, Text } from "native-base";
import { Order } from "@sayurmax/timun";
import { formatDate } from "../utils/date";

interface Props {
  data: Order;
}

export const OrderItem = ({ data }: Props) => {
  const formatedDate = formatDate(data.createdAt);

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
            Order #{data.id}
          </Text>
          <Text fontFamily="body" fontWeight="medium" fontSize="xs">
            {formatedDate}
          </Text>
        </HStack>
        <VStack>
          <Text fontFamily="body" fontSize="md" fontWeight="bold">
            {data.address.recipient}
          </Text>
          <Text fontFamily="body" fontWeight="normal" mt="2" color="gray.700">
            {data.address.address + " "}
            {data.address.city + " "}
            {data.address.address}
          </Text>
          <Text fontFamily="body" mt="2" fontWeight="semibold">
            Total
          </Text>
          <Text fontFamily="body" fontWeight="bold" fontSize="lg">
            Rp. {data.total}
          </Text>
        </VStack>
      </Box>
    </>
  );
};
