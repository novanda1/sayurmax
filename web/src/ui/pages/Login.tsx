import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import AuthStore from "../../stores/authStore";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { CreateUserDto } from "../../../lib/generated/graphql";
import { registerValidatorSchema } from "../../../lib/validators/registerValidatorSchema";

@inject("authStore")
@observer
export default class Login extends Component<{ authStore?: AuthStore }> {
    handleSubmit() {
        return this.props.authStore.register();
    }

    render() {
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
                            ...this.props.authStore.values,
                            repassword: "",
                        }}
                        validationSchema={registerValidatorSchema}
                        onSubmit={async (
                            values: CreateUserDto,
                            { setSubmitting }: FormikHelpers<CreateUserDto>
                        ) => {
                            setSubmitting(true);

                            this.props.authStore.setUsername(values.username);
                            this.props.authStore.setPassword(values.password);

                            await this.handleSubmit();

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
    }
}
