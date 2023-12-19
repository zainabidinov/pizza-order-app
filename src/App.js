import React from "react";

import Header from "./components/Header";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

export const searchContext = React.createContext("");


function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      {/* to avoid props drilling "useContext" used  */}
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home value={{ searchValue, setSearchValue }} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div> 
      </searchContext.Provider>
    </div>
  );
}

export default App;
