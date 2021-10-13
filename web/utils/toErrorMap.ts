import { FieldError } from "lib/generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({ field, error }) => {
        errorMap[field] = error;
    });

    return errorMap;
};
