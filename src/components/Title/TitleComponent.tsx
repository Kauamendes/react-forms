import React from 'react';

interface TitleProps {
    level: 'h1' | 'h2' | 'h3';
    text: string;
    className?: string;
    bold?: boolean;
}

const Title: React.FC<TitleProps> = ({ level, text, className = '', bold = false }) => {
    const Tag = level;

    const sizeClass = 
        level === 'h1' ? 'text-4xl' :
        level === 'h2' ? 'text-3xl' :
        level === 'h3' ? 'text-2xl' : '';

    return (
        <Tag className={`${sizeClass} ${bold ? 'font-bold' : ''} mb-4 ${className}`}>
            {text}
        </Tag>
    );
};

export default Title;