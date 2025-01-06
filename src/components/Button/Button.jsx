import * as React from 'react';
import Button from '@mui/material/Button';


const ButtonUsage = ({text,onClick, variant="outlined",color,type="button", sx})=>{
    return (
        <Button
        variant={variant}
        color={color}
        sx={sx}
        onClick={onClick}
        type={type}  
        >
        {text}
        </Button>
    );
};

export default ButtonUsage;