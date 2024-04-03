import { IBackground, IShortcuts } from "./interface";

const SIZE = {
    sm: {
        label: "Small",
        value: 75,
        fontSize: 12,
    },
    md: {
        label: "Medium",
        value: 100,
        fontSize: 14,
    },
    lg: {
        label: "Large",
        value: 125,
        fontSize: 16,
    },
    xl: {
        label: "Extra Large",
        value: 150,
        fontSize: 18,
    },
    xxl: {
        label: "Extra Extra Large",
        value: 175,
        fontSize: 22,
    },
};

const SHORTCUT_SORT_BY = {
    AZ: { label: "A-Z" },
    ZA: { label: "Z-A" },
    Custom: { label: "Custom" },
};
export const initialBackground: IBackground = {
    isLoading: true,
    url: "/videos/bg-default.mp4",
    isPlay: true,
};
export const initialShortcuts: IShortcuts = {
    items: [],
    size: "sm",
    short_by: "AZ",
    short_by_grid: true,
};
export { SHORTCUT_SORT_BY, SIZE };
