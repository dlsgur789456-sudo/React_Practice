export const Member_List = ({ staffs }) => {

  return (
    <div>
      {
        staffs.map((e, i) => {
          return (
            <div key={i}>
              <div>{e.id}</div>
              <div>{e.name}</div>
              <div>{e.phone}</div>
            </div>
          );
        })
      }
    </div>
  );
}