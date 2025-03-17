import React from 'react';

const Button = ({ className = '', title = 'Button', onClick, disabled = false, Icon }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none bg-blue-600 text-white  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {title}
            {Icon && <Icon />}
        </button>
    );
};

export default Button;