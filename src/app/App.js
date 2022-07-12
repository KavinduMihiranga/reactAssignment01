import React from "react";
import HomePage from "../pages/Home"
import Login from "../pages/session/Login";
import {Routes,Route} from "react-router-dom"
import NotFound from "../pages/session/NotFound";
import FlexBoxLayout from "../pages/layouts/FlexBox";
import GridLayout from "../pages/layouts/Grid";
import Customer from "../pages/Customer";
import Item from "../pages/Item";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='customer' element={<Customer/>}/>
        <Route path='item' element={<Item/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
