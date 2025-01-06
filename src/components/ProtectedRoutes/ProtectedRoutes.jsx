import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Import your UserContext hook

const ProtectedRoute = ({ children }) => {
  const { user } = useUser(); // Check if the user is logged in

  if (!user) {
    // If no user is logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the child component
  return children;
};

export default ProtectedRoute;