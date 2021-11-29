import { HStack, Icon, IconButton, Box } from "native-base";
import { useCallback, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Platform } from "react-native";
import DatePicker from "react-native-date-picker";
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
                {DatePicker && (
                    <DatePicker
                        modal
                        open={open}
                        date={moment(date).toDate()}
                        mode="date"
                        onConfirm={(date) => {
                            setOpen(false);
                            setDate(moment(date));
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                        maximumDate={new Date()}
                        androidVariant="iosClone"
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
