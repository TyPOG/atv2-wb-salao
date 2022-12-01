import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao'

export class EditarProduto extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Editar Produto</h1>
                    <Button  variant="outline-dark" href='/Produtos'>Voltar</Button>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Produto">Produto:</label>
                                <input type="text" defaultValue="Sabonete Glicerinado"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Preco">Preço:</label>
                                <input type="text" defaultValue="8"/>
                            </div>
                            <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                        </form>
                    </div>
                </main>
            </section>
        )
    }
};