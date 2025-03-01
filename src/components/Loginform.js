import React from "react";

function Login({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    onLogin(); // Calls the parent function to update state
  };

  if (isLoggedIn) {
    return <p>You are already logged in.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;