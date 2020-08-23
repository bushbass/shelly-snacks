import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './styles.css';
import Header from './components/Header';
import HeaderCartLink from './components/HeaderCartLink';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Login from './components/Login';
import shoppingCartContext from './shoppingCartContext';
import ViewCart from './components/ViewCart';

export default function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [cart, setCart] = useState([]);

  const handleLoginChange = (event) => setFirstName(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();
    setCurrentUser(firstName);
  };
  const handleLogout = () => {
    setCurrentUser(null);
  };
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const emptyCart = () => {
    setCart([]);
  };

  const decrementCartItem = (product) => {
    const itemToRemove = cart.findIndex(
      (item) => product === item.idFromBackend
    );
    cart.splice(itemToRemove, 1);
    setCart([...cart]);
  };

  const incrementCartItem = (product) => {
    setCart([...cart, product]);
  };
  return (
    <shoppingCartContext.Provider
      value={{
        siteTitle: 'Shelly Snacks!',
        currentUser,
        firstName,
        cart,
        handleLoginChange,
        handleLogin,
        handleLogout,
        addToCart,
        emptyCart,
        decrementCartItem,
        incrementCartItem,
      }}
    >
      <Router>
        <div className='App'>
          <HeaderCartLink />
          <Header />

          <main>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/cart'>
                <ViewCart />
              </Route>
              <Route path='/'>
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
