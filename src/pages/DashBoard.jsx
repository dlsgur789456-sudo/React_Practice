

export const DashBoard =({dashBoard})=> {

    return (
        <div>
            <div className="dash">
            <h2>대시보드</h2>
            <div><div className="dash1">구분</div><div className="dash2">수량</div></div>
            {dashBoard.map((e,i)=> {
                return (
                    <div key={i}><div className="dash1">{e.name}</div><div className="dash2">{e.value}</div></div>
                )
            })}
            </div>
        </div>
    )
}