import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Login from "./components/Login";
import shoppingCartContext from "./shoppingCartContext";
import ViewCart from "./components/ViewCart";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [cart, setCart] = useState([]);

  const handleLoginChange = event => setFirstName(event.target.value);

  const handleLogin = event => {
    event.preventDefault();
    setCurrentUser(firstName);
  };
  const handleLogout = () => {
    setCurrentUser(null);
  };
  const addToCart = product => {
    setCart([...cart, product]);
  };

  const decrementCartItem = product => {
    const itemToRemove = cart.findIndex(item => product === item.idFromBackend);
    cart.splice(itemToRemove, 1);
    setCart([...cart]);
  };

  const incrementCartItem = product => {
    setCart([...cart, product]);
  };
  return (
    <shoppingCartContext.Provider
      value={{
        siteTitle: "Shelly Snacks!",
        currentUser,
        firstName,
        cart,
        handleLoginChange,
        handleLogin,
        handleLogout,
        addToCart,
        decrementCartItem,
        incrementCartItem
      }}
    >
      <Router>
        <div className="App">
          <div className="header-cart">
            <Link to="/cart">
              <span>{cart.length}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-shopping-cart"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </Link>
          </div>
          <Header />

          <main>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/cart">
                <ViewCart />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    </shoppingCartContext.Provider>
  );
}
