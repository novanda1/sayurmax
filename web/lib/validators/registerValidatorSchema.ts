import * as Yup from "yup";

export const registerValidatorSchema = Yup.object().shape<{}>({
    username: Yup.string()
        .min(5, "too short!")
        .max(25, "Too Long!")
        .required("Required")
        .matches(/^[a-zA-Z0-9]+$/, "invalid username "),

    password: Yup.string()
        .min(8, "too short!")
        .max(25, "Too Long!")
        .required("Required"),
    repassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
});
