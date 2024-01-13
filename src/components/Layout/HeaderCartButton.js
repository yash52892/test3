import { useContext , useState, useEffect} from 'react';
import React from "react";  
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';


const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext);
    const [items, setItems]=useState([]);

    useEffect(()=>{
      fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/cart").then((response) => { 
        response.json().then((data) => {
            setItems(data);
        });
      });
  },[]);

    let a=cartCtx.items.length
    console.log(a)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

    return(
        <button className={classes.button} onClick={props.onClick}>
            <CartIcon/>
            <span>Cart</span>
            <span className={classes.badge}>{items.length}</span>
        </button>
    )
}
export default HeaderCartButton;