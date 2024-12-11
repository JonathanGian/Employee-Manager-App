import React, { useEffect, useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
import useAxios from "../../services/useAxios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); // State for employee data
  const { data, loading, error, get } = useAxios("http://localhost:3001"); 

  // Fetch employees on component mount
  useEffect(() => {
    if (data.length === 0){
      fetchEmployees();
    }
    
  }, []);
  
  const fetchEmployees = async () => {
    try {
      await get("employees");
      console.log("Data:", data);
      setEmployees(data); // Update employees with the fetched data
    } catch (err) {
      console.error("Failed to fetch employees:", err);
    }
  };
  // Conditional rendering based on loading and error states
  if (loading) {
    return <h2>Loading employees...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h2>Roster</h2>
      <div className="employee-list">
        {data.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            sector={employee.sector}
            startDate={employee.startDate}
            email={employee.email}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;