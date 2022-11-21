import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Champions from "./pages/Champions";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/:id" element={ <Champions /> } />
    </Routes>
  );
}

export default App;
