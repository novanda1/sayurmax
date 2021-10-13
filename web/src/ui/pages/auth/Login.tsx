import { CreateUserDto } from "lib/generated/graphql";
import { registerValidatorSchema } from "lib/validators/registerValidatorSchema";
import { AuthStore } from "@/stores/auth";
import { CommonStore } from "@/stores/common";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    Input,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { observer } from "mobx-react";
import React from "react";

type Props = {
    commonStore: CommonStore;
    authStore: AuthStore;
};

const Login: React.FC<Props> = observer(({ commonStore, authStore }) => {
    return (
        <Container
            h="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Box maxW="sm">
                <Button
                    onClick={() => {
                        commonStore.setToken("hoiii");
                    }}
                >
                    test
                </Button>
                <Formik
                    initialValues={{
                        ...authStore.values,
                        repassword: "",
                    }}
                    validationSchema={registerValidatorSchema}
                    onSubmit={async (
                        values: CreateUserDto,
                        { setSubmitting }: FormikHelpers<CreateUserDto>
                    ) => {
                        setSubmitting(true);

                        authStore.setUsername(values.username);
                        authStore.setPassword(values.password);

                        await authStore.login();

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
            </Box>
        </Container>
    );
});

export default Login;
