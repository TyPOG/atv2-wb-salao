import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao'

export class EditarServico extends Component {
    render(){

        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Editar Serviço</h1>
                    <Button  variant="outline-dark" href='/Servicos'>Voltar</Button>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Servico">Serviço:</label>
                                <input type="text" defaultValue="Pintura de cabelos"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Preco">Preço:</label>
                                <input type="text" defaultValue="100"/>
                            </div>
                            <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                        </form>
                    </div>
                </main>
            </section>
        )
    }
};