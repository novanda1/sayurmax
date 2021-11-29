import { Icon, Input } from "native-base";
import Feather from "react-native-vector-icons/Feather";

import React, { useState, useCallback, useEffect } from "react";
import { useOrderStore } from "./useOrderStore";
import { OrdersQuery, OrderStatusCode, useOrdersQuery } from "@sayurmax/shared";
import { UseQueryState } from "urql";

interface Props {
    orderStatus: OrderStatusCode;
}

interface Return {
    SearchInput: React.ReactNode;
    result: UseQueryState<OrdersQuery, object>;
}

export const useOrder = ({ orderStatus }: Props): Return => {
    const { date } = useOrderStore();
    const [search, setSearch] = useState<string>("");

    const [result, reexecuteQuery] = useOrdersQuery({
        variables: {
            status: orderStatus,
            limit: 11,
            date: {
                year: date.year(),
                month: date.month() + 1,
                day: date.date(),
            },
            search,
        },
    });

    const handleInputSearch = useCallback(
        (e) => {
            setSearch(e.target.value);
            reexecuteQuery();
        },
        [setSearch, reexecuteQuery]
    );

    useEffect(() => {
        reexecuteQuery();
    }, [date]);

    return {
        result,
        SearchInput: (
            <>
                <Input
                    placeholder="Cari list"
                    bg="white"
                    flex="1"
                    borderRadius="4"
                    py="3"
                    px="1"
                    fontSize="14"
                    value={search}
                    onChange={handleInputSearch}
                    InputLeftElement={
                        <Icon
                            m="2"
                            ml="3"
                            size="6"
                            color="gray"
                            as={<Feather name="search" />}
                        />
                    }
                />
            </>
        ),
    };
};
