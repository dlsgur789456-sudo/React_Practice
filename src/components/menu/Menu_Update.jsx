
import { useState } from "react";

export const Menu_Update = ({ menus, setMenus }) => {
    const [editMenu, setEditMenu] = useState({
        id: "",
        name: "",
        price: ""
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;

        setEditMenu(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = () => {
        if (
            !editMenu.id ||
            !editMenu.name.trim() ||
            editMenu.price === ""
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const idCheck = menus.some((e) => {
            return e.id === Number(editMenu.id);
        });

        if (!idCheck) {
            alert("존재하지 않는 ID입니다.");
            return;
        }

        setMenus(prev =>
            prev.map(e =>
                e.id === Number(editMenu.id)
                    ? { ...e, name: editMenu.name, price: Number(editMenu.price) }
                    : e
            )
        );

        alert("메뉴가 수정되었습니다.");

        setEditMenu({
            id: "",
            name: "",
            price: ""
        });
    };

    return (
        <div className="main_body">
            <input
                type="number"
                placeholder="수정할 ID를 입력하세요."
                name="id"
                value={editMenu.id}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="text"
                placeholder="수정할 메뉴 이름을 입력하세요."
                name="name"
                value={editMenu.name}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="number"
                placeholder="수정할 메뉴 가격을 입력하세요."
                name="price"
                value={editMenu.price}
                onChange={handleEditChange}
            />
            <br />

            <button onClick={handleEdit}>수정</button>
        </div>
    );
};