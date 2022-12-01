import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao';

export class VisualizarProduto extends Component {
    render(){
        return(
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Visualizar Produto: "SSabonete Glicerinado"</h1>
                    <Button variant="outline-dark" href='/produtos'>Voltar</Button>
                    <Card
                    bg="white"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                        <Card.Header>ID: 1</Card.Header>
                        <Card.Body>
                            <Card.Title>Sabonete Glicerinado</Card.Title>
                            <Card.Text>
                                Preço: R$8
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </main>
            </section>
        )
    }
};