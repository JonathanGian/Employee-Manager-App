import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";
import { employees } from "../../data/employees.js";
import { useState } from "react";

export function EmployeeList() {

  return (
    <div className="EmployeeList">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}          
          name={employee.name}
          initRole={employee.role}       // Pass initial role as `initRole`
          sector={employee.sector}
          age={employee.age}             
          startDate={employee.startDate}
          email={employee.email}
        />
      ))}
    </div>
  );
}

export default EmployeeList;