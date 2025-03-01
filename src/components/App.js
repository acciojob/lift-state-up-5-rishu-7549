import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Loginform";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      {/* Use the correct component name */}
      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
}

export default App;