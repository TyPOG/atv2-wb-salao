import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao'
import './styles.css'

export class Clientes extends Component {
    render() {
        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Clientes</h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Nome Social</th>
                                <th>Genero</th>
                                <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Roberto Santos</td>
                                    <td>Robertinho</td>
                                    <td>Masculino</td>                                
                                    <td>
                                        <div className="icons">
                                            <a href="/editar_cliente/1"><PencilSimple size={35} color="#048046"/></a>
                                            <a href="/clientes/1"><Eye size={35} color="#049bd1"/></a>
                                            <a href="##"><Eraser size={35} color="#ce0404"/></a>
                                                    
                                        </div>
                                        <div className='Column'>
                                            <Button variant="outline-success" href='/editar_cliente/1'>Editar</Button>{' '}
                                            <Button variant="outline-info" href='/clientes/1'>Visualizar</Button>{' '}
                                            <Button variant="outline-danger">Remover</Button>{' '}
                                        </div>
                                    </td>                                                          
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Joaquina Texeira</td>
                                    <td>Jojo Lindinha</td>
                                    <td>Feminino</td>
                                    <td>
                                        <div className="icons">
                                            <a href="/editar_servico/1"><PencilSimple size={35} color="#048046"/></a>
                                            <a href="/clientes/1"><Eye size={35} color="#049bd1"/></a>
                                            <a href="##"><Eraser size={35} color="#ce0404"/></a>          
                                        </div>
                                        <div className='Column'>
                                            <Button variant="outline-success">Editar</Button>{' '}
                                            <Button variant="outline-info">Visualizar</Button>{' '}
                                            <Button variant="outline-danger">Remover</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Jorge Costa</td>
                                    <td>Jorjão</td>
                                    <td>Masculino</td>
                                    <td>
                                        <div className="icons">
                                            <a href="/editar_servico/1"><PencilSimple size={35} color="#048046"/></a>
                                            <a href="/clientes/1"><Eye size={35} color="#049bd1"/></a>
                                            <a href="##"><Eraser size={35} color="#ce0404"/></a>           
                                        </div>
                                        <div className='Column'>
                                            <Button variant="outline-success">Editar</Button>{' '}
                                            <Button variant="outline-info">Visualizar</Button>{' '}
                                            <Button variant="outline-danger">Remover</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section>
        );
    }
}