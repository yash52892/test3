import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = props.price;
  const sL=props.sizeL;
  const sM=props.sizeM;
  const sS=props.sizeS;

  let x=Boolean(sL)
  let y=Boolean(sM)
  let z=Boolean(sS)

  return (
    <li key={props.id} id={props.id} className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>Price: {price}</span>
        </div>
      </div>
      <div>
        {x && <span className={classes.amount}>SizeL x {sL}</span>}
        {y && <span className={classes.amount}>SizeM x {sM}</span>}
        {z && <span className={classes.amount}>SizeS x {sS}</span>}
        </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;