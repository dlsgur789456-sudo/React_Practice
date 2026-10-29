export const Menu_List = ({ menus }) => {

  return (
    <div>
      {
        menus.map((e, i)=>{
          return(
            <div key={i}>
              <div>{e.id}</div>
              <div>{e.name}</div>
              <div>{e.price}</div>
            </div>
          );
        })
      }
    </div>
  );
}