import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./Form.css"

const Form = () => {
  // Access `addEmployee` function from Outlet context
  const { addEmployee } = useOutletContext();
  
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    sector: "",
    startDate: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { ...formData, id: Date.now() }; 
    addEmployee(newEmployee);
    setFormData({
      name: "",
      role: "",
      sector: "",
      startDate: "",
      email: "",
    });
  };

  return (
    <form id="addemp" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Sector:</label>
        <input
          type="text"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  
  );
};

export default Form;