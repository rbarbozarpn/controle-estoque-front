import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

/** Rotas Keep */
import Inicio from './paginas/Inicio';
import ProdutoCadastro from './paginas/Produtos/Cadastro';
import ConsultaProdutos from './paginas/Produtos/Consulta/Index';
import CadastroFuncionarios from './paginas/Usuarios/Cadastro';
import ConsultaFuncionarios from './paginas/Usuarios/Consulta';
import CadastroEnderecamento from './paginas/Estoque/CadastroEnderecos';

function AppRoutes() {
    return (
        <Router >
            <Routes>
                <Route path='/inicio' element={<Inicio />} />  
                <Route path='/produtos' element={<ProdutoCadastro />} />
                <Route path='/produtos/consulta' element={<ConsultaProdutos />} />
                <Route path='/funcionarios' element={<CadastroFuncionarios />} />
                <Route path='/funcionarios/consulta' element={<ConsultaFuncionarios />} />
                <Route path='/enderecamento' element={<CadastroEnderecamento />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;