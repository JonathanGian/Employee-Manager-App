import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import EmployeeList from "./components/EmployeeList/EmployeeListUsed.jsx"
import { Header } from './components/Header/Header.jsx'
import { useState } from 'react'

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const loginHandler = ()=>{
    setIsLoggedIn(!isLoggedin)
  }
  return (
    <div className='app'>
      <Header/>
    <h1>Employee Manager App</h1>
    {isLoggedin ? (
      <div>
        <button onClick={loginHandler}>Log Out</button>
      <EmployeeList/>

      <Footer/>  
  </div>
    ):(
    <button onClick={loginHandler}>Log In</button>)}
    <Footer/>
    </div>
  )
    
}

export default App
