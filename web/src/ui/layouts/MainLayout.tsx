import { RootStateContextValue } from "@/stores/StoreProvider";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Nabvar } from "../components/Nabvar";

export const MainLayout: React.FC<typeof RootStateContextValue> = ({
    userStore,
}) => {
    return (
        <Box>
            <Nabvar user={userStore.currentUser ?? null} />
        </Box>
    );
};
