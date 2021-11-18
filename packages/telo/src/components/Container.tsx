import React from "react";
import { Box } from "native-base";

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  return <Box w="100%" px={4}>{children}</Box>;
};

export default Container;
