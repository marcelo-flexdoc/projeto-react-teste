import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator';
import './CaptureIntroPage.css';

const CaptureIntroPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/capture');
  };

  return (
    <div className="capture-intro-page">
      <Header title="Bagual Bet" />
      
      <ProgressIndicator 
        currentStep={4} 
        totalSteps={4}
        stepLabels={['Dados', 'Verificação', 'Análise', 'Documentação']}
      />
      
      <main className="capture-intro-main">
        <div className="capture-intro-container">
          <div className="capture-intro-header">
            <h2 className="capture-intro-title">Documentação</h2>
            <p className="capture-intro-subtitle">Envio de documentos</p>
          </div>
          
          <div className="capture-intro-description">
            <p className="description-text">
              Para concluir seu cadastro, precisamos verificar sua identidade através do envio do documento de identificação.
            </p>
          </div>
          
          <div className="capture-intro-tips">
            <div className="tip-item">
              <div className="tip-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M6 9h12"/>
                  <path d="M6 13h8"/>
                </svg>
              </div>
              <p className="tip-text">
                Enquadre a imagem ao centro e sempre no sentido do documento.
              </p>
            </div>
            
            <div className="tip-item">
              <div className="tip-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <circle cx="12" cy="9" r="2"/>
                </svg>
              </div>
              <p className="tip-text">
                Se possível, retire a capa de proteção do documento para evitar reflexos na fotografia.
              </p>
            </div>
            
            <div className="tip-item">
              <div className="tip-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M6 9h12"/>
                  <path d="M6 13h8"/>
                  <path d="M6 15h4"/>
                </svg>
              </div>
              <p className="tip-text">
                Certifique-se de que os dados dos documentos estão legíveis.
              </p>
            </div>
          </div>
          
          <div className="capture-intro-action">
            <button className="continue-button" onClick={handleContinue}>
              Continuar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaptureIntroPage;
