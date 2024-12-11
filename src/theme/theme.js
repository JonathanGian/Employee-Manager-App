// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#ff4081", // Pink
    },
    background: {
      default: "#f4f6f8", // Light gray
      paper: "#ffffff", // White for cards or paper components
    },
    text: {
      primary: "#333333", // Dark gray for primary text
      secondary: "#666666", // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: "'Chakra Petch', 'Libre Caslon Display', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      fontFamily: "'Libre Caslon Display', 'Arial', sans-serif",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontFamily: "hina mincho, serif",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
      fontFamily: "hina mincho, serif"
    },
  },
  shape: {
    borderRadius: 8, // Global border radius for components
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove uppercase text on buttons
        },
      },
    },
  },
});

export default theme;