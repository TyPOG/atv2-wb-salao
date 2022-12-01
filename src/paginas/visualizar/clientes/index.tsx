import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao';

export class VisualizarCliente extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Visualizar cliente: "Roberto"</h1>
                    <Button  variant="outline-dark" href='/clientes'>Voltar</Button>
                    <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                        <Card.Header>ID: 1</Card.Header>
                        <Card.Body>
                            <Card.Title>Roberto Santos</Card.Title>
                            <Card.Text>
                                Nome Social: Robertinho
                            </Card.Text>
                            <Card.Text>
                                Gênero: Masculino
                            </Card.Text>
                            <Card.Text>
                                CPF: 345.176.930-24
                            </Card.Text>
                            <Card.Text>
                                RG: 03.859.493-1
                            </Card.Text>
                            <Card.Text>
                                Telefone: 12 98231-0374
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </main>
            </section>
        )
    }
};