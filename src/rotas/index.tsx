import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';
import { Home } from '../paginas/home';
import { Clientes } from '../paginas/listagem/clientes';
import { Produtos } from '../paginas/listagem/produtos';
import { Servicos } from '../paginas/listagem/servicos';
import { Consumos } from '../paginas/consumos';
import { CadastrarClientes } from '../paginas/cadastro/clientes';
import { CadastrarProdutos } from '../paginas/cadastro/produtos';
import { CadastrarServico } from '../paginas/cadastro/servicos';
import { VisualizarCliente } from '../paginas/visualizar/clientes';
import { VisualizarProduto } from '../paginas/visualizar/produtos';
import { VisualizarServico } from '../paginas/visualizar/servicos';
import { EditarCliente } from '../paginas/editar/clientes';
import { EditarProduto } from '../paginas/editar/produtos';
import { EditarServico } from '../paginas/editar/servicos';
import { Component } from 'react';

export class  AppRoutes extends Component {
    render(){
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/clientes' element={<Clientes/>}/>
                    <Route path='/produtos' element={<Produtos/>}/>
                    <Route path='/servicos' element={<Servicos/>}/>
                    <Route path='/consumos' element={<Consumos/>}/>
                    <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                    <Route path='/cadastrar_produto' element={<CadastrarProdutos/>}/>
                    <Route path='/cadastrar_servico' element={<CadastrarServico/>}/>
                    <Route path='/clientes/1' element={<VisualizarCliente/>}/>
                    <Route path='/produtos/1' element={<VisualizarProduto/>}/>
                    <Route path='/servicos/1' element={<VisualizarServico/>}/>
                    <Route path='/editar_cliente/1' element={<EditarCliente/>}/>
                    <Route path='/editar_produto/1' element={<EditarProduto/>}/>
                    <Route path='/editar_servico/1' element={<EditarServico/>}/>
                </Routes>
            </Router>
        );
    }
}