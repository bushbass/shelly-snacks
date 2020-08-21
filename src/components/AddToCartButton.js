import React from "react";
import shoppingCartContext from "../shoppingCartContext";
// import { v4 as uuidv4 } from "uuid";

const addToCartButton = ({ productName, price, idFromBackend }) => {
  return (
    <shoppingCartContext.Consumer>
      {({ addToCart }) => (
        <button
          className="addToCartButton"
          onClick={() => addToCart({ productName, price, idFromBackend })}
        >
          Add To Cart
        </button>
      )}
    </shoppingCartContext.Consumer>
  );
};

export default addToCartButton;
