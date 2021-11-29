import { HStack, Icon, IconButton, Box } from "native-base";
import { useCallback, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Platform } from "react-native";
import DatePicker from '@react-native-community/datetimepicker';

import { useOrderStore } from "../../modules/order/useOrderStore";
import moment from "moment";

const AndroidDatePicker: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { date, setDate } = useOrderStore()

    const toggleDate = useCallback(() => {
        setOpen(!open);
    }, [setOpen, open]);

    if (Platform.OS === "android")
        return (
            <HStack mr="2">
                <IconButton
                    onPress={toggleDate}
                    colorScheme="green"
                    icon={
                        <Icon as={MaterialIcon} size="sm" name="date-range" />
                    }
                />
                {open && (
                    <DatePicker
                        value={date.toDate()}
                        mode="date"
                        onChange={(event: any, date: any) => {
                            setOpen(false);
                            setDate(moment(date));
                        }}
                        maximumDate={new Date()}
                    />
                )}
            </HStack>
        );
    else return <></>;
};

const OrderDataPicker: React.FC = () => {
    if (Platform.OS === "android") {
        return <AndroidDatePicker />;
    } else
        return (
            <HStack mr="2">
                <Box maxW="130px">
                </Box>
            </HStack>
        );
};

export default OrderDataPicker;
