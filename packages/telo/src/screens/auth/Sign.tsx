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
import { useShopperLoginMutation } from "@sayurmax/shared";
import { useCallback, useState } from "react";
import { useTokenStore } from "../../modules/auth/useTokenStore";
export const SignIn = () => {
    const tokenStore = useTokenStore();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = useCallback((text: string) => {
        setUsername(text);
    }, []);
    const onChangePassword = useCallback((text: string) => {
        setPassword(text);
    }, []);

    const [_, execute] = useShopperLoginMutation();

    const handleLogin = useCallback(async () => {
        const response = await execute({
            username,
            password,
        });

        if (response.data)
            tokenStore.setTokens({
                accessToken: response.data?.shopperLogin.token,
            });
    }, [password, username]);

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
                    <FormControl.Label>Username</FormControl.Label>
                    <Input value={username} onChangeText={onChangeUsername} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                        type="password"
                        value={password}
                        onChangeText={onChangePassword}
                    />
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
                <Button mt="2" colorScheme="green" onPress={handleLogin}>
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
                <SignIn />
            </Center>
        </NativeBaseProvider>
    );
};
