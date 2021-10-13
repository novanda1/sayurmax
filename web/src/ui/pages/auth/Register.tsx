import { AuthStore } from "@/stores/auth";
import { CommonStore } from "@/stores/common";
import { UserStore } from "@/stores/user";
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
import { CreateUserDto } from "lib/generated/graphql";
import { registerValidatorSchema } from "lib/validators/registerValidatorSchema";
import { observer } from "mobx-react";
import React from "react";
import NextLink from "next/link";

type Props = {
    commonStore: CommonStore;
    authStore: AuthStore;
    userStore: UserStore;
};

const Register: React.FC<Props> = observer(
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
                            repassword: "",
                        }}
                        validationSchema={registerValidatorSchema}
                        onSubmit={async (
                            values: CreateUserDto,
                            {
                                setSubmitting,
                                setErrors,
                            }: FormikHelpers<CreateUserDto>
                        ) => {
                            setSubmitting(true);

                            authStore.setUsername(values.username);
                            authStore.setPassword(values.password);

                            const result = await authStore.register();

                            if (result?.register.error) {
                                setErrors(toErrorMap(result.register.error));
                            }
                            if (result?.register.user) {
                                commonStore.setToken(result.register.token);
                                userStore.pullUser(null, result.register.user);
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
                                <Box mb="5">
                                    <Field name="repassword">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.repassword &&
                                                    form.touched.repassword
                                                }
                                            >
                                                <Input
                                                    {...field}
                                                    id="repassword"
                                                    placeholder="password confirmation"
                                                    variant="filled"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.repassword}
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
                                        Register
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                    <Box mt="5">
                        <Text fontSize="sm" textAlign="center">
                            Already have an account? Please{" "}
                            <NextLink href="/login">
                                <Link color="yellow.500">Login</Link>
                            </NextLink>
                        </Text>
                    </Box>
                </Box>
            </Container>
        );
    }
);

export default Register;
