import * as SecureStore from "expo-secure-store";
import create from "zustand";
import { combine } from "zustand/middleware";
const accessTokenKey = "@toum/token";
const refreshTokenKey = "@toum/refresh-token";

export const useTokenStore = create(
    combine(
        {
            accessToken: "",
            refreshToken: "",
        },
        (set) => ({
            setTokens: async (x: {
                accessToken: string;
                refreshToken: string;
            }) => {
                try {
                    await SecureStore.setItem(accessTokenKey, x.accessToken);
                    await SecureStore.setItem(refreshTokenKey, x.refreshToken);
                } catch {}

                set(x);
            },
            loadTokens: async () => {
                try {
                    let accessToken = await SecureStore.getItem(accessTokenKey);
                    accessToken = accessToken || "";
                    let refreshToken = await SecureStore.getItem(
                        refreshTokenKey
                    );
                    refreshToken = refreshToken || "";
                    set({ accessToken, refreshToken });
                } catch {}
            },
        })
    )
);
