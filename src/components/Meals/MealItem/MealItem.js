import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import ListContext from '../../../store/itemContext';

const MealItem = (props) => {
  
  const cartCtx = useContext(CartContext);
  const list=useContext(ListContext);

  const price = props.price;

  
  const quantityLhandler=async ()=>{
    const res=await fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/cart", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
     })
     const data=await res.json();
     console.log(data)

    cartCtx.addItem(props);
    list.sizeLquantity(props);
  }
  const quantityMhandler=async ()=>{
    const res=await fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/cart", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
     })
     const data=await res.json();
     console.log(data)

    cartCtx.addItem(props);
    list.sizeLquantity(props);
  }
  const quantityShandler=async ()=>{
    const res=await fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/cart", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
     })
     const data=await res.json();
     console.log(data)

    cartCtx.addItem(props);
    list.sizeLquantity(props);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}> Price: {price}</span>
      </div>
      <div>
      {props.sizeL?<button className={classes.button} onClick={quantityLhandler}>Size L:{props.sizeL}</button>:<span>Out of Stock</span>}
      {props.sizeM?<button className={classes.button} onClick={quantityMhandler}>Size M:{props.sizeM}</button>:<span>Out of Stock</span>}
      {props.sizeS?<button className={classes.button} onClick={quantityShandler}>Size S:{props.sizeS}</button>:<span>Out of Stock</span>}  
      </div>
    </li> 
  );
};

export default MealItem;