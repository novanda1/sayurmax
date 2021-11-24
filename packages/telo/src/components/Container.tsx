import React from "react";
import { Box, IBoxProps } from "native-base";

const Container: React.FC<IBoxProps> = (props: IBoxProps) => {
    return (
        <Box w="100%" px={4} {...props}>
            {props.children}
        </Box>
    );
};

export default Container;
