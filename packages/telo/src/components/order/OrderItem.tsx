import React from "react";
import { Box, HStack, VStack, Text } from "native-base";
import { formatDate } from "../../utils/date";
import { Order } from "@sayurmax/shared";

interface Props {
    data: Order;
}

export const OrderItem = ({ data }: Props) => {
    const formatedDate = formatDate(data.createdAt);

    return (
        <>
            <Box
                bg="white"
                borderLeftWidth="5"
                width="100%"
                borderColor="red.500"
                p="3"
                rounded="lg"
            >
                <HStack alignItems="center" justifyContent="space-between">
                    <Text fontFamily="body" fontWeight={600} fontSize="sm">
                        Order #{data.id}
                    </Text>
                    <Text fontFamily="body" fontWeight="medium" fontSize="xs" color="gray.500">
                        {formatedDate}
                    </Text>
                </HStack>
                <VStack>
                    <Text fontFamily="body" fontSize="md" fontWeight="bold" color="gray.500">
                        {data.address.recipient}
                    </Text>
                    <Text
                        fontFamily="body"
                        fontWeight="normal"
                        mt="2"
                        color="gray.700"
                    >
                        {data.address.address + ", "}
                        {data.address.city + " "} <br />
                        {data.address.detail}
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
