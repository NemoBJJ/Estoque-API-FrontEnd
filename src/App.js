import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ListarProdutos from './components/ListarProdutos';
import CriarProduto from './components/CriarProduto';
import BuscarProduto from './components/BuscarProduto';
import EditarProduto from './components/EditarProduto';
import DeletarProduto from './components/DeletarProduto';
import ProdutosComMoeda from './components/ProdutosComMoeda';
import SincronizarProdutos from './components/SincronizarProdutos';
import SimularPagamento from './components/SimularPagamento';
import CalcularFrete from './components/CalcularFrete';
import Login from './components/Login';
import HealthCheck from './components/HealthCheck';
import RecursoProtegido from './components/RecursoProtegido';
import UltimasTaxas from './components/UltimasTaxas';
import BuscarTaxasExternas from './components/BuscarTaxasExternas';

console.log(process.env.REACT_APP_API_URL); // Verificando o valor da variável de ambiente

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <div className="container">
        <Routes>
          {/* Definição das Rotas */}
          <Route path="/produtos/listar" element={<ListarProdutos />} />
          <Route path="/produtos/criar" element={<CriarProduto />} />
          <Route path="/produtos/buscar" element={<BuscarProduto />} />
          <Route path="/produtos/editar" element={<EditarProduto />} />
          <Route path="/produtos/deletar" element={<DeletarProduto />} />
          <Route path="/produtos/moeda" element={<ProdutosComMoeda />} />
          <Route path="/vendas/sincronizar" element={<SincronizarProdutos />} />
          <Route path="/vendas/simular-pagamento" element={<SimularPagamento />} />
          <Route path="/vendas/calcular-frete" element={<CalcularFrete />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/protected-resource" element={<RecursoProtegido />} />
          <Route path="/currency/latest" element={<UltimasTaxas />} />
          <Route path="/currency/external" element={<BuscarTaxasExternas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
