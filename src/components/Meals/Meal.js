import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meal = (props) => {

  return (
    <section>
    <MealsSummary/>
    <AvailableMeals key={props.id}/>
    </section>
  );
};
export default Meal;
