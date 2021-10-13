import { RootStateContextValue } from "@/stores/StoreProvider";
import { toErrorMap } from "@/utils/toErrorMap";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    Input,
    Link,
    Text,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { CreateUserDto, LoginDto } from "lib/generated/graphql";
import { loginValidatorSchema } from "lib/validators/loginValidatorSchema";
import { observer } from "mobx-react";
import React from "react";
import NextLink from "next/link";
import { useReactiveTokenRedirect } from "src/hooks/useReactiveTokenRedirect";

const Login: React.FC<typeof RootStateContextValue> = observer(
    ({ commonStore, authStore, userStore }) => {
        useReactiveTokenRedirect(commonStore.token);

        return (
            <Container
                h="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Box maxW="sm">
                    <Formik
                        initialValues={{
                            ...authStore.values,
                        }}
                        validationSchema={loginValidatorSchema}
                        onSubmit={async (
                            values: LoginDto,
                            {
                                setSubmitting,
                                setErrors,
                            }: FormikHelpers<CreateUserDto>
                        ) => {
                            setSubmitting(true);

                            authStore.setUsername(values.username);
                            authStore.setPassword(values.password);

                            const result = await authStore.login();

                            if (result?.login.error) {
                                setErrors(toErrorMap(result.login.error));
                            }
                            if (result?.login.user) {
                                commonStore.setToken(result.login.token);
                                userStore.pullUser(null, result.login.user);
                            }

                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Box mb="5">
                                    <Field name="username">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.username &&
                                                    form.touched.username
                                                }
                                            >
                                                <Input
                                                    {...field}
                                                    id="username"
                                                    placeholder="username"
                                                    variant="filled"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.username}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </Box>
                                <Box mb="5">
                                    <Field name="password">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.password &&
                                                    form.touched.password
                                                }
                                            >
                                                <Input
                                                    {...field}
                                                    id="password"
                                                    placeholder="password"
                                                    variant="filled"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.password}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </Box>
                                <Box>
                                    <Button
                                        isLoading={isSubmitting}
                                        w="full"
                                        backgroundColor="yellow.600"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                    <Box mt="5">
                        <Text fontSize="sm" textAlign="center">
                            Didnt have account yet? Please{" "}
                            <NextLink href="/register">
                                <Link color="yellow.500">Register</Link>
                            </NextLink>
                        </Text>
                    </Box>
                </Box>
            </Container>
        );
    }
);

export default Login;
