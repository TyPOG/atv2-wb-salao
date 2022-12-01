import { Component } from 'react';
import Navbar_ from '../../componentes/BarraDeNavegacao';
import './styles.css'

export class Home extends Component {
    render(){
        return (
            <section>
                <header>
                    <Navbar_/>
                </header>
                <main>
                    <div className="text">
                        <h1>Bem vindo ao Salão WB</h1>
                        <h2>Aqui você poderá fazer o controle de Clientes, Produtos, Serviços e o consumo dos clientes</h2>
                    </div>
                </main>
            </section>
        );
    }
}