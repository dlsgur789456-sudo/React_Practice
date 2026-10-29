import { useNavigate } from "react-router-dom"


const Menu =()=> {

    const navi = useNavigate();

    return (
        <div>
            <div className="crud_bar">
                <div className="crud_menu" onClick={()=>{navi("/admin/order/list")}}>목록</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/order/add")}}>추가</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/order/update")}}>수정</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/order/delete")}}>삭제</div>
            </div>
            <div><Outlet /></div>
        </div>
    )
}