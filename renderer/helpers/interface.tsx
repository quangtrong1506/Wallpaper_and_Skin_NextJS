import { SHORTCUT_SORT_BY, SIZE } from "./constant";

export interface IShortcutItem {
    id: string;
    x: number;
    y: number;
    title: string;
    icon: string;
    path: string;
    size: keyof typeof SIZE;
    isCustom?: boolean;
}
export interface IShortcuts {
    size: keyof typeof SIZE;
    items: IShortcutItem[] | [];
    short_by: keyof typeof SHORTCUT_SORT_BY;
    short_by_grid: boolean;
    isLoading?: boolean;
}
export interface IKeyMapItem {
    index: number;
    top: number;
    left: number;
    itemId: string;
    width?: number;
    height?: number;
}
export interface IBackground {
    url: string;
    isPlay: boolean;
    isLoading?: boolean;
}
export type ISize = keyof typeof SIZE;

interface _IMenu {
    play: string;
    pause: string;
    change_video: string;
    languages: string;
    shortcuts: string;
    settings: string;
    view: string;
}
interface _IMenuLanguages {
    vi: string;
    en: string;
}
interface _IButton {
    save: string;
    delete: string;
    cancel: string;
    reset: string;
    default: string;
    exit: string;
    confirm: string;
    open: string;
    edit: string;
    change: string;
    select: string;
    upload: string;
}
interface _ISize {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}
interface _INotification {}
export interface ILanguage {
    menu: _IMenu;
    menu_language: _IMenuLanguages;
    button: _IButton;
    notification: _INotification;
    size: _ISize;
}
