import { initialBackground, initialShortcuts } from "./constant";
import { IBackground, IShortcuts } from "./interface";

const getShortcuts = (): IShortcuts => {
    let shortcuts = JSON.parse(localStorage.getItem("shortcuts"));
    return shortcuts || initialShortcuts;
};

const setShortcuts = (shortcuts: IShortcuts) => {
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
};

const getBackground = (): IBackground => {
    let shortcuts = JSON.parse(localStorage.getItem("background"));
    return shortcuts || initialBackground;
};

const setBackground = (shortcuts: IBackground) => {
    localStorage.setItem("background", JSON.stringify(shortcuts));
};

const getLanguage = () => {
    let code = JSON.parse(localStorage.getItem("language"));
    return code || navigator.language;
};

const setLanguage = (code: string) => {
    localStorage.setItem("language", JSON.stringify(code));
};

export const DATA = {
    getShortcuts,
    setShortcuts,
    getBackground,
    setBackground,
    getLanguage,
    setLanguage,
};
