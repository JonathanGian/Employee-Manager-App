import React from "react";
import { useUser } from "../context/UserContext";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  console.log("Logged in user:", user);

  if (user?.username === "Margit") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: 3,
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Welcome, Margit!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Here's a special welcome for you!
        </Typography>
        <Box
          component="img"
          src="/welcome.jpg"
          alt="Fox"
          sx={{ width: 200, height: 200, marginBottom: 3 }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ textTransform: "none" }}
        >
          Log Out
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 3,
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Welcome, {user?.username || "Guest"}!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        You are now logged in. Explore the application!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ textTransform: "none" }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default WelcomePage;