import React from 'react';
import './DocumentCard.css';

interface DocumentCardProps {
  title: string;
  subtitle?: string;
  maxSize?: string;
  description?: string;
  className?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ 
  title, 
  subtitle, 
  maxSize, 
  description,
  className = '' 
}) => {
  return (
    <div className={`document-card ${className}`}>
      <div className="document-content">
        <h3 className="document-title">{title}</h3>
        {subtitle && (
          <p className="document-subtitle">{subtitle}</p>
        )}
        {maxSize && (
          <p className="document-size">{maxSize}</p>
        )}
        {description && (
          <p className="document-description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;
