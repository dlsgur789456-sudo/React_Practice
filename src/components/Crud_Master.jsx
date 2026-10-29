import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom"

export const Crud_Bar =(page)=> {
    const navi = useNavigate();
    return (
        <div>
            <div className="crud_bar">
                <div className="crud_menu" onClick={()=>{navi("/admin/" + page + "/list")}}>목록</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/" + page + "/add")}}>추가</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/" + page + "/update")}}>수정</div>
                <div className="crud_menu" onClick={()=>{navi("/admin/" + page + "/delete")}}>삭제</div>
            </div>
            <div><Outlet /></div>
        </div>
    )
}

