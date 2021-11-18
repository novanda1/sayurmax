import { Order, OrderItem } from "@sayurmax/timun";
import { Badge, Box, Divider, HStack, Text, VStack, Button } from "native-base";
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
                            <Text
                                fontFamily="body"
                                fontWeight="bold"
                                fontSize="md"
                            >
                                Pesanan {route.params.order.id} - COD
                            </Text>
                            <Badge colorScheme="orange">Belum Dibayar</Badge>
                        </HStack>
                        <Text fontFamily="body">
                            {formatDate(order.createdAt)}
                        </Text>
                    </Container>
                </Box>

                {/* <Box bg="white" mt="2" py="3" px="2">
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
                        <Text
                            fontFamily="body"
                            fontSize="sm
            "
                        >
                            <VStack w="100%">
                                <Text mb="3">Items ({items.length})</Text>
                                {items.map((item) => (
                                    <Box
                                        w="100%"
                                        key={item.product.id}
                                        shadow="1"
                                        rounded="sm"
                                        px="3"
                                        py="3"
                                        mb="3"
                                    >
                                        <HStack justifyContent="space-between">
                                            <Text maxW="1/2" fontWeight="bold">
                                                {item.product.title} per{" "}
                                                {item.product.itemUnit}
                                            </Text>
                                            <Text
                                                minW="max-content"
                                                fontWeight="bold"
                                            >
                                                Rp. {item.atPrice * item.qty}
                                            </Text>
                                        </HStack>
                                        <HStack
                                            mt="2"
                                            justifyContent="space-between"
                                        >
                                            <Text>
                                                {item.qty} x {item.atPrice}
                                            </Text>
                                            <Text color="green.600">
                                                Lihat Catatan
                                            </Text>
                                        </HStack>
                                    </Box>
                                ))}
                                <Divider />
                                <HStack mt="2" justifyContent="space-between">
                                    <Text>Subtotal</Text>
                                    <Text fontWeight="bold">
                                        Rp. {order.total}
                                    </Text>
                                </HStack>
                                <HStack mt="2" justifyContent="space-between">
                                    <Text>Ongkir</Text>
                                    <Text fontWeight="bold">Rp. 0</Text>
                                </HStack>
                                <HStack mt="2" justifyContent="space-between">
                                    <Text fontWeight="bold" fontSize="lg">
                                        Total
                                    </Text>
                                    <Text
                                        fontWeight="bold"
                                        fontSize="lg"
                                        color="green.600"
                                    >
                                        Rp. {order.total}
                                    </Text>
                                </HStack>

                                <Button
                                    mt="3"
                                    variant="outline"
                                    colorScheme="green"
                                    onPress={() => {}}
                                >
                                    Hubungi via Whatsapp
                                </Button>
                            </VStack>
                        </Text>
                    </Container>
                </Box>

                <Box mt="3" bg="white" py="3" pt="2" pb="5">
                    <Container>
                        <VStack>
                            <Text fontSize="xl" fontWeight="bold" mb="3">
                                Update Status
                            </Text>
                            <Button colorScheme="green">Update</Button>
                        </VStack>
            </Container>
          </Box>
          */}
            </VStack>
        </ScrollView>
    );
};

export default OrderDetail;
