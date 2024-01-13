import classes from "./AvilableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem";
import ListContext from "../../store/itemContext";
import { useContext, useEffect, useState } from "react";


const AvailableMeals =(props)=>{
    const list=useContext(ListContext);
    const [items, setItems]=useState([]);

    useEffect(()=>{
        fetch("https://crudcrud.com/api/e4df7dd43ccb4fd793ee0fe10cd0f781/products").then((response) => { 
          response.json().then((data) => {
              setItems(data);
          });
        });
    },[]);
    
    const mealList=items.map(meals=>
      <MealItem key={meals.id} id={meals.id} name={meals.name} description={meals.description} 
      price={meals.price} sizeL={meals.sizeL} sizeM={meals.sizeM} sizeS={meals.sizeS}/>
    )
    return(
      <section className={classes.meals}>
      <Card className={classes.mealList}>
      <ul>{mealList}</ul>
      </Card>
      </section>
    )
  }
  export default AvailableMeals;