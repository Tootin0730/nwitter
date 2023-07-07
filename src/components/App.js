import React, { useState } from 'react';
import AppRouter from "./Router";
import firebase from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return( 
    <>
      <AppRouter isLoggedIn={isLoggedIn} />;
      <footer>&copy; Nwitter {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
