import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Background from "../Components/Background/Background";
import Menu from "../Components/Menu/Menu";
import Shortcuts from "../Components/Shortcuts/Shortcuts";
import { DATA } from "../helpers/data";
import { setInitBackground } from "../redux/features/background";
import { setText } from "../redux/features/language";
import { setInitShortcut } from "../redux/features/shortcut";
import { useAppSelector } from "../redux/store";

export default function HomePage() {
    const disPatch = useDispatch();
    const SHORTCUTS = useAppSelector((state) => state.shortcutReducer);
    useEffect(() => {
        // Data
        const shortcuts = DATA.getShortcuts();
        disPatch(
            setInitShortcut({
                ...shortcuts,
                isLoading: false,
            })
        );
        let bg = DATA.getBackground();
        disPatch(
            setInitBackground({
                ...bg,
                isLoading: false,
            })
        );
        let language = DATA.getLanguage();
        disPatch(setText({ code: language }));
        // Event
        const handle = (event) => event.preventDefault();
        document.addEventListener("contextmenu", handle);
        return () => {
            document.removeEventListener("contextmenu", handle);
        };
    }, []);
    useEffect(() => {
        if (!SHORTCUTS.isLoading) DATA.setShortcuts(SHORTCUTS);
    }, [SHORTCUTS]);
    return (
        <>
            <div className="main relative w-full h-[100vh]">
                <Background />
                <Shortcuts />
                {/* <ShortcutItemMenu /> */}
                <Menu />
            </div>
        </>
    );
}
