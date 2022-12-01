import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao'

export class CadastrarServico extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                <h1>Cadastrar Serviço</h1>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Servico">Serviço:</label>
                                <input type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Preco">Preço:</label>
                                <input type="text"/>
                            </div>
                            <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}