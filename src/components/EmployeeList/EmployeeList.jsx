import React, { useEffect, useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard"
import "./EmployeeList.css"

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // State for employee data
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for API errors

  // Fetch all employees from the API on component mount
  useEffect(() => {
    fetch("http://localhost:3001/employees") // Adjust the endpoint as necessary
      .then((response) => {
       
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data); // Set the fetched data
        setIsLoading(false); // Turn off loading indicator
      })
      .catch((err) => {
        console.error("Failed to fetch employees:", err);
        setError(err.message);
        setIsLoading(false); // Turn off loading indicator
      });
  }, []);

  // Function to handle saving changes for a specific employee
  const saveEmployeeChanges = (id, updatedData) => {
    
    fetch(`http://localhost:3001/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        
        console.log("Raw response:", response);
        console.log("API Response Status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedEmployee) => {
        console.log(updatedEmployee);
        // Update the employee in the state
        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) =>
            employee.id === id ? updatedEmployee : employee
          )
        );
        console.log("Employee updated successfully:", updatedEmployee);
      })
      .catch((err) => {
        console.error("Failed to update employee:", err);
      });
  };

  if (isLoading) {
    return <h2>Loading employees...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Roster</h2>
      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            sector={employee.sector}
            startDate={employee.startDate}
            email={employee.email}
            onSave={(updatedData) => saveEmployeeChanges(employee.id, updatedData)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList; 