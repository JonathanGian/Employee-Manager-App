import React, { useState } from "react";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useAxios from "../../services/useAxios";


const AddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    sector: "",
    startDate: "",
    email: "",
  });


 const {post} = useAxios("https://json-server-54mh.onrender.com");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // "success" or "error"
// Keeps tghe form data in sync with the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* Submiting new employee */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await post("employees", formData); // Use useAxios to make the POST request
      setSnackbarMessage("Employee added successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setFormData({
        name: "",
        role: "",
        sector: "",
        startDate: "",
        email: "",
      });
    } catch (error) {
      console.error("Error adding employee:", error);
      setSnackbarMessage("An error occurred while adding the employee.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
/* Close snackbar */
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Add New Employee
      </Typography>
      <Grid container rowSpacing={2} columns={12}>
        {/* Name Field */}
        <Grid size={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Role Field */}
        <Grid size={12}>
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Sector Field */}
        <Grid size={12}>
          <TextField
            fullWidth
            label="Sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Email Field */}
        <Grid size={12}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Start Date Field */}
        <Grid size={12}>
          <TextField
            fullWidth
            variant="filled"
            type="date"
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>

        {/* Submit Button */}
        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#155a9a",
              },
            }}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddForm;