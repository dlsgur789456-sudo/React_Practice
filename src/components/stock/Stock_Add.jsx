import { useState } from "react";

export const Stock_Add =(stocks, setStocks)=> {

     const [stock, setStock] = useState({
           id: "",
           name: "",
           stock: ""
       });
   
       const handleChange = (e) => {
           const { name, value } = e.target;
   
           setStock({
               ...stock, [name]: value
           });
       }
   
       const handleAdd = () => {
   
           if (!stock.id || !stock.name.trim() || !stock.stock) {
               alert("모든 항목을 입력해주세요.");
               return;
           }
   
           const idCheck = stocks.some((e) => {
               return e.id === Number(stock.id);
           });
   
           if (idCheck) {
               alert("이미 존재하는 재고 ID입니다.");
               return;
           }
   
           setStocks(prev => [...prev, {
               ...stock,
               id: Number(stock.id)
           }]);
   
           setStock({
               id: "",
               name: "",
               stock: ""
           });
       };
   
       return (
           <div>
               <input
                   type="number"
                   placeholder="재고 ID를 입력하세요."
                   name="id"
                   value={stock.id}
                   onChange={handleChange}
               /> <br />
   
               <input
                   type="text"
                   placeholder="재고 품목을 입력하세요."
                   name="name"
                   value={stock.name}
                   onChange={handleChange}
               /> <br />
   
               <input
                   type="number"
                   placeholder="재고 수량을 입력하세요."
                   name="stock"
                   value={stock.stock}
                   onChange={handleChange}
               /> <br />
   
               <button onClick={handleAdd}>등록</button>
           </div >
       );
}