import { useReducer } from "react";
import ListContext from "./itemContext";

const defaultListState = {
  items: []
};

const listReducer = (state, action) => {
  
  console.log(state, action)
  let updatedList;
  if (action.type === 'ADD') {
    updatedList=[...state.items,action.item]
    return {
      items: updatedList
    }
  }
  if (action.type === 'SUB') {
    const ind = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[ind];
    console.log(existingCartItem)
    //let updatedListItem;
    if (existingCartItem) {
      if(existingCartItem.quantity>0){
        const updatedListItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity+1
        };
        updatedList = [...state.items];
        updatedList[ind] = updatedListItem;
      }  
    }
    return {
      items: updatedList,
    }
  }

  if (action.type === 'ADDL') {
    const ind = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[ind];
    console.log(existingCartItem)
    //let updatedListItem;
    if (existingCartItem) {
      if(existingCartItem.quantity>0){
        const updatedListItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity-1
        };
        updatedList = [...state.items];
        updatedList[ind] = updatedListItem;
      }  
    }
    return {
      items: updatedList,
    }
}
}

const ItemProvider = (props) => {
  const [listState, dispatchCartAction] = useReducer(
    listReducer,
    defaultListState
  );

  const addItemHandler = (obj) => {
    dispatchCartAction({ type: 'ADD', item: {...obj} });
  };

  const sizeLquantityHandler=(l)=>{
    dispatchCartAction({ type: 'ADDL', item: {...l} });
  }
  const sizeIquantityHandler=(l)=>{
    dispatchCartAction({type:"SUB",item:{...l}})
  }
  const listContext = {
    items: listState.items,
    addItemToList: addItemHandler,
    sizeLquantity: sizeLquantityHandler,
    sizeIquantity:sizeIquantityHandler
  };
  console.log(listContext);
  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
}


export default ItemProvider;
