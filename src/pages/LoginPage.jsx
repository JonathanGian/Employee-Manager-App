import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios"; // For server requests
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            // Fetch credentials from the server
            const response = await axios.get("http://localhost:3001/users"); // Replace with your server's endpoint
            const users = response.data;

            // Validate username and password
            const user = users.find(
                (user) => user.username === username && user.password === password
            );

            if (user) {
                login(username); // Log the user in
                setError(null); // Clear any previous error
                navigate("/welcome")
            } else {
                setError("Invalid username or password");
            }
        } catch (err) {
            console.error("Error fetching users:", err);
            setError("An error occurred. Please try again later.");
        }
    };

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
                Login
            </Typography>
            {error && (
                <Typography
                    variant="body2"
                    color="error"
                    sx={{ marginBottom: 2, textAlign: "center" }}
                >
                    {error}
                </Typography>
            )}
            <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ marginBottom: 2, width: "300px" }}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ marginBottom: 2, width: "300px" }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{ textTransform: "none" }}
            >
                Log In
            </Button>
        </Box>
    );
};

export default LoginPage;