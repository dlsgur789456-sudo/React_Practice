import { useState } from "react";

export const Member_Delete = () => {
    const [delSeq, setDelSeq] = useState("");

    const handleDelete = () => {
        if (!delSeq) {
            alert("삭제할 직원 번호를 입력하세요.");
            return;
        }

        const idCheck = staffs.some((e) => {
            return e.id === Number(delSeq);
        });

        if (!idCheck) {
            alert("존재하지 않는 직원입니다.");
            return;
        }

        setStaffs(prev =>
            prev.filter(e => e.id !== Number(delSeq))
        );

        alert("직원이 삭제되었습니다.");
        setDelSeq("");
    };

    return (
        <div className="main_body">

            <input
                type="text"
                placeholder="삭제할 직원 번호를 입력하세요"
                value={delSeq}
                onChange={(e) => setDelSeq(e.target.value)}
            />

            <br />

            <button onClick={handleDelete}>삭제</button>

        </div>
    );

}