import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export const useReactiveTokenRedirect = (token: string, pushTo?: string) => {
    const { push } = useRouter();
    useEffect(() => {
        if (token) pushTo ? push(pushTo) : push("/");
    }, [token]);
};
