import { useState } from "react"

export const Menu_Add = ({ menus, setMenus }) => {
  const [menu, setMenu] = useState({
    id: "",
    name: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMenu({
      ...menu, [name]: value
    });
  }

  const handleAdd = () => {

    if (!menu.id || !menu.name.trim() || !menu.price) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const idCheck = menus.some((e) => {
      return e.id === Number(menu.id);
    });

    if (idCheck) {
      alert("이미 존재하는 메뉴 번호입니다.");
      return;
    }

    setMenus(prev => [...prev, {
      ...menu,
      id: Number(menu.id),
      price: Number(menu.price)
    }]);

    setMenu({
      id: "",
      name: "",
      price: ""
    });
  };

  return (
    <div className="main_body">
      <input
        type="number"
        placeholder="메뉴 번호를 입력하세요."
        name="id"
        value={menu.id}
        onChange={handleChange}
      /> <br />

      <input
        type="text"
        placeholder="메뉴 이름을 입력하세요."
        name="name"
        value={menu.name}
        onChange={handleChange}
      /> <br />

      <input
        type="number"
        placeholder="메뉴 가격을 입력하세요."
        name="price"
        value={menu.price}
        onChange={handleChange}
      /> <br />

      <button onClick={handleAdd}>등록</button>
    </div >
  );
}
