import { useNavigate, Outlet } from "react-router-dom"

export const Admin =({page, setPage, pageMenu})=> {
    const navi = useNavigate();

    const choosePage = (page) => {
        navi("/admin/" + page);
    }
    return (
        <div className="container">
            <div className="adminHeader">
                <p>매장 관리 시스템</p>
                <button onClick={() => navi("/")} >로그아웃</button>
            </div>
            <div className="body">
                <div className="side">
                    {pageMenu.map((e,i)=> <div key={i} className="menu" name={e.value} onClick={() => choosePage(e.value)}>{e.name}</div>)}
                </div>
                <div className="main"><Outlet /></div>
            </div>
        </div>
    )
}