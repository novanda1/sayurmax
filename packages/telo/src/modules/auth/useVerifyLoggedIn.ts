import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useTokenStore } from "./useTokenStore";

export const useVerifyLoggedIn = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const get = async () => {
            const t = await AsyncStorage.getItem("@tuman/token");
            setToken(t as string);
        };
        get();
    }, []);

    const hasTokens = useTokenStore((s) => s.accessToken);

    return hasTokens || token;
};
