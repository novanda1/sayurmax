import * as Yup from "yup";

export const loginValidatorSchema = Yup.object().shape<{}>({
    username: Yup.string()
        .min(5, "too short!")
        .max(25, "Too Long!")
        .required("Please enter your username")
        .matches(/^[a-zA-Z0-9]+$/, "invalid username "),

    password: Yup.string()
        .min(8, "too short!")
        .max(25, "Too Long!")
        .required("Required"),
});
