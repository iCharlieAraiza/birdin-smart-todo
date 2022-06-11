
import React, { useState } from 'react';
import firebase from "./utils/firebase";
import 'firebase/auth'
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
//import 'semantic-ui-css/semantic.min.css' 

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

  if (isLoading) {
    return null;
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
