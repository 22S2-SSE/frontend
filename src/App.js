// import logo from './logo.svg';
import "./App.css";
import React, { useState } from 'react';
import { ReactComponent as ReactLogo } from "./assets/Dating.svg";
import SignInForm from "./LoginPage/SignInForm";
import SignUpForm from "./LoginPage/SignUpForm";

function App() {
  const [ifDisplaySignInForm, setIfDisplaySignInForm] = useState(false)
  return (
    <div className="App">
      <div className="App-background">
        <ReactLogo className="App-icon" />
        {/* form */}
        <div className="bg-zinc-200 rounded-lg w-1/3 h-96 flex flex-col  justify-evenly items-center">
          {/* <SignInForm /> */}
          {ifDisplaySignInForm ? <SignInForm /> : <SignUpForm/>}
        </div>
      </div>
    </div>
  );
}

export default App;
