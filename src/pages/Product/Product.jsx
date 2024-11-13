import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Product.css';
import Image1 from "../../components/Image/remedio.png"; 

// Mock de dados de produtos
const initialProducts = [
  { id: 1, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 10.0, image: Image1 }, 
  { id: 2, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 15.0, image: Image1 },
  { id: 3, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 20.0, image: Image1 },
  { id: 4, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 10.0, image: Image1 },
  { id: 5, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 15.0, image: Image1 },
  { id: 6, name: 'Analgésico e Antitérmico Dipirona Monoidratada 1g', price: 20.0, image: Image1 },
];


function Product({ onAddProduct, onComplete }) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para adicionar produtos selecionados
  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  // Filtra os produtos com base no termo de busca
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-screen">
      {/* Header */}
      <header className="header">
        <div className="logo-login">
          <h1>PARACETAMAL</h1>
        </div>
        <div className="header-center">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        <div className="header-right">
          <button onClick={() => onComplete(selectedProducts)} className="btn complete-btn">
            Concluir
          </button>
          <button onClick={onAddProduct} className="btn add-product-btn">
            Cadastrar Produto
          </button>
        </div>
      </header>

      {/* Lista de Cards de Produtos */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAddProduct} />
        ))}
      </div>
    </div>
  );
}

export default Product;
