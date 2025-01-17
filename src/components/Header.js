// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Estoque-API</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#B0C4DE', // Cinza metálico
  color: '#333',
  padding: '40px 20px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderTop: '10px solid #B0C4DE', // Borda superior de 10px com cor cinza metálico
};

export default Header;





