import React, { useState } from "react";
 import "./EmployeeCard.css";
import useAxios from "../../services/useAxios";
import { Modal, Box, Button, TextField, Typography, Card, CardContent, CardActions, Avatar, CardHeader } from "@mui/material";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
import { useNavigate } from "react-router-dom";

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
  const {isProbation,isAnniversary,} = useEmployeeStatus(startDate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ 
  name,
  role,
  sector,
  email,
  startDate });
  const { put } = useAxios("http://localhost:3001"); // Custom hook for Axios requests
const navigate = useNavigate();

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
      if (onUpdate) onUpdate(updatedEmployee); 
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };
    // Handle navigation to details page
    const handleSeeMore = () => {
      navigate(`/details/${id}`); // Navigate to the details page for this employee
    };
  

  return (
<Card  sx={{ maxWidth: 400, margin: "16px auto", padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <CardHeader title={name} color="text.primary" /> 
        <Avatar
          src={avatarUrl}
          alt={`${name}'s avatar`}
          sx={{ width: 100, height: 100, margin: "0 auto", marginBottom: 2 }}
        />
      
        <Typography variant="body1" color="text.secondary">
          Role: {role}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sector: {sector}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: {email}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Start Date: {startDate}
        </Typography>
        {isProbation && (
          <Typography variant="body2" color="warning.main">
            On Probation
          </Typography>
        )}
        {isAnniversary && (
          <Typography variant="body2" color="success.main">
            Work Anniversary! 🎉
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={toggleModal}>
          Edit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleSeeMore}>
          See More
        </Button>
      </CardActions>

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
    </Card>
  );
};

export default EmployeeCard;