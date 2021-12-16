import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import PublicPreSale from "./components/PublicPreSale";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <PublicPreSale />
    </BrowserRouter>
  );
}

export default App;
