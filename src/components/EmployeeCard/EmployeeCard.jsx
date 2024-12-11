import React, { useState } from "react";
 import "./EmployeeCard.css";
import useAxios from "../../services/useAxios";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
const EmployeeCard = ({
  id,
  name,
  role,
  sector,
  startDate,
  email,
  avatarUrl,
  onUpdate,
  fetchEmployees
}) => {
  const {
    yearsWorked,
    monthsWorked,
    daysUntilNextAnniversary,
    isProbation,
    isAnniversary,
  } = useEmployeeStatus(startDate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ 
  name,
  role,
  sector,
  email,
  startDate });
  const { put } = useAxios("http://localhost:3001"); // Custom hook for Axios requests

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle form input changes
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }; 

  // Handle save operation
  const handleSave = async () => {
    try {
      const updatedEmployee = await put(`employees/${id}`, formData).then(()=>fetchEmployees()); 
      if (onUpdate) onUpdate(updatedEmployee); // Notify parent about the update
      console.log("Before toggle:", isModalOpen);
      toggleModal();
    //  window.location.reload();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
    <div className="EmployeeCard">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="employee-avatar"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Sector: {sector}</p>
      <p>Email: {email}</p>
      <p>Start Date: {startDate}</p>
      {isProbation && <p style={{ color: "orange" }}>On Probation</p>}
      {isAnniversary && <p style={{ color: "green" }}>Work Anniversary! 🎉</p>}
      <Button variant="contained" onClick={toggleModal}>
        Edit
      </Button>
    </div>
      {/* Modal for editing employee details */}
      <Modal open={isModalOpen} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom fontFamily={"Chakra Petch"}>
            Edit Employee Details
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{ mr: 2, bgcolor: "primary.main" }}
          >
            Save
          </Button>
          <Button variant="outlined" onClick={toggleModal}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EmployeeCard;