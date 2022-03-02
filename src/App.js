import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "./utils/Firebase";
//import 'firebase/auth'
import styled from 'styled-components';
//require('firebase/auth')


function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadApp, setReloadApp] = useState(false);

  firebase.auth().onAuthStateChanged(user => {
    console.log('user', user);
  });

  return <h1>Hello</h1>
}



export default App;
