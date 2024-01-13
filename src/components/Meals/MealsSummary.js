import { Fragment, useContext, useState } from "react";
import classes from "./MealsSummary.module.css"
import ListContext from "../../store/itemContext";

const MealsSummary = () => {
  let list=useContext(ListContext);
  let[obj, setObj]=useState({})
  const submitHandler=async (e)=>{
    e.preventDefault();
     setObj(
      obj={
        name : e.target[0].value,
        description: e.target[1].value,
        price:e.target[2].value,
        sizeL:e.target[3].value,
        sizeM:e.target[4].value,
        sizeS:e.target[5].value
      }
     )
     const res=await fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/products", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
     })
     const data=await res.json();
     console.log(data)
     list.addItemToList(
      {
        id:data._id,
        name : e.target[0].value,
        description: e.target[1].value,
        price:e.target[2].value,
        sizeL:e.target[3].value,
        sizeM:e.target[4].value,
        sizeS:e.target[5].value
      }
     );
  }
  return (
    <Fragment>
      <div className={classes.Summery}>
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input type="text" required></input>
          <label>Description</label>
          <input type="text" required></input>
          <label>Price</label>
          <input type="number" required></input>
          <label>Size L</label>
          <input type="number" required></input>
          <label>Size M</label>
          <input type="number" required></input>
          <label>Size S</label>
          <input type="number" required></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
};
export default MealsSummary;
