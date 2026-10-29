import { Routes, Route } from 'react-router-dom';
import { Login } from "./login/Login";
import { Admin } from './admin/Admin';
import { Menu } from '/.pages/Menu';
import { Menu_Add } from './components/Menu_Add';
import { Menu_List } from './components/Menu_List';
import { Menu_Update } from './components/Menu_Update';
import { Menu_Delete } from './components/Menu_Delete';
import { Stock } from './pages/Stock';
import { Stock_List } from './components/Stock_List'; 
import { Stock_Add } from './components/Stock_Add';
import { Stock_Update } from './components/Stock_Update';
import { Stock_Delete } from './components/Stock_Delete';
import { Order } from './pages/Order';
import { Order_List } from './components/Order_List';
import { Order_Add } from './components/Order_Add';
import { Order_Update } from './components/Order_Update';
import { Order_Delete } from './components/Order_Delete';
import { Member } from './pages/Member';
import { Member_List } from './components/Member_List';
import { Member_Add } from './components/Member_Add'; 
import { Member_Update } from './components/Member_Update';
import { Member_Delete } from './components/Member_Delete';
import { DashBoard } from './components/DashBoard';
import { useState } from 'react';


function App() {
  const [menus, setMenus] = useState([
    { id: 1, name: '아메리카노', price: 4500 },
    { id: 2, name: '카페라떼', price: 5000 },
    { id: 3, name: '바닐라라떼', price: 5500 },
    { id: 4, name: '딸기스무디', price: 6000 },
    { id: 5, name: '치즈케이크', price: 6500 },
  ]);

  const [stocks, setStocks] = useState([
    { id: 1, name: '원두 200g', stock: 25 },
    { id: 2, name: '바닐라 시럽 1L', stock: 10 },
    { id: 3, name: '종이컵 1박스', stock: 500 },
    { id: 4, name: '우유 1L', stock: 30 },
  ]);

  const [orders, setOrders] = useState([
    { id: 101, item: '아메리카노 2잔', total: 9000 },
    { id: 102, item: '카페라떼 1잔', total: 5000 },
    { id: 103, item: '치즈케이크 1개', total: 6500 },
    { id: 104, item: '바닐라라떼 1잔', total: 5500 },
    { id: 105, item: '딸기스무디 2잔', total: 12000 },
    { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, name: '김철수', phone: '010-1234-5678' },
    { id: 2, name: '이영희', phone: '010-9876-5432' },
  ]);

  return (
    <Routes>
      <Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='admin' element={<Admin />}>
          <Route path='dashboard' element={<DashBoard />}></Route>
          <Route path='menu' element={<Menu />}>
            <Route path='list' element={<Menu_List menus={menus} />}></Route>
            <Route path='add' element={<Menu_Add menus={menus} setMenus={setMenus} />}></Route>
            <Route path='update' element={<Menu_Update />}></Route>
            <Route path='delete' element={<Menu_Delete />}></Route>
          </Route>
          <Route path='stock' element={<Stock />}>
            <Route path='list' element={<Stock_List />}></Route>
            <Route path='add' element={<Stock_Add />}></Route>
            <Route path='update' element={<Stock_Update />}></Route>
            <Route path='delete' element={<Stock_Delete />}></Route>
          </Route>
          <Route path='order' element={<Order />}>
            <Route path='list' element={<Order_List />}></Route>
            <Route path='add' element={<Order_Add />}></Route>
            <Route path='update' element={<Order_Update />}></Route>
            <Route path='delete' element={<Order_Delete />}></Route>
          </Route>
          <Route path='member' element={<Member />}>
            <Route path='list' element={<Member_List />}></Route>
            <Route path='add' element={<Member_Add />}></Route>
            <Route path='update' element={<Member_Update />}></Route>
            <Route path='delete' element={<Member_Delete />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
export default App;