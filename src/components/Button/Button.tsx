import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    onClick?: () => void; 
    text: string;
    className?: string; 
    to?: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className = '', to }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to); 
        } else if (onClick) {
            onClick(); 
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className={`px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition duration-300 ${className}`}>
            {text}
        </button>
    );
};

export default Button;