import React, { useEffect, useState } from "react";
import "./App.css";

import MyNavbar from "./Components/MyNavbar";

import { Provider } from "react-redux";
import store from "./redux/store";
import FilmsGridWrapper from "./Components/FilmsGridWrapper"
const API_KEY = "ce762116";


function App() {
  
  return <Provider store={store}>

   <div className="App">
    <MyNavbar/>
   <FilmsGridWrapper/>
    </div>
    </Provider>
    ;
}

export default App;
