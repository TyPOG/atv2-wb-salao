import { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../componentes/BarraDeNavegacao'

export class Consumos extends Component {
    render() {
        return (
            <section>
                <header>
                    <NavBar_ />
                </header>
                <main>
                    <h1>Consumos</h1>
                    <div className="tables">
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Listagem 10 clientes que mais consumiram em quantidade</td>
                                    <td>
                                        <div className="Column">
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Listagem todos clientes por gênero</td>
                                    <td>
                                        <div className="Column">
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Listagem geral de produtos e serviços mais consumidos</td>
                                    <td>
                                        <div className="Column">
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Listagem 10 clientes que menos consumiram produtos ou serviços</td>
                                    <td>
                                        <div className="Column">
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Listagem 5 clientes que mais consumiram em valor</td>
                                    <td>
                                        <div className="Column">
                                            <Button variant="outline-info" href='##'>Visualizar</Button>{' '}
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