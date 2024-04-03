import { useDispatch } from "react-redux";
import { SIZE } from "../../../helpers/constant";
import { sortShortcuts } from "../../../helpers/shortcuts";
import { setInitShortcut } from "../../../redux/features/shortcut";
import { useAppSelector } from "../../../redux/store";
interface IProps {
    x?: number;
    y?: number;
}
function MenuShortcuts(props: IProps) {
    const dispatch = useDispatch();
    const SHORTCUTS = useAppSelector((state) => state.shortcutReducer);
    const handleSetSize = (size: any) => {
        let newS = sortShortcuts({
            ...SHORTCUTS,
            size: size,
            short_by_grid: true,
        });
        dispatch(setInitShortcut(newS.shortcuts));
    };
    const handleSetShort = (short: any) => {
        let newS = sortShortcuts({
            ...SHORTCUTS,
            short_by: short,
            short_by_grid: true,
        });
        dispatch(setInitShortcut(newS.shortcuts));
    };
    const handleSetShortByGrid = () => {
        let newS = sortShortcuts({
            ...SHORTCUTS,
            short_by_grid: !SHORTCUTS.short_by_grid,
        });
        dispatch(setInitShortcut(newS.shortcuts));
    };
    return (
        <ul className="absolute -right-[183px] z-40 bg-white w-full rounded shadow shadow-[black] py-1 top-0">
            {Object.entries(SIZE).map((size, index) => {
                return (
                    <li
                        key={index}
                        className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base relative"
                        onClick={() => {
                            let s = size[0];
                            handleSetSize(s);
                        }}
                    >
                        <span>{size[1].label}</span>
                        {SHORTCUTS.size === size[0] && (
                            <div className="absolute right-1 top-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-3"
                                >
                                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                </svg>
                            </div>
                        )}
                    </li>
                );
            })}

            <li>
                <hr />
            </li>
            <li
                className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base relative"
                onClick={() => {
                    handleSetShort("AZ");
                }}
            >
                <span>Short by A-Z</span>
                {SHORTCUTS.short_by === "AZ" && (
                    <div className="absolute right-1 top-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3"
                        >
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                    </div>
                )}
            </li>
            <li
                className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base relative"
                onClick={() => {
                    handleSetShort("ZA");
                }}
            >
                <span>Short by Z-A</span>
                {SHORTCUTS.short_by === "ZA" && (
                    <div className="absolute right-1 top-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3"
                        >
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                    </div>
                )}
            </li>
            <li>
                <hr />
            </li>
            <li
                className="cursor-pointer hover:bg-gray-100 px-3 py-[2px] text-xl max-xl:text-base relative"
                onClick={handleSetShortByGrid}
            >
                <span>Short by grid</span>
                {SHORTCUTS.short_by_grid && (
                    <div className="absolute right-1 top-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3"
                        >
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                    </div>
                )}
            </li>
        </ul>
    );
}

export default MenuShortcuts;
