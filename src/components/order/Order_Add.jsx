import { useState } from "react";

export const Order_Add = ({ orders, setOrders }) => {

    const [order, setOrder] = useState({
        id: "",
        item: "",
        total: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setOrder({
            ...order, [name]: value
        });
    }

    const handleAdd = () => {

        if (!order.id || !order.item.trim() || !order.total) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const idCheck = orders.some((e) => {
            return e.id === Number(order.id);
        });

        if (idCheck) {
            alert("이미 존재하는 주문 번호입니다.");
            return;
        }

        setOrders(prev => [...prev, {
            ...order,
            id: Number(order.id)
        }]);

        setOrder({
            id: "",
            item: "",
            total: ""
        });
    };

    return (
        <div>
            <input
                type="number"
                placeholder="주문 번호를 입력하세요."
                name="id"
                value={order.id}
                onChange={handleChange}
            /> <br />

            <input
                type="text"
                placeholder="주문 품목을 입력하세요."
                name="item"
                value={order.item}
                onChange={handleChange}
            /> <br />

            <input
                type="number"
                placeholder="주문 수량을 입력하세요."
                name="total"
                value={order.total}
                onChange={handleChange}
            /> <br />

            <button onClick={handleAdd}>등록</button>
        </div >
    );
}