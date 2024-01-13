import { useContext , useState, useEffect} from 'react';
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import ListContext from '../../store/itemContext';


const Cart = (props) => {
  const list=useContext(ListContext);
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items)

  const [items, setItems]=useState([]);

  useEffect(()=>{
    fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/cart").then((response) => { 
      response.json().then((data) => {
          setItems(data);
      });
    });
},[]);

  const totalAmount = cartCtx.totalAmount;
  const hasItems = 1;

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item.id);
    list.sizeIquantity(item);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
    list.sizeLquantity(item)
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item._id}
          id={item._id}
          name={item.name}
          price={item.price}
          description={item.description}
          sizeL={item.sizeL}
          onRemove={cartItemRemoveHandler.bind(null, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total </span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
