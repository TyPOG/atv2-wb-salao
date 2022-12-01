import { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar_ from '../../../componentes/BarraDeNavegacao'

export class EditarCliente extends Component {
    render(){
        return (
            <section>
                <header>
                    <NavBar_/>
                </header>
                <main>
                    <h1>Editar Cliente:"Roberto"</h1>
                    <Button  variant="outline-dark" href='/clientes'>Voltar</Button>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Nome" >Nome:</label>
                                <input type="text" defaultValue="Roberto"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Sobrenome">Sobrenome:</label>
                                <input type="text" defaultValue="Santos"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input type="text" defaultValue="Robertinho"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Genero">Gênero:</label>
                                <select name="genero" id="genero">
                                    <option>"Selecione seu gênero"</option>
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" defaultValue="345.176.930-24"/>
                            </div>
                            <div className="field">
                                <label htmlFor="rg">RG:</label>
                                <input type="text" defaultValue="03.859.493-1"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Telefone">Telefone:</label>
                                <input type="text" defaultValue="12 98231-0374"/>
                            </div>
                            <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}