import React from 'react';
import { Link } from 'react-router-dom';

interface LinkComponentProps {
    to: string;
    text: string;
    className?: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ to, text, className = '' }) => {
    return (
        <Link to={to}>
            <button className={`px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition duration-300 ${className}`}>
                {text}
            </button>
        </Link>
    );
};

export default LinkComponent;