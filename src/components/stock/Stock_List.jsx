export const Stock_List = ({ stocks }) => {

    return (
        <div>
            {
                stocks.map((e, i) => {
                    return (
                        <div key={i}>
                            <div>{e.id}</div>
                            <div>{e.name}</div>
                            <div>{e.stock}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}