export const Stock_List = ({ stocks }) => {

    return (
        <div className="main_body">
            {
                stocks.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className="list">{e.id}</div>
                            <div className="list">{e.name}</div>
                            <div className="list">{e.stock}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}