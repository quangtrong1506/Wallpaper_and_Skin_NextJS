function ShortcutItemMenu() {
    const handleMouseLeave = () => {};
    return (
        <div
            className="fixed bg-white rounded overflow-hidden  shadow-lg"
            style={{ zIndex: 100000 }}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="w-[120px]">
                <li className="px-3 py-1 cursor-pointer hover:bg-gray-100 ">Mở</li>
                <li className="px-3 py-1 cursor-pointer hover:bg-gray-100 ">Chỉnh sửa</li>
                <li className="px-3 py-1 cursor-pointer hover:bg-gray-100 ">Xoá</li>
            </ul>
        </div>
    );
}

export default ShortcutItemMenu;
