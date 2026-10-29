export const Order_List = ({ orders }) => {

  return (
    <div>
      {
        orders.map((e, i) => {
          return (
            <div key={i}>
              <div>{e.id}</div>
              <div>{e.item}</div>
              <div>{e.total}</div>
            </div>
          );
        })
      }
    </div>
  );

}