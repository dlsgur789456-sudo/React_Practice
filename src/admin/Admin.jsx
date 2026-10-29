import { useNavigate, Outlet } from "react-router-dom"

export const Admin =({setPage})=> {
    const navi = useNavigate();
    return (
        <div className="conatiner">
            <div className="adminHeader">
                <p>매장 관리 시스템</p>
                <button>로그아웃</button>
            </div>
            <div>
                <div className="side">
                    <div className="menu" onClick={()=>{navi("/admin/dashboard")}}>대시보드</div>
                    <div className="menu" onClick={()=>{navi("/admin/menu")}}>메뉴관리</div>
                    <div className="menu" onClick={()=>{navi("/admin/stock")}}>재고관리</div>
                    <div className="menu" onClick={()=>{navi("/admin/order")}}>주문관리</div>
                    <div className="menu" onClick={()=>{navi("/admin/member")}}>직원관리</div>
                </div>
                <div className="main"><Outlet /></div>
            </div>
        </div>
    )
}