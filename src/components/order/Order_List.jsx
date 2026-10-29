export const Order_List = ({ orders }) => {

  return (
    <div className="main_body">
      {
        orders.map((e, i) => {
          return (
            <div key={i}>
              <div className="list">{e.id}</div>
              <div className="list">{e.item}</div>
              <div className="list">{e.total}</div>
            </div>
          );
        })
      }
    </div>
  );

}