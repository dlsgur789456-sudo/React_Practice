import { useState } from "react";

export const Stock_Update = ({ stocks, setStocks }) => {

    const [editStock, setEditStock] = useState({
        id: "",
        name: "",
        stock: ""
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;

        setEditStock(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = () => {
        if (
            !editStock.id ||
            !editStock.name.trim() ||
            editStock.stock === ""
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const idCheck = stocks.some((e) => {
            return e.id === Number(editStock.id);
        });

        if (!idCheck) {
            alert("존재하지 않는 재고입니다.");
            return;
        }

        setStocks(prev =>
            prev.map(e =>
                e.id === Number(editStock.id)
                    ? { ...e, name: editStock.name, stock: Number(editStock.stock) }
                    : e
            )
        );

        alert("재고가 수정되었습니다.");

        setEditStock({
            id: "",
            name: "",
            stock: ""
        });
    };

    return (
        <div>
            <input
                type="number"
                placeholder="수정할 재고 ID를 입력하세요."
                name="id"
                value={editStock.id}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="text"
                placeholder="수정할 재고 이름을 입력하세요."
                name="name"
                value={editStock.name}
                onChange={handleEditChange}
            />
            <br />

            <input
                type="number"
                placeholder="수정할 재고 수량을 입력하세요."
                name="stock"
                value={editStock.stock}
                onChange={handleEditChange}
            />
            <br />

            <button onClick={handleEdit}>수정</button>
        </div>
    );
}