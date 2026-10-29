import { useState } from "react";

export const Order_Update = ({ orders, setOrders }) => {

    const [editOrder, setEditOrder] = useState({
        id: "",
        item: "",
        total: ""
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;

        setEditOrder(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = () => {
        if (
            !editOrder.id ||
            !editOrder.item.trim() ||
            editOrder.total === ""
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const idCheck = orders.some((e) => {
            return e.id === Number(editOrder.id);
        });

        if (!idCheck) {
            alert("존재하지 않는 주문입니다.");
            return;
        }

        setOrders(prev =>
            prev.map(e =>
                e.id === Number(editOrder.id)
                    ? { ...e, item: editOrder.item, total: Number(editOrder.total) }
                    : e
            )
        );

        alert("주문이 수정되었습니다.");

        setEditOrder({
            id: "",
            item: "",
            total: ""
        });
    };

    return (
        <div>
            <input
                type="number"
                placeholder="수정할 주문번호를 입력하세요."
                name="id"
                value={editOrder.id}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="text"
                placeholder="수정할 주문 품목을 입력하세요."
                name="item"
                value={editOrder.item}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="number"
                placeholder="수정할 주문 수량을 입력하세요."
                name="total"
                value={editOrder.total}
                onChange={handleEditChange}
            />
            <br />

            <button onClick={handleEdit}>수정</button>
        </div>
    );
}