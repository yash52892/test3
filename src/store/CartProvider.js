import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: []
};

const cartReducer = (state, action) => {
  console.log(state, action);
  if (action.type === 'ADDL') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    console.log(existingCartItem, existingCartItemIndex);
    console.log(action,state)
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: parseInt(existingCartItem.quantity)+1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } 
    else{
      const updatedItem = {
        ...action.item,
        quantity: parseInt(action.amount)
      };
      const updatedItems=[...state.items,updatedItem]
      console.log(updatedItems);
      return {
        items: updatedItems
      }
    }
    return {
      items: updatedItems
    }
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item, amount) => {
    dispatchCartAction({type: 'ADDL', item: item, amount:1});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;