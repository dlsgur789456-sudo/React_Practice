import { useNavigate } from "react-router-dom";

export const Login =()=> {
    const navi = useNavigate();
    return (
        <div className="container">
            <input type="text" />
            <input type="text" />
            <button onClick={()=>{navi("/admin")}}>로그인</button>
        </div>
    );
}