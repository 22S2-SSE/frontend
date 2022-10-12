// import logo from './logo.svg';
import "./index.css";
import React, { useState } from 'react';
import { ReactComponent as ReactLogo } from "../assets/Dating.svg";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function LoginPage() {
  const [ifDisplaySignInForm, setIfDisplaySignInForm] = useState(true)

  return (
    <div className="App">
      <div className="App-background">
        <ReactLogo className="App-icon" />
        {/* form */}
        <div className="bg-zinc-200 rounded-lg w-1/3 h-96 flex flex-col  justify-evenly items-center">
          {/* <SignInForm /> */}
          {ifDisplaySignInForm ? <SignInForm onClickSignUp={() => setIfDisplaySignInForm(!ifDisplaySignInForm)}/> : <SignUpForm onClickBackButton={() => setIfDisplaySignInForm(!ifDisplaySignInForm)}/>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
