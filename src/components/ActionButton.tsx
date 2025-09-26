import React from 'react';
import './ActionButton.css';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ 
  icon, 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = '' 
}) => {
  return (
    <button 
      className={`action-button ${variant} ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="button-icon">
        {icon}
      </div>
      <span className="button-label">{label}</span>
    </button>
  );
};

export default ActionButton;
