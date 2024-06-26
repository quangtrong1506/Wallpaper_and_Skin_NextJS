import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SIZE } from "../../helpers/constant";
import { sortShortcuts } from "../../helpers/shortcuts";
import { setInitShortcut } from "../../redux/features/shortcut";
import { useAppSelector } from "../../redux/store";
import Shortcut from "./Shortcut";
function Shortcuts() {
    const disPatch = useDispatch();
    const SHORTCUTS = useAppSelector((state) => state.shortcutReducer);
    useEffect(() => {
        function updateSize() {
            disPatch(setInitShortcut(sortShortcuts(SHORTCUTS)?.shortcuts));
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return (
        <div id="shortcut-container" className="fixed">
            <div className="flex flex-col content-start flex-start flex-wrap">
                {SHORTCUTS?.items?.map((shortcut) => (
                    <Shortcut
                        data={shortcut}
                        key={Math.random().toString()}
                        shortcuts={SHORTCUTS}
                    />
                ))}
                <div
                    id="dash-shortcut"
                    className={`absolute  bg-white h-[2px] hidden -top-2`}
                    style={{ width: SIZE[SHORTCUTS.size].value.toString() + "px" }}
                ></div>
            </div>
        </div>
    );
}

export default Shortcuts;
