
import React, { useState } from 'react';
import logo from './logo.svg';
import firebase from "./utils/firebase";
import 'firebase/auth'
import styled from 'styled-components';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';


import './styles/variables.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import LoggedLayout from './layout/LoggedLayout';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadApp, setReloadApp] = useState(false);

  firebase.auth().onAuthStateChanged(currentUser => {
    if (!currentUser?.emailVerified) {
      firebase.auth().signOut();
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  });

  const signOut = () => {
    firebase.auth().signOut();
    setUser(null);
  }

  return (
    <>
      {!user ? <Auth /> : (
        <LoggedLayout user={user} />
      )}
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      theme={'dark'}
      />
    </>
  )
  return <h1>Hello</h1>
}

export default App;
