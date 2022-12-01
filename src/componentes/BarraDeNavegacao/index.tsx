import { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default class Navbar_ extends Component {
    render(){
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">WB</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <NavDropdown title="Listagem" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                                    <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                                    <NavDropdown.Item href="/servicos">Serviços</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/consumos">Consumos</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Cadastrar" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/cadastrar_cliente">Cliente</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_produto">Produto</NavDropdown.Item>
                                    <NavDropdown.Item href="/cadastrar_servico">Serviço</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}