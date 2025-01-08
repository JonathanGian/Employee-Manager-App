import React, { useState } from "react";

import useAxios from "../../services/useAxios";
import { Modal, Box, Button, TextField, Typography, Card, CardContent, CardActions, Avatar, CardHeader, Chip } from "@mui/material";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
import { useNavigate } from "react-router-dom";
import StarPurple500TwoToneIcon from '@mui/icons-material/StarPurple500TwoTone';
import ButtonUsage from "../Button/Button";
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
  const { isProbation, isAnniversary, } = useEmployeeStatus(startDate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name,
    role,
    sector,
    email,
    startDate
  });
  const { patch } = useAxios("https://json-server-54mh.onrender.com"); // Custom hook for Axios requests
  const navigate = useNavigate();
  const [promoted, setPromoted] = useState(false);

  /* Colors for different sectors via MUI */
  const sectorColors = {
    Design: "#Fd4440", // Gold
    "Software Developer": "#4CAF50", // Green
    Marketing: "#FF5722", // Orange
    Analytics: "#2196F3", // Blue
    "Human Resources": "#9C27B0", // Purple
    Finance: "#FF9800", // Amber
    Operations: "#03A9F4", // Light Blue
    Support: "#E91E63", // Pink
    "Quality Control": "#607D8B", // Gray
  };


  // Toggle promotion status
  const togglePromotion = () => {
    setPromoted((prev) => !prev);
  };


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
      const updatedEmployee = await patch(`employees/${id}`, formData).then(() => fetchEmployees());
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
    <Card
      sx={{
        maxWidth: 400,
        margin: "16px auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        position: "relative",
        border: `2px solid ${sectorColors[sector] || "#ddd"}`, // Dynamic border color
      }}
    >
      {/* Sector Badge */}
      <Box sx={{ marginTop: 1, justifySelf: "flex-end" }}>
        {sector && (
          <Chip
            label={sector}
            style={{
              backgroundColor: sectorColors[sector] || "#CCCCCC",
              color: "#FFFFFF",
            }}
            size="small"
          />
        )}
      </Box>
      {/* Star Icon in Top Right Corner */}
      {promoted && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 10,
            color: "gold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            Team Lead
          </Typography>
          <StarPurple500TwoToneIcon fontSize="large" />
        </Box>
      )}
      {/* Start of Card */}
      <CardContent>
        <CardHeader
          title={name}
          color="primary.main"
        />
        <Avatar
          src={avatarUrl}
          alt={`${name}'s avatar`}
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            marginBottom: 2,
            border: `2px solid ${sectorColors[sector] || "#ddd"}`
          }}
        />
        {/* Role */}
        <Typography
          variant="body3"
          sx={{ display: "flex", justifyContent: "center" }}>
          {role}
        </Typography>
        {/* Email */}
        <Typography
          variant="body1">
          {email}
        </Typography>
        {/* Start Date */}
        <Typography
          variant="body2"
        >
          <Typography
            component="span"
            
            color="primary">
            Start Date:
          </Typography>{" "}
          {startDate}
        </Typography>


        {/* Notifications */}
        {isProbation && (
          <Typography variant="body1" color="warning.main">
            On Probation
          </Typography>
        )}
        {isAnniversary && (
          <Typography variant="body1" color="success.main">
            Work Anniversary! 🎉
          </Typography>
        )}

      </CardContent>
      <CardActions>

        {/* Edit Button */}
        <ButtonUsage
          variant="contained"
          color="primary"
          onClick={toggleModal}
          text={"Edit"}
        />

        {/* See More Button */}
        <ButtonUsage
          variant="outlined"
          color="secondary"
          onClick={handleSeeMore}
          text={"See More"}
        />


        {/* Promote Button */}
        <ButtonUsage
          variant="contained"
          color={promoted ? "error" : "primary"}
          onClick={togglePromotion}
          text={promoted ? "Demote" : "Promote"}
        />
      </CardActions>

      {/* Modal for editing employee details */}
      <Modal
        open={isModalOpen}
        onClose={toggleModal}>
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
          <Typography
            variant="h6"
            gutterBottom
            fontFamily={"Chakra Petch"}
          >
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