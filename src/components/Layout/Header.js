import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/Tshirt.jpg";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>T shirts React</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
