import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonUsage from "../components/Button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleGoHome = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f4f6f8", // Light gray background
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src="/Cat.gif"
        alt="Funny Cat GIF"
        sx={{
          maxWidth: "300px",
          marginBottom: 3,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontFamily: "'Chakra Petch', sans-serif",
          marginBottom: 1,
        }}
      >
        Oops! Page Not Found
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          marginBottom: 3,
        }}
      >
        You have encountered an error while looking for the correct page.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <ButtonUsage
          variant="contained"
          color="primary"
          onClick={handleGoBack}
          sx={{
            textTransform: "none",
            fontFamily: "'Chakra Petch', sans-serif",
          }}
          text={"Go Back"}
        />
       
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGoHome}
          sx={{
            textTransform: "none",
            fontFamily: "'Chakra Petch', sans-serif",
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;