import { useState } from "react";

export const Order_Delete = ({ orders, setOrders }) => {

    const [delSeq, setDelSeq] = useState("");

    const handleDelete = () => {
        if (!delSeq) {
            alert("삭제할 주문 번호를 입력하세요.");
            return;
        }

        const idCheck = orders.some((e) => {
            return e.id === Number(delSeq);
        });

        if (!idCheck) {
            alert("존재하지 않는 주문입니다.");
            return;
        }

        setOrders(prev =>
            prev.filter(e => e.id !== Number(delSeq))
        );

        alert("주문이 삭제되었습니다.");
        setDelSeq("");
    };

    return (
        <div>

            <input
                type="text"
                placeholder="삭제할 주문 번호를 입력하세요"
                value={delSeq}
                onChange={(e) => setDelSeq(e.target.value)}
            />

            <br />

            <button onClick={handleDelete}>삭제</button>

        </div>
    );

}