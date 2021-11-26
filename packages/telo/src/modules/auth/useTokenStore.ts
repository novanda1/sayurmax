/**
 * token should not save not asyncStorege
 * should in expo-secure-storage
 */

// import * as AsyncStorage from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { combine } from "zustand/middleware";
const accessTokenKey = "@tuman/token";
// const refreshTokenKey = "@tuman/refresh-token";

export const useTokenStore = create(
    combine(
        {
            accessToken: "",
            // refreshToken: "",
        },
        (set) => ({
            setTokens: async (x: {
                accessToken: string;
                // refreshToken: string;
            }) => {
                try {
                    await AsyncStorage.setItem(accessTokenKey, x.accessToken);

                    // await AsyncStorage.setItem(refreshTokenKey, x.refreshToken);
                } catch {}

                set(x);
            },
            loadTokens: async () => {
                try {
                    let accessToken = await AsyncStorage.getItem(
                        accessTokenKey
                    );

                    if (process.env.NODE_ENV !== "production") {
                        localStorage.getItem(accessTokenKey);
                    }

                    accessToken = accessToken || "";
                    // let refreshToken = await AsyncStorage.getItem(
                    //     refreshTokenKey
                    // );
                    // refreshToken = refreshToken || "";
                    set({
                        accessToken,
                        // refreshToken
                    });
                } catch {}
            },
        })
    )
);
