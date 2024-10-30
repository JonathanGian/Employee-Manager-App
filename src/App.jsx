import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx"
import { Header } from './components/Header/Header.jsx'

function App() {
  
  return (
    <>
     <div id='page'>
      <Header/>
    <main>
     <EmployeeList />
     </main>
     <Footer/>
     </div>
    </>
  )
}

export default App
