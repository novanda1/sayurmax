import React from "react";
import { VStack } from "native-base";
import Container from "./Container";

interface Props {
  children: React.ReactNode;
}

export const OrderList: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Container>
        <VStack space={2} alignItems="center" w="100%" mt={4}>
          {children}
        </VStack>
      </Container>
    </>
  );
};
