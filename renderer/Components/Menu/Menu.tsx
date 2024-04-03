"use client";

import { useState } from "react";
import { useAppSelector } from "../../redux/store";
import MenuShortcuts from "./MenuLevel2/MenuShortcuts";

export default function Menu() {
    const TEXT = useAppSelector((state) => state.languageReducer);
    const BACKGROUND = useAppSelector((state) => state.backgroundReducer);
    const [show, setShow] = useState(false);
    const RightArrow = () => {
        return (
            <div className="absolute right-1 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3">
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </div>
        );
    };
    return (
        <ul className="fixed z-40 bg-white select-none left-1/2 top-1/3 rounded  w-[180px] py-1 shadow shadow-[black]">
            <li className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base">
                {BACKGROUND.isPlay ? TEXT.menu.pause : TEXT.menu.play}
            </li>
            <li className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base">
                {TEXT.menu.change_video}
            </li>
            <li className="relative cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base">
                <span>{TEXT.menu.view}</span>
                <RightArrow />
                <MenuShortcuts />
            </li>
            <li className="relative cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base ">
                {TEXT.menu.shortcuts}
                <RightArrow />
            </li>
            <li className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base ">
                {TEXT.menu.settings}
            </li>
            <li className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base">
                {TEXT.button.exit}
            </li>
        </ul>
    );
}
