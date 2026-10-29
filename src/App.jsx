import {Routes, Route} from 'react-router-dom';
import {Login} from "./login/Login";



function App (){
return (
  <Routes>
    <Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='admin' element={<Admin />}>
        <Route path='dashboard' element={<DashBoard />}></Route>
        <Route path='menu' element={<Menu />}>
          <Route path='list' element={<Menu_List />}></Route>
          <Route path='add' element={<Menu_Add />}></Route>
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