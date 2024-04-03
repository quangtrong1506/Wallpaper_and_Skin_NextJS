"use client";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import backgroundReducer from "./features/background";
import languageReducer from "./features/language";
import shortcutReducer from "./features/shortcut";
export const store = configureStore({
    reducer: {
        shortcutReducer,
        backgroundReducer,
        languageReducer,
    },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
