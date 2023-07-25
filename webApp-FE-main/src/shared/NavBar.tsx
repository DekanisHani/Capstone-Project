import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useHistory } from "react-router"; // Import the useAuthStatus hook

function NavBar() {
    const history = useHistory();
    const getIsAuthenticated = useIsAuthenticated();
    const getUser = useAuthUser();
    const user = getUser();

    const logout = useSignOut();

    const handleLogout = () => {
        logout();
        history.push('/');
    }

    return (
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <Container fluid="md">
                <Navbar.Brand href="/">
                    <img src={"./logo.png"} alt="logo" className="w-50"/>
                </Navbar.Brand>

                <Nav className="me-auto">

                    <Nav.Link onClick={() => history.push('/')} active>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push('/aboutUs')} active>About Us</Nav.Link>
                    <Nav.Link onClick={() => history.push('/catalogue')}>Catalogue</Nav.Link>
                </Nav>
                <Nav>

                    {getIsAuthenticated() ? (
                        <>
                            <Navbar.Text className="text-muted">
                                Hello {user?.name}
                            </Navbar.Text>
                            <Button className={'mx-3'} variant={'outline-light'} onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button variant={'light'} onClick={() => history.push('/login')}>Login</Button>
                            <Button className={'mx-3'} variant={'outline-light'}
                                    onClick={() => history.push('/register')}> Register</Button>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;