import React, { useContext, useState, useEffect } from "react";
import shoppingCartContext from "../shoppingCartContext";
import {
  combineCart,
  convertCentsToDollars,
  calculateSubtotal
} from "../helpers";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const cart = useContext(shoppingCartContext);

  const [combinedCurrentCart, setCombinedcart] = useState(
    combineCart(cart.cart)
  );
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  useEffect(() => {
    setCombinedcart(combineCart(cart.cart));
  }, [cart]);

  useEffect(() => setSubtotal(calculateSubtotal(combinedCurrentCart)), [
    combinedCurrentCart,
    cart
  ]);
  useEffect(() => setTax(subtotal * 0.06625), [subtotal]);
  return (
    <>
      <p>
        {cart.currentUser ? `${cart.firstName}'s` : null} Current Shopping Cart{" "}
        {cart.currentUser ? (
          <span onClick={cart.handleLogout} className="notCurrentUser">
            (not {cart.currentUser}?)
          </span>
        ) : (
          <span onClick={cart.handleLogout} className="notCurrentUser">
            <Link to="/login">(Care to Login?)</Link>
          </span>
        )}
      </p>
      <ul className="cartList">
        <table className="cartTable">
          <thead>
            <tr>
              <td className="tableProductName">Product</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Cost</td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(combinedCurrentCart).map((item) => (
              <tr className="cartProductRow" key={uuidv4()}>
                <td>{item[0]}</td>
                <td>
                  <button
                    onClick={() => {
                      cart.decrementCartItem(item[1][2]);
                    }}
                  >
                    -
                  </button>
                  {item[1][0]}
                  <button
                    onClick={() => {
                      const product = {
                        productName: item[0],
                        price: item[1][1],
                        idFromBackend: item[1][2]
                      };
                      cart.incrementCartItem(product);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>{convertCentsToDollars(item[1][1])}</td>
                <td>{convertCentsToDollars(item[1][1] * item[1][0])}</td>
              </tr>
            ))}
            <tr className="bottomOfTable">
              {/* {cart.cart.length?<td colSpan="2" />:(<td></td><td><button onClick={cart.emptyCart} className="addToCartButton">Empty Cart</button></td>)} */}
              {cart.cart.length > 0 ? (
                <>
                  <td> </td>
                  <td>
                    <button
                      onClick={cart.emptyCart}
                      className="addToCartButton emptyCartButton"
                    >
                      Empty Cart
                    </button>
                  </td>
                </>
              ) : (
                <td colSpan="2" />
              )}

              <td>Subtotal</td>
              <td>{convertCentsToDollars(subtotal)}</td>
            </tr>
            <tr>
              <td colSpan="2" />
              <td>6.625% NJ sales tax</td>
              <td>{convertCentsToDollars(tax)}</td>
            </tr>
            <tr>
              <td colSpan="2" />
              <td>Total</td>
              <td>{convertCentsToDollars(subtotal + tax)}</td>
            </tr>
          </tbody>
        </table>
      </ul>
    </>
  );
};

export default ViewCart;
