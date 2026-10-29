import { useState } from "react";

export const Member_Add = ({ staffs, setStaffs }) => {

    const [staff, setStaff] = useState({
        id: "",
        name: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setStaff({
            ...staff, [name]: value
        });
    }

    const handleAdd = () => {

        if (!staff.id || !staff.name.trim() || !staff.phone) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const idCheck = staffs.some((e) => {
            return e.id === Number(staff.id);
        });

        if (idCheck) {
            alert("이미 존재하는 직원 번호입니다.");
            return;
        }

        setStaffs(prev => [...prev, {
            ...staff,
            id: Number(staff.id)
        }]);

        setStaff({
            id: "",
            name: "",
            phone: ""
        });
    };

    return (
        <div className="main_body">
            <input
                type="number"
                placeholder="직원 번호를 입력하세요"
                name="id"
                value={staff.id}
                onChange={handleChange}
            /> <br />

            <input
                type="text"
                placeholder="이름을 입력하세요."
                name="name"
                value={staff.name}
                onChange={handleChange}
            /> <br />

            <input
                type="number"
                placeholder="전화번호를 입력하세요."
                name="phone"
                value={staff.phone}
                onChange={handleChange}
            /> <br />

            <button onClick={handleAdd}>등록</button>
        </div >
    );
}