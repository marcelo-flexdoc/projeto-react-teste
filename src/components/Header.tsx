import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  showLogo?: boolean;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showLogo = true, 
  showBackButton = false,
  onBackClick 
}) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          {showBackButton && (
            <button className="back-button" onClick={onBackClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
          )}
          <h1 className="header-title">{title}</h1>
        </div>
        {showLogo && (
          <div className="header-logo">
            <div className="logo-circle">
              <span className="logo-text">Bagual</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
