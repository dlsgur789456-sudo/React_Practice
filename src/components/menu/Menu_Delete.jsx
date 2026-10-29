import { useState } from "react";

export const Menu_Delete = ({ menus, setMenus }) => {
    const [delSeq, setDelSeq] = useState("");

    const handleDelete = () => {
        if (!delSeq) {
            alert("삭제할 메뉴 ID를 입력하세요.");
            return;
        }

        const idCheck = menus.some((e) => {
            return e.id === Number(delSeq);
        });

        if (!idCheck) {
            alert("존재하지 않는 메뉴입니다.");
            return;
        }

        setMenus(prev =>
            prev.filter(e => e.id !== Number(delSeq))
        );

        alert("메뉴가 삭제되었습니다.");
        setDelSeq("");
    };

    return (
        <div className="main_body">
            
            <input
                type="text"
                placeholder="삭제할 ID를 입력하세요"
                value={delSeq}
                onChange={(e) => setDelSeq(e.target.value)}
            />

            <br />

            <button onClick={handleDelete}>삭제</button>

        </div>
    );
};