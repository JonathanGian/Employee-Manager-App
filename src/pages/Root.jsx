import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Root.css"
import { employees as initialData} from "../data/employees";
import { useState } from "react";
const Root = () => {
    const[employees, setEmployees]= useState(initialData);

    const addEmployee = (newEmployee) => {
        setEmployees((prev) => {
          console.log("New employee added:", newEmployee);
          return [...prev, newEmployee];
        });
      };
    return (
        <div id="rootpage">
            <Header/>
            <Outlet context={{employees, addEmployee}}/>
            <Footer/>
      </div>
    );
};

export default Root;