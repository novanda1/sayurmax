import { RootStateContextValue } from "@/stores/StoreProvider";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Nabvar } from "../components/Nabvar";

export const MainLayout: React.FC<typeof RootStateContextValue> = ({
    userStore,
    children,
}) => {
    return (
        <Box minH="100vh" bgColor="gray.100">
            <Nabvar user={userStore.currentUser ?? null} />

            {children}
        </Box>
    );
};
