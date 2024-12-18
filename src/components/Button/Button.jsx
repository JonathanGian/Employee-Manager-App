import * as React from 'react';
import Button from '@mui/material/Button';


const ButtonUsage = ({text,onClick, variant="outlined", role,color,type="button"})=>{
    return (
        <Button variant={variant} color={color}
        sx={{
    fontFamily: "'Chakra Petch', serif",
  }}
  className={role} onClick={onClick} type={type}>{text}</Button>
    );
};

export default ButtonUsage;