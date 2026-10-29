import { Routes, Route } from 'react-router-dom';
import { Login } from "./login/Login";
import { Admin } from './admin/Admin';
import { Menu } from './pages/Menu';
import { Menu_Add } from './components/menu/Menu_Add';
import { Menu_List } from './components/menu/Menu_List';
import { Menu_Update } from './components/menu/Menu_Update';
import { Menu_Delete } from './components/menu/Menu_Delete';
import { Stock } from './pages/Stock';
import { Stock_List } from './components/stock/Stock_List'; 
import { Stock_Add } from './components/stock/Stock_Add';
import { Stock_Update } from './components/stock/Stock_Update';
import { Stock_Delete } from './components/stock/Stock_Delete';
import { Order } from './pages/Order';
import { Order_List } from './components/order/Order_List';
import { Order_Add } from './components/order/Order_Add';
import { Order_Update } from './components/order/Order_Update';
import { Order_Delete } from './components/order/Order_Delete';
import { Member } from './pages/Member';
import { Member_List } from './components/member/Member_List';
import { Member_Add } from './components/member/Member_Add'; 
import { Member_Update } from './components/member/Member_Update';
import { Member_Delete } from './components/member/Member_Delete';
import { DashBoard } from './pages/DashBoard';
import { useState } from 'react';


function App() {

  const [page, setPage] = useState("");

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

  const [pageMenu, setPageMenu] = useState([
    {name:'대시보드', value:'dashboard', func:DashBoard},
    {name:'메뉴관리', value:'menu', func:Menu},
    {name:'재고관리', value:'stock', func:Stock},
    {name:'주문관리', value:'order', func:Order},
    {name:'직원관리', value:'member', func:Member}
])

  const [crud, setCrud] = useState([
    {name:'add', func:'Add'}, {name:'list', func:'List'}, {name:'update', func:'Update'}, {name:'delete', func:'Delete'}
  ])

  return (
    <Routes>
      <Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='admin' element={<Admin page={page} setPage={setPage} pageMenu={pageMenu}/>}>
          <Route index path='dashboard' element={<DashBoard />}></Route>
          <Route path='menu' element={<Menu />}>
            <Route path='list' element={<Menu_List menus={menus} />}></Route>
            <Route path='add' element={<Menu_Add menus={menus} setMenus={setMenus} />}></Route>
            <Route path='update' element={<Menu_Update menus={menus} setMenus={setMenus} />}></Route>
            <Route path='delete' element={<Menu_Delete menus={menus} setMenus={setMenus} />}></Route>
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
          {/* {pageMenu.map((e, i) => {
          const Func = e.func;
            return (
            <Route key={i} path={e.value} element={<Func page={page} setPage={setPage} pageMenu={pageMenu}/>}>
            </Route>
          );
        })} */}
        </Route>
      </Route>
    </Routes>
  );
}
export default App;