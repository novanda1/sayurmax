import { Order, OrderItem } from "@sayurmax/timun";
import { Badge, Box, HStack, Text, VStack } from "native-base";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Container from "../../components/Container";
import { formatDate } from "../../utils/date";

const OrderDetail = ({ route }: any) => {
  const { order, items }: { order: Order; items: [OrderItem] } = route.params;
  return (
    <ScrollView>
      <VStack>
        <Box bg="white" mt="2" py="3" px="2">
          <Container>
            <HStack justifyContent="space-between">
              <Text fontFamily="body" fontWeight="bold" fontSize="md">
                Pesanan {route.params.order.id} - COD
              </Text>
              <Badge colorScheme="orange">Belum Dibayar</Badge>
            </HStack>
            <Text fontFamily="body">{formatDate(order.createdAt)}</Text>
          </Container>
        </Box>

        <Box bg="white" mt="2" py="3" px="2">
          <Container>
            <Text fontFamily="body" fontWeight="bold" fontSize="md">
              {order.address.recipient}
            </Text>
            <Text fontFamily="body">{order.address.phone}</Text>
            <Text fontFamily="body">{order.address.address}</Text>
          </Container>
        </Box>

        <Box bg="white" mt="2" py="3" px="2">
          <Container>
            <Text fontFamily="body" fontWeight="bold" fontSize="md">
              History
            </Text>
          </Container>
        </Box>
        
        <Box bg="white" mt="2" py="3" px="2">
          <Container>
            <Text fontFamily="body" fontWeight="bold" fontSize="md">
              Items ({items.length})
            </Text>
          </Container>
        </Box>

      </VStack>
    </ScrollView>
  );
};

export default OrderDetail;
