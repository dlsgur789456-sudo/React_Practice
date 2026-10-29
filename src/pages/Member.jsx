import { useNavigate } from "react-router-dom"


const Menu =()=> {

    const navi = useNavigate();

    return (
        <div>
            <div className="crud_bar">
                <div className="crud_menu" onClick={()=>{navi("/admin/member/list")}}>목록</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/member/add")}}>추가</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/member/update")}}>수정</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/member/delete")}}>삭제</div>
            </div>
            <div><Outlet /></div>
        </div>
    )
}