import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom"

export const Crud_Bar =(page)=> {
    const navi = useNavigate();
    const [menu, setMenu] = useState([
        {page:'/list', name:'목록'}, {page:'/add', name:'추가'}, {page:'/update', name:'수정'}, {page:'/delete', name:'삭제'}
    ])
    return (
        <div>
            <div className="crud_bar">
                {menu.map((e,i)=> <div className="crud_menu" onClick={()=>{navi("/admin/" + page + e.page)}}>{e.name}</div>)}
            </div>
            <div><Outlet /></div>
        </div>
    )
}

export const Add =({list, setList}) => {
    
}