
import React, { useState } from 'react';
import logo from './logo.svg';
import firebase from "./utils/Firebase";
import 'firebase/auth'
import styled from 'styled-components';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';



import './styles/variables.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

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
        <UserLogged>
          <h1>You are logged</h1>
          <button onClick={ signOut}>Sign out</button>
        </UserLogged>
      )}
      <ToastContainer
      position="top-center"
      autoClose={5000}
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

const UserLogged = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
