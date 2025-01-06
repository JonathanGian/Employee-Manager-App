import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box,Avatar,MenuItem,Menu } from '@mui/material';
import { NavLink,useNavigate } from "react-router-dom";
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
export default function Header() {
  const { user, logout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    handleMenuClose();
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: { xs: '10px 20px', sm: '15px 40px' },
        }}
      >
        {/* Left Section: App Title */}
        <Typography
          variant="h5"
          component={NavLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: '1.5px',
          }}
        >
          Employee Manager App
        </Typography>
        
        {/* Right Section: Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
          }}
        >
          <Button
            component={NavLink}
            to="/employees"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&.active': {
                color: 'secondary.main',
              },
            }}
          >
            Employees
          </Button>
          <Button
            component={NavLink}
            to="/form"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&.active': {
                color: 'secondary.main',
              },
            }}
          >
            Add New
          </Button>
          {user ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ bgcolor: "secondary.main", cursor: "pointer" }}
              onClick={handleMenuOpen}
            >
              {user.charAt(0).toUpperCase()} {/* Show first letter of the username */}
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
             
            >
              <MenuItem onClick={() => navigate("/welcome")}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}