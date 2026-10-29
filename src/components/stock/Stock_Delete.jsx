import { useState } from "react";

export const Stock_Delete = ({ stocks, setStocks }) => {

   const [delSeq, setDelSeq] = useState("");

    const handleDelete = () => {
        if (!delSeq) {
            alert("삭제할 재고 ID를 입력하세요.");
            return;
        }

        const idCheck = stocks.some((e) => {
            return e.id === Number(delSeq);
        });

        if (!idCheck) {
            alert("존재하지 않는 재고입니다.");
            return;
        }

        setStocks(prev =>
            prev.filter(e => e.id !== Number(delSeq))
        );

        alert("재고가 삭제되었습니다.");
        setDelSeq("");
    };

    return (
        <div className="main_body">

            <input
                type="text"
                placeholder="삭제할 재고 ID를 입력하세요"
                value={delSeq}
                onChange={(e) => setDelSeq(e.target.value)}
            />

            <br />

            <button onClick={handleDelete}>삭제</button>

        </div>
    );
}