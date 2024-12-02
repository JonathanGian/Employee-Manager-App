import * as React from 'react';
import Button from '@mui/material/Button';


const ButtonUsage = ({text,onClick, type = "button", role })=>{
    return (
        <Button variant="outlined"
        sx={{
    fontFamily: "'Chakra Petch', serif",
  }}
  className={role} onClick={onClick} type = {type}>{text}</Button>
    );
};

export default ButtonUsage;