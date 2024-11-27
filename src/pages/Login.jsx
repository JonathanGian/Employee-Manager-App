import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import EmployeeList from '../components/EmployeeList/EmployeeListUsed'

import { useState } from 'react'
import Button from "../components/Button/Button.jsx";
import { Link } from "react-router-dom";

function Login() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const loginHandler = ()=>{
    setIsLoggedIn(!isLoggedin)
  }
  return (
        <Link to="/employees"><Button text={"Login"}/></Link>
/*     <div id='login'>
      <Header/>
    {isLoggedin ? (
      <div>
        <button onClick={loginHandler}>Log Out</button>
      <EmployeeList/>

  </div>
    ):(
    <button onClick={loginHandler}>Log In</button>)}
    <Footer/>
    </div> */
  )
    
}

export default Login