import Container from 'react-bootstrap/Container'
import Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/"><Link className="navbar-brand" to="/">Case Management</Link></Navbar.Brand>
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/" exact>Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header

