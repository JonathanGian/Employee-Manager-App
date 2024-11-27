import React,{useState} from "react";


const EmployeeForm = ({ employee, onSave, onCancel }) => {
    const [formData, setFormData] = useState(employee);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit Employee</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sector:</label>
          <input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  };
  
  export default EmployeeForm;