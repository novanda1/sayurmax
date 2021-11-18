import { useEffect } from "react";

export const halo = "hai";

export const useTest = () => {
    useEffect(() => {
        console.log("usetest");
    }, []);
};
