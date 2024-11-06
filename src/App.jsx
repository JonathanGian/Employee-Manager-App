import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx"
import { Header } from './components/Header/Header.jsx'
import { useState } from 'react'

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const loginHandler = ()=>{
    setIsLoggedIn(!isLoggedin)
  }
  return (
    <div className='app'>
    <h1>Employee Manager App</h1>
    {isLoggedin ? (
      <div>
      <EmployeeList/>

      <button onClick={loginHandler}>Log Out</button>
  </div>
    ):(
    <button onClick={loginHandler}>Log In</button>)}
    </div>
  )
}

export default App
