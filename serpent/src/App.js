import React from 'react';
import "./App.css"
import Header from "./components/header/Header"
import Middle from "./components/middle/Middle"
import Foot from "./components/foot/Foot"

function App() {
  return (
    <div id="app">
        <Header lang = 'fr' changeLangage = {() => {}}/>
        <Middle/>
        <Foot/>
    </div>
  );
}

export default App;
