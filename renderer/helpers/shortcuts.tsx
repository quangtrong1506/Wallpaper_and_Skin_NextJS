import { SIZE } from "./constant";
import { IShortcutItem, IShortcuts, ISize } from "./interface";

export const sortShortcuts = (shortcuts: IShortcuts) => {
    let shortcutItems = [...shortcuts.items];
    let rowCount = 0;
    if (shortcuts.isLoading) return;
    if (shortcuts.short_by === "AZ" && shortcuts.short_by_grid)
        shortcutItems.sort((a, b) => a.title.localeCompare(b.title));
    else if (shortcuts.short_by === "ZA" && shortcuts.short_by_grid)
        shortcutItems.sort((a, b) => b.title.localeCompare(a.title));
    const height = document.querySelector(".main").clientHeight;
    let col = 1,
        row = 1;
    const textHeight = Math.floor(SIZE[shortcuts.size].fontSize * 3.2),
        space = 10,
        width = SIZE[shortcuts.size].value;
    for (let i = 0; i < shortcutItems.length; i++) {
        const element = { ...shortcutItems[i] };
        let x = element.y;
        let y = element.y;
        if (shortcuts.short_by_grid) {
            x = (col - 1) * width + (col - 1) * space;
            y = (row - 1) * width + space + (row - 1) * textHeight;
            if (y + width + textHeight > height) {
                rowCount = col == 1 ? rowCount : row - 1;
                col++;
                row = 1;
                y = 10;
                x = x + width + space;
            }
            element.x = x;
            element.y = y;
        }
        element.size = shortcuts.size;
        shortcutItems[i] = element;
        row++;
    }
    return {
        shortcuts: {
            ...shortcuts,
            items: shortcutItems,
        },
        row: rowCount,
    };
};
export const setItemSize = (items: Array<IShortcutItem>, size: ISize) => {
    let shortcutItems = [...items];
    return shortcutItems;
};
export const getSizeOfShortcutItem = (size: ISize) => {
    return {
        w: SIZE[size].value,
        h: SIZE[size].value + Math.floor(SIZE[size].fontSize * 3.2),
    };
};
