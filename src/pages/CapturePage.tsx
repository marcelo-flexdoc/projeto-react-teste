import React, { useState } from 'react';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator';
import ActionButton from '../components/ActionButton';
import ImagePreview from '../components/ImagePreview';
import { useImageUpload } from '../hooks/useImageUpload';
import './CapturePage.css';

const CapturePage: React.FC = () => {
  const [showCaptureButtons, setShowCaptureButtons] = useState(true);
  
  const {
    imageUrl,
    fileName,
    hasImage,
    fileInputRef,
    handleAddImage,
    handleFileSelect,
    handleRemoveImage,
  } = useImageUpload();

  const handleTakePhoto = () => {
    console.log('Tirar foto');
    setShowCaptureButtons(false);
    // Implementar lógica para tirar foto
  };

  const handleSelectFromGallery = () => {
    console.log('Buscar na galeria');
    setShowCaptureButtons(false);
    handleAddImage();
  };

  const handleSendPDF = () => {
    console.log('Enviar PDF');
    setShowCaptureButtons(false);
    // Implementar lógica para enviar PDF
  };

  const handleSendImages = () => {
    if (!hasImage) {
      alert('Por favor, adicione uma imagem antes de enviar.');
      return;
    }
    console.log('Enviar imagem(s)');
    // Implementar lógica para enviar imagens
  };

  const handleBackClick = () => {
    setShowCaptureButtons(true);
    handleRemoveImage(); // Limpar imagem ao voltar
  };

  return (
    <div className="capture-page">
      <Header 
        title="CAIXA Bet" 
        showBackButton={!showCaptureButtons}
        onBackClick={handleBackClick}
      />
      
      <ProgressIndicator 
        currentStep={4} 
        totalSteps={4}
        stepLabels={['Dados', 'Verificação', 'Análise', 'Documentação']}
      />
      
      <main className="capture-main">
        <div className="capture-container">
          <div className="capture-header">
            <h2 className="capture-title">Documentação</h2>
            <p className="capture-subtitle">
              {showCaptureButtons ? 'Captura do documento' : 'Upload de imagem'}
            </p>
          </div>
          
          {!showCaptureButtons && (
            <ImagePreview
              imageUrl={imageUrl || undefined}
              fileName={fileName || undefined}
              onRemove={handleRemoveImage}
              onAddImage={handleAddImage}
              hasImage={hasImage}
            />
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
          
          {showCaptureButtons && (
            <>
              <div className="capture-instructions">
                <p className="instructions-text">Selecione a forma de captura:</p>
              </div>
              
              <div className="capture-actions">
                <ActionButton
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  }
                  label="Tirar foto"
                  onClick={handleTakePhoto}
                />
                
                <ActionButton
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21,15 16,10 5,21"/>
                    </svg>
                  }
                  label="Buscar na Galeria"
                  onClick={handleSelectFromGallery}
                />
                
                <ActionButton
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  }
                  label="Enviar PDF"
                  onClick={handleSendPDF}
                />
              </div>
            </>
          )}
          
          {!showCaptureButtons && (
            <div className="capture-send">
              <button 
                className={`send-button ${hasImage ? 'active' : 'disabled'}`}
                onClick={handleSendImages}
                disabled={!hasImage}
              >
                Enviar foto(s)
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CapturePage;
