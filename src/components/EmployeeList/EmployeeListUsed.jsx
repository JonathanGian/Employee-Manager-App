import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";
import { employees } from "../../data/employees.js";



export function EmployeeList() {

    return (
      <div className="EmployeeList">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}          
            {...employee}
          />
        ))}
      </div>
    );
  }
  
  export default EmployeeList;