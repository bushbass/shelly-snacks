import React from "react";
import shoppingCartContext from "../shoppingCartContext";

const LoginForm = () => {
  return (
    <shoppingCartContext.Consumer>
      {({ firstName, handleLogin, handleLoginChange }) => (
        <form className="buyPageForm" onSubmit={handleLogin}>
          <label htmlFor="firstName">Enter name to begin</label>
          <input
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleLoginChange}
          />

          <input type="submit" />
        </form>
      )}
    </shoppingCartContext.Consumer>
  );
};

export default LoginForm;
