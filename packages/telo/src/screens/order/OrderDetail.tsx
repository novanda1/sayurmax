import {
    Order,
    OrderItem,
    OrderStatusCode,
    useChangeOrderStatusMutation,
} from "@sayurmax/shared";
import {
    Badge,
    Box,
    Button,
    CheckIcon,
    Divider,
    HStack,
    Select,
    Text,
    VStack,
} from "native-base";
import React, { useCallback, useMemo, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Container from "../../components/Container";
import { formatDate } from "../../utils/date";

const OrderDetail = ({ route, navigation }: any) => {
    type RouteParams = {
        order: Order;
        items: [OrderItem];
    };

    const { order, items }: RouteParams = route.params;

    const [orderStatus, setOrderStatus] = useState(order.status as string);

    const context = useMemo(
        () => ({ additionalTypenames: ["Order"] }),
        [order]
    );
    const [_, execute] = useChangeOrderStatusMutation();

    const handleChangeOrderStatus = useCallback(async () => {
        await execute(
            {
                shopperChangeOrderStatusCodeId: order.id,
                status: orderStatus as OrderStatusCode,
            },
            context
        );

        navigation.goBack();
    }, [orderStatus, context, order]);

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
                        <VStack w="100%">
                            <Text mb="3">Items ({items.length})</Text>
                            {items.map((item) => (
                                <Box
                                    key={item.id + item.qty}
                                    w="100%"
                                    rounded="sm"
                                    style={{
                                        shadowColor: "rgb(27, 35, 66)",
                                        shadowOffset: { width: 0, height: 5 },
                                        elevation: 3,
                                        shadowRadius: 20,
                                        shadowOpacity: 0.1,
                                        backgroundColor : "#0000"

                                    }}
                                    px="3"
                                    py="3"
                                    mb="3"
                                >
                                    <HStack justifyContent="space-between">
                                        <Text fontWeight="bold">
                                            {item.product.title} per{" "}
                                            {item.product.itemUnit}
                                        </Text>
                                        <Text
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
                            >
                                Hubungi via Whatsapp
                            </Button>
                        </VStack>
                    </Container>
                </Box>

                <Box mt="3" bg="white" py="3" pt="2" pb="5">
                    <Container>
                        <VStack>
                            <Text fontSize="xl" fontWeight="bold" mb="3">
                                Update Status
                            </Text>
                            <Select
                                selectedValue={orderStatus}
                                minWidth="200px"
                                accessibilityLabel="Choose Status"
                                placeholder="Choose Status"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon />,
                                }}
                                mt={1}
                                mb={1}
                                onValueChange={(itemValue) => {
                                    setOrderStatus(itemValue);
                                }}
                            >
                                {Object.values(OrderStatusCode)
                                    .reverse()
                                    .map((s) => (
                                        <Select.Item
                                            key={s}
                                            accessibilityHint={s}
                                            label={s}
                                            value={s}
                                        />
                                    ))}
                            </Select>
                            <Button
                                colorScheme="green"
                                onPress={handleChangeOrderStatus}
                            >
                                Update
                            </Button>
                        </VStack>
                    </Container>
                </Box>
            </VStack>
        </ScrollView>
    );
};

export default OrderDetail;
