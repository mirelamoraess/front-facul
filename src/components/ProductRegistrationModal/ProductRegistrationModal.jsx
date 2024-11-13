import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, ButtonLink } from '../Index';
import "./ProductRegistrationModal.css";

const ProductRegistrationModal = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState('');
  const [productImage, setProductImage] = useState(null);
  
  // Usando o hook navigate para redirecionar
  const navigate = useNavigate();

  // Função para atualizar a imagem do produto ao ser carregada
  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  if (!isOpen) return null;

  // Fecha o modal ao clicar fora do conteúdo
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };

  // Função para enviar os dados e redirecionar
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulando o envio dos dados
    console.log("Nome do Produto:", productName);
    console.log("Valor do Produto:", productValue);
    if (productImage) {
      console.log("Imagem do Produto:", productImage.name);
    }

    // Redireciona para a página de cadastro de produto após o submit
    navigate('/cadastro-produto');
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content-client-registration">
        <h3 style={{ textAlign: 'center' }}>Cadastrar novo produto</h3>
        <form className="modal-form-product" onSubmit={handleFormSubmit}>
          <div className="modal-column">
            <Input
              label='Nome do produto'
              id='name'
              placeholder='Paracetamol'
              className="input-style"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Input
              label='Valor'
              id='value'
              placeholder='R$ 20,00'
              className="input-style"
              value={productValue}
              onChange={(e) => setProductValue(e.target.value)}
            />
            <Input
              label="Imagem do Produto"
              type="file"
              id="productImage"
              accept="image/*"
              onChange={handleProductImageChange}
            />

            <button className='custom-button' type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductRegistrationModal;
