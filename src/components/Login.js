import React from "react";
import LoginForm from "./LoginForm";
import shoppingCartContext from "../shoppingCartContext";

const Login = () => {
  return (
    <shoppingCartContext.Consumer>
      {({ currentUser, handleLogout }) => (
        <>
          <h3>Login</h3>

          {currentUser ? (
            <>
              Hello {currentUser}
              <button onClick={handleLogout}>Not {currentUser}?</button>
            </>
          ) : (
            <LoginForm />
          )}
        </>
      )}
    </shoppingCartContext.Consumer>
  );
};

export default Login;
