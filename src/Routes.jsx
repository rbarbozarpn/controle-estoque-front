import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

/** Rotas Keep */
import Inicio from './paginas/Inicio';
import ProdutoCadastro from './paginas/Produtos/Cadastro';
import ConsultaProdutos from './paginas/Produtos/Consulta/Index';
import CadastroFuncionarios from './paginas/Usuarios/Cadastro';
import ConsultaFuncionarios from './paginas/Usuarios/Consulta';
import CadastroLocais from './paginas/Estoque/CadastroLocais';
import AssociarItens from './paginas/Estoque/CadastroItens';
import ConsultaLocais from './paginas/Estoque/ConsultaLocais';
import ConsultaEstoque from './paginas/Estoque/ConsultaEstoque';
import CadastroEmpresas from './paginas/Empresa/Cadastro';
import ConsultaEmpresas from './paginas/Empresa/Consulta';

function AppRoutes() {
    return (
        <Router >
            <Routes>
                <Route path='/inicio' element={<Inicio />} />  
                <Route path='/produtos' element={<ProdutoCadastro />} />
                <Route path='/produtos/consulta' element={<ConsultaProdutos />} />
                <Route path='/funcionarios' element={<CadastroFuncionarios />} />
                <Route path='/funcionarios/consulta' element={<ConsultaFuncionarios />} />
                <Route path='/cadastroLocais' element={<CadastroLocais />} />
                <Route path='/cadastroItens' element={<AssociarItens />} />
                <Route path='/consultaLocais' element={<ConsultaLocais />} />
                <Route path='/consultaEstoque' element={<ConsultaEstoque />} />
                <Route path='/empresas' element={<CadastroEmpresas />} />
                <Route path='/empresas/consulta' element={<ConsultaEmpresas />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;