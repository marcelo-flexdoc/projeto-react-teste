import React from 'react';
import './ImagePreview.css';

interface ImagePreviewProps {
  imageUrl?: string;
  fileName?: string;
  onRemove: () => void;
  onAddImage: () => void;
  hasImage: boolean;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  imageUrl, 
  fileName, 
  onRemove, 
  onAddImage,
  hasImage 
}) => {
  return (
    <div className="image-preview-container">
      <div className="image-preview-frame">
        {hasImage && imageUrl ? (
          <div className="image-preview-content">
            <img 
              src={imageUrl} 
              alt="Documento carregado" 
              className="preview-image"
            />
            <div className="image-overlay">
              <button 
                className="remove-button"
                onClick={onRemove}
                title="Remover imagem"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3,6 5,6 21,6"/>
                  <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
                  <line x1="10" y1="11" x2="10" y2="17"/>
                  <line x1="14" y1="11" x2="14" y2="17"/>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="image-placeholder">
            <div className="placeholder-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
            </div>
            <p className="placeholder-text">Sem imagem</p>
          </div>
        )}
      </div>
      
      {hasImage && fileName && (
        <div className="image-info">
          <p className="image-filename">{fileName}</p>
        </div>
      )}
      
      <button className="add-image-button" onClick={onAddImage}>
        <div className="button-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
        <span className="button-text">Adicionar imagem</span>
      </button>
    </div>
  );
};

export default ImagePreview;
