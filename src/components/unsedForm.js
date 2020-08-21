import React, { useState } from "react";

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("user info from form", { firstName, lastName, details });
  };

  return (
    <form className="buyPageForm" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={event => setFirstName(event.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={event => setLastName(event.target.value)}
      />
      <label htmlFor="details">Notes</label>
      <textarea
        name="details"
        value={details}
        placeholder="Add additional info to this page "
        onChange={event => setDetails(event.target.value)}
      />
      <input type="submit" onSubmit={handleSubmit} />
    </form>
  );
};

export default LoginForm;
