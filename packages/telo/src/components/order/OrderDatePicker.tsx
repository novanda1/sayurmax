import { HStack, Icon, IconButton, Box } from "native-base";
import { useCallback, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Platform } from "react-native";
import AntDatepicker from "../AntDatePicker";

const OrderDataPicker: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const toggleDate = useCallback(() => {
        setOpen(!open);
        console.log(open);
    }, [setOpen, open]);

    if (Platform.OS === "android") {
        console.log("called");
        return (
            <HStack mr="2">
                <IconButton
                    onPress={toggleDate}
                    colorScheme="green"
                    icon={
                        <Icon as={MaterialIcon} size="sm" name="date-range" />
                    }
                />
                {/* <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode="date"
                    onConfirm={(date) => {
                        setOpen(false);
                        setDate(date);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    maximumDate={new Date()}
                    androidVariant="iosClone"
                /> */}
            </HStack>
        );
    } else
        return (
            <HStack mr="2">
                <Box maxW="130px">
                    <AntDatepicker />
                </Box>
            </HStack>
        );
};

export default OrderDataPicker;