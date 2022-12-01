import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao'

export class Servicos extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Serviços</h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Serviço</th>
                                <th>Preço</th>
                                <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Pintura de cabelos</td>
                                    <td>R$100</td>
                                    <td>
                                        <div className="icons">
                                            <a href="/editar_servico/1"><PencilSimple size={35} color="#048046"/></a>
                                            <a href="/servicos/1"><Eye size={35} color="#049bd1"/></a>
                                            <a href="##"><Eraser size={35} color="#ce0404"/></a>           
                                        </div>
                                        <div className="Column">
                                            <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}
                                            <Button variant="outline-info" href='/servicos/1'>Visualizar</Button>{' '}
                                            <Button variant="outline-danger">Remover</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Hidratação de cabelos</td>
                                    <td>R$30</td>
                                    <td>
                                        <div className="icons">
                                            <a href="##"><PencilSimple size={35} color="#048046"/></a>
                                            <a href="##"><Eye size={35} color="#049bd1"/></a>
                                            <a href="##"><Eraser size={35} color="#ce0404"/></a>           
                                        </div>
                                        <div className="Column">
                                            <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                            <Button variant="outline-danger">Remover</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Escova progressiva</td>
                                    <td>R$160</td>
                                    <td>
                                        <div className="icons">
                                            <a href="##"><PencilSimple size={35} color="#048046"/></a>
                                            <a href="##"><Eye size={35} color="#049bd1"/></a>
                                            <a href="##"><Eraser size={35} color="#ce0404"/></a>           
                                        </div>
                                        <div className="Column">
                                            <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
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