import create from "zustand";
import { combine } from "zustand/middleware";
import moment from "moment";

export const useOrderStore = create(
    combine({ date: moment() }, (set) => ({
        setDate: (x: moment.Moment) => {
            set({ date: x });
        },
    }))
);
