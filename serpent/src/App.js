import React from 'react';
import "./App.css"
import { Provider } from 'react-redux'
import Store from './components/store/config'
import Header from "./components/header/Header"
import Middle from "./components/middle/Middle"
import Foot from "./components/foot/Foot"


function App() {
  return (
    <Provider store = {Store}>
        <div id="app">
            <Header/>
            <Middle/>
            <Foot/>
        </div>
    </Provider>
  );
}

export default App;
