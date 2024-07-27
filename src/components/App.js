import React, { useContext, useState } from "react";
import { AppContext } from "./Context";

const App = () => {
  //   console.log(React);
  const {
    isAuthenticated,
    currentUser,
    items,
    login,
    logout,
    addItems,
    removeItem,
    clearList,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  const handled = () => {
    if (inputValue.trim()) {
      addItems(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div>
      <button id="login-btn" onClick={login}>
        Login
      </button>
      <button id="login-btn" onClick={logout}>
        Signout
      </button>
      <div id="current-user">
        Current user:{currentUser}, isAuthenticated:{" "}
        {isAuthenticated ? "Yes" : "No"}
      </div>
      <input
        id="shopping-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handled}>Add</button>
      <button onClick={clearList} id="clear-list">
        Clear List!
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index} id={`item-${item}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => removeItem(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
