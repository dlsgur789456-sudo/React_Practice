export const Menu_List = ({ menus }) => {

  return (
    <div className="main_body">
      {
        menus.map((e, i)=>{
          return(
            <div key={i}>
              <div className="list">{e.id}</div>
              <div className="list">{e.name}</div>
              <div className="list">{e.price}</div>
            </div>
          );
        })
      }
    </div>
  );
}