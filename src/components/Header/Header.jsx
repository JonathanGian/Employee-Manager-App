import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from "react-router-dom";

export default function Header() {
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
          <Button
            component={NavLink}
            to="/login"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&.active': {
                color: 'secondary.main',
              },
            }}
          >
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}