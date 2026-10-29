export const Member_List = ({ staffs }) => {

  return (
    <div className="main_body">
      {
        staffs.map((e, i) => {
          return (
            <div key={i}>
              <div className="list">{e.id}</div>
              <div className="list">{e.name}</div>
              <div className="list">{e.phone}</div>
            </div>
          );
        })
      }
    </div>
  );
}