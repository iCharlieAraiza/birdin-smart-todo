import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "./utils/Firebase";
import 'firebase/auth'
import styled from 'styled-components';
import Auth from './pages/Auth';
//require('firebase/auth')


function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadApp, setReloadApp] = useState(false);

  firebase.auth().onAuthStateChanged(currentUser => {
    if (!currentUser) {
      firebase.auth().signOut();
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  });

  const signOut = () => {
    firebase.auth().signOut();
  }

  return !user ? <Auth /> : (
    <UserLogged>
      <h1>You are logged</h1>
      <button onClick={() => signOut}>Sign out</button>
    </UserLogged>
  );

  return <h1>Hello</h1>
}

const UserLogged = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
