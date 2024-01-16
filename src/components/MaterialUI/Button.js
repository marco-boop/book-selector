import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant = 'contained', color = 'primary', onClick, ...rest }) => {
    const customStyles = {
        backgroundColor: '#1e024b', // Specify your desired color
        color: 'white', // Set text color based on your design
        // Add any other custom styles as needed
    };

    return (
        <MuiButton
            variant={variant}
            color={color}
            onClick={onClick}
            {...rest}>
            {children}
        </MuiButton>
    );
};

export default Button;