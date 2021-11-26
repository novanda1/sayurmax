import * as React from "react";
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    NativeBaseProvider,
} from "native-base";
export const Example = () => {
    return (
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
                size="lg"
                fontWeight="600"
                color="coolGray.800"
                _dark={{
                    color: "warmGray.50",
                }}
            >
                Hey Shopper
            </Heading>
            <Heading
                mt="1"
                _dark={{
                    color: "warmGray.200",
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
            >
                Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Nickname</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                    <Link
                        _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "green.500",
                        }}
                        alignSelf="flex-end"
                        mt="1"
                    >
                        Forget Password?
                    </Link>
                </FormControl>
                <Button mt="2" colorScheme="green">
                    Sign in
                </Button>
            </VStack>
        </Box>
    );
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
        </NativeBaseProvider>
    );
};
