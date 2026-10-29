import { useNavigate } from "react-router-dom";

export const Login =()=> {
    const navi = useNavigate();
    return (
        <div className="container">
            <div>
            <p>매장 관리 시스템 로그인</p>
            <input type="text" />
            <input type="text" />
            <button onClick={()=>{navi("/admin")}}>로그인</button>
            </div>
        </div>
    );
}