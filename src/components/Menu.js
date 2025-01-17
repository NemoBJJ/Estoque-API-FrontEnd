// src/components/Menu.js
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Sistema de Gerenciamento de Estoque</h1>
      <div className="menu-grid">
        {/* Produtos */}
        <div className="menu-item">
          <h3>Produtos</h3>
          <ul>
            <li><Link to="/produtos/listar">Listar Produtos</Link></li>
            <li><Link to="/produtos/criar">Criar Produto</Link></li>
            <li><Link to="/produtos/buscar">Buscar Produto por ID</Link></li>
            <li><Link to="/produtos/editar">Editar Produto</Link></li>
            <li><Link to="/produtos/deletar">Deletar Produto</Link></li>
            <li><Link to="/produtos/moeda">Listar Produtos com Moeda</Link></li>
          </ul>
        </div>

        {/* Vendas */}
        <div className="menu-item">
          <h3>Vendas</h3>
          <ul>
            <li><Link to="/vendas/sincronizar">Sincronizar Produtos</Link></li>
            <li><Link to="/vendas/simular-pagamento">Simular Pagamento</Link></li>
            <li><Link to="/vendas/calcular-frete">Calcular Frete</Link></li>
          </ul>
        </div>

        {/* Segurança/Autenticação */}
        <div className="menu-item">
          <h3>Segurança/Autenticação</h3>
          <ul>
            <li><Link to="/auth/login">Login</Link></li>
            <li><Link to="/health">Health Check</Link></li>
            <li><Link to="/protected-resource">Recurso Protegido</Link></li>
          </ul>
        </div>

        {/* Currency */}
        <div className="menu-item">
          <h3>Currency</h3>
          <ul>
            <li><Link to="/currency/latest">Conversão de Moeda</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
