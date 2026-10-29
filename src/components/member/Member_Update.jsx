import { useState } from "react"

export const Member_Update = ({ staffs, setStaffs }) => {

    const [editStaff, setEditStaff] = useState({
        id: "",
        name: "",
        phone: ""
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;

        setEditStaff(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = () => {
        if (
            !editStaff.id ||
            !editStaff.name.trim() ||
            editStaff.price === ""
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const idCheck = staffs.some((e) => {
            return e.id === Number(editStaff.id);
        });

        if (!idCheck) {
            alert("존재하지 않는 직원 번호입니다.");
            return;
        }

        setStaffs(prev =>
            prev.map(e =>
                e.id === Number(editStaff.id)
                    ? { ...e, name: editStaff.name, price: Number(editStaff.price) }
                    : e
            )
        );

        alert("직원 정보가 수정되었습니다.");

        setEditStaff({
            id: "",
            name: "",
            phone: ""
        });
    };

    return (
        <div>
            <input
                type="number"
                placeholder="수정할 직원 번호를 입력하세요."
                name="id"
                value={editStaff.id}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="text"
                placeholder="수정할 이름을 입력하세요."
                name="name"
                value={editStaff.name}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="number"
                placeholder="수정할 전화번호를 입력하세요."
                name="phone"
                value={editStaff.phone}
                onChange={handleEditChange}
            />
            <br />

            <button onClick={handleEdit}>수정</button>
        </div>
    );
}