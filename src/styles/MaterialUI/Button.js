import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant = 'contained', color = 'primary', onClick, ...rest }) => {
    const customStyles = {
        margin: '8px 16px',
        backgroundColor: '#023A4E',
        color: 'white',

        // Add any other custom styles as needed
    };

    return (
        <MuiButton
            variant={variant}
            color={color}
            onClick={onClick}
            style={customStyles}
            {...rest}>
            {children}
        </MuiButton>
    );
};

export default Button;