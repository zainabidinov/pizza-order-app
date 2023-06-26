import React from "react";
import cartEmptyImg from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          The cart is empty <icon>😕</icon>
        </h2>
        <p>
          It seems you have not ordered pizza yet.
          <br />
          For ordering pizza, please go to the home page.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Go back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
