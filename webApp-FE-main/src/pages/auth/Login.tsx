import React, { useState } from "react";
import { Alert, Anchor, Card, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import axios from "axios";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { Redirect, useHistory } from "react-router";

interface LoginRequest {
    email: string;
    password: string;
}


function Login() {
    const history = useHistory();
    const signIn = useSignIn();
    const isAuthenticated = useIsAuthenticated();

    // States
    const [ showErrorLogin, setShowErrorLogin ] = useState<boolean>(false);
    const [ errorLoginMsg, setErrorLoginMsg ] = useState<string>('');
    const [ loginRequest, setLoginRequest ] = useState<LoginRequest>({
        email: '',
        password: ''
    });

    if (isAuthenticated()) {
        // If authenticated user, then redirect to catalogue
        return <Redirect to={'/catalogue'}/>;
    }


    // Handlers
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        axios.post('/auth/login', loginRequest)
            .then(response => {
                if (signIn({
                    token: response.data.token.accessToken,
                    expiresIn: response.data.token.expiresIn,
                    authState: response.data.user,
                    tokenType: "Bearer",
                })) {
                    history.push('/catalogue')
                } else {
                    alert("Error Occurred. Try Again")
                    setErrorLoginMsg("Failed");
                    setShowErrorLogin(true);
                }

            })
            .catch(error => {
                setErrorLoginMsg(error.response.data);
                setShowErrorLogin(true);
            });
    }


    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col md={6} className={'mt-3'}>
                    <Card>
                        <Form onSubmit={handleLogin}>
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                {showErrorLogin &&
                                    <Alert
                                        variant="danger"
                                        onClose={() => setShowErrorLogin(false)}
                                        dismissible
                                    >
                                        <strong>Error! </strong>{errorLoginMsg}
                                    </Alert>
                                }

                                <FormGroup>
                                    <FormLabel htmlFor="name">Email</FormLabel>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your mail"
                                        value={loginRequest.email}
                                        onChange={(e) => setLoginRequest(prev => ({
                                            ...prev,
                                            email: e.target.value
                                        }))}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel htmlFor="name">Password</FormLabel>
                                    <input
                                        type="password"
                                        className="form-control mb-3"
                                        placeholder="Enter your password"
                                        value={loginRequest.password}
                                        onChange={(e) => setLoginRequest(prev => ({
                                            ...prev,
                                            password: e.target.value
                                        }))}
                                        required
                                    />
                                </FormGroup>
                                <button type="submit" className="btn btn-primary me-3">Login</button>
                                Don't have an account ? <Anchor href={'/register'}>Register Now!</Anchor>
                            </Card.Body>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
