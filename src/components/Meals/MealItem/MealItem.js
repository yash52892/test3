import classes from './MealItem.module.css';

const MealItem = (props) => {

  const id=props.id;

  const quantityLhandler=async ()=>{
    const l=props.sizeL;
    const obj={
      name: props.name,
      description:props.description,
      price:props.price,
      sizeL:1,
      sizeM:0,
      sizeS:0
    }
    await fetch("https://crudcrud.com/api/a10880835f494760b5df06e34eb5ccd5/cart", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
     })
     await fetch(`https://crudcrud.com/api/a10880835f494760b5df06e34eb5ccd5/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: props.name,
      description:props.description,
      price:props.price,
      sizeL:l-1,
      sizeM:props.sizeM,
      sizeS:props.sizeS
      }),
      headers: {
        "Content-Type": "application/json",
      },
     })
  }
  const quantityMhandler=async ()=>{
    const m=props.sizeM;
    const obj={
      name: props.name,
      description:props.description,
      price:props.price,
      sizeL:0,
      sizeM:1,
      sizeS:0
    }
    await fetch("https://crudcrud.com/api/a10880835f494760b5df06e34eb5ccd5/cart", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
     })
     await fetch(`https://crudcrud.com/api/a10880835f494760b5df06e34eb5ccd5/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: props.name,
      description:props.description,
      price:props.price,
      sizeL:props.sizeL,
      sizeM:m-1,
      sizeS:props.sizeS
      }),
      headers: {
        "Content-Type": "application/json",
      },
     })
  }
  const quantityShandler=async ()=>{
    const s=props.sizes;
    const obj={
      name: props.name,
      description:props.description,
      price:props.price,
      sizeL:0,
      sizeM:0,
      sizeS:1
    }
    await fetch("https://crudcrud.com/api/a10880835f494760b5df06e34eb5ccd5/cart", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
     })
     await fetch(`https://crudcrud.com/api/a10880835f494760b5df06e34eb5ccd5/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: props.name,
      description:props.description,
      price:props.price,
      sizeL:props.sizeL,
      sizeM:props.sizeM,
      sizeS:s-1
      }),
      headers: {
        "Content-Type": "application/json",
      },
     })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}> Price: {props.price}</span>
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
