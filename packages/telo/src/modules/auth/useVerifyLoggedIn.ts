import { useTokenStore } from "./useTokenStore";

export const useVerifyLoggedIn = () => {
    const hasTokens = useTokenStore((s) => s.accessToken);

    return hasTokens;
};
