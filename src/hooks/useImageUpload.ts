import { useState, useRef } from 'react';

interface UseImageUploadReturn {
  imageUrl: string | null;
  fileName: string | null;
  hasImage: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleAddImage: () => void;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [hasImage, setHasImage] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Verificar se é uma imagem
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        return;
      }

      // Verificar tamanho do arquivo (máximo 4MB)
      const maxSize = 4 * 1024 * 1024; // 4MB em bytes
      if (file.size > maxSize) {
        alert('O arquivo deve ter no máximo 4MB.');
        return;
      }

      // Criar URL para preview
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setFileName(file.name);
      setHasImage(true);
    }
  };

  const handleRemoveImage = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl(null);
    setFileName(null);
    setHasImage(false);

    // Limpar o input file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    imageUrl,
    fileName,
    hasImage,
    fileInputRef,
    handleAddImage,
    handleFileSelect,
    handleRemoveImage,
  };
};
