import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { Icon } from "native-base";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useOrderStore } from "../modules/order/useOrderStore";
import moment from "moment";

export default function AntDatepicker() {
    const { date, setDate } = useOrderStore();

    function onChange(date: any, dateString: any) {
        setDate(moment(date));
    }

    return (
        <DatePicker
            defaultValue={date}
            bordered={false}
            inputReadOnly={true}
            onChange={onChange}
            suffixIcon={<Icon as={MaterialIcon} size="sm" name="date-range" />}
        />
    );
}
