import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#222', mt: 'auto' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          &copy; {new Date().getFullYear()} Employee Manager App. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}