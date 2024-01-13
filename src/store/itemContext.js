import React from "react";

const ListContext = React.createContext({
  items: [],
  addItemToList: (item) => {},
  sizeLquantity:(item)=>{}
});

export default ListContext;