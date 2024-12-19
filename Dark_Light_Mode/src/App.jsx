import React, { useState, createContext, useContext } from "react";
import "./App.css";

const AppContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`form-container ${isDarkTheme ? "dark" : "light"}`}>
        <div className="form-header">
          <h2>Amazing Service</h2>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? "☀️" : "🌙"}
          </button>
        </div>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Log In</button>
          <div className="divider">OR</div>
          <button type="button" className="create-account">
            Create Account
          </button>
        </form>
      </div>
    </AppContext.Provider>
  );
};

export default App;
