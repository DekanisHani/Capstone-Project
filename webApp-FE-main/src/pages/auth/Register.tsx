import React, { useState } from "react";
import { Alert, Anchor, Card, Col, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import axios from "axios";
import { Redirect, useHistory } from "react-router";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";

interface SignupRequest {
    name: string;
    email: string;
    password: string;
}


function Register() {
    const isAuthenticated = useIsAuthenticated();
    const history = useHistory();
    const signIn = useSignIn();

    // States
    const [ showErrorSignup, setShowErrorSignup ] = useState<boolean>(false);
    const [ errorSignupMsg, setErrorSignupMsg ] = useState<string>('');
    const [ signupRequest, setSignupRequest ] = useState<SignupRequest>({
        email: '',
        name: '',
        password: ''
    });

    if (isAuthenticated()) {
        // If authenticated user, then redirect to catalogue
        return <Redirect to={'/catalogue'}/>;
    }


    // Handlers

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault();
        axios.post('/auth/register', signupRequest)
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
                    setErrorSignupMsg("Failed");
                    setShowErrorSignup(true);
                }
            })
            .catch(error => {
                setErrorSignupMsg(error.response.data);
                setShowErrorSignup(true);
            });


    }


    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col md={6} className={'mt-3'}>
                    <Card>
                        <Form onSubmit={handleRegister}>
                            <Card.Body>
                                <Card.Title>Register</Card.Title>
                                {showErrorSignup &&
                                    <Alert
                                        variant="danger"
                                        onClose={() => setShowErrorSignup(false)}
                                        dismissible
                                    >
                                        <Alert.Heading>Error!</Alert.Heading><p>{errorSignupMsg}</p>
                                    </Alert>
                                }

                                <FormGroup>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={signupRequest.name}
                                        onChange={(e) => setSignupRequest(prev => ({
                                            ...prev,
                                            name: e.target.value
                                        }))}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel htmlFor="name">Email</FormLabel>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your mail"
                                        value={signupRequest.email}
                                        onChange={(e) => setSignupRequest(prev => ({
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
                                        value={signupRequest.password}
                                        onChange={(e) => setSignupRequest(prev => ({
                                            ...prev,
                                            password: e.target.value
                                        }))}
                                        required
                                    />
                                </FormGroup>
                                <button type="submit" className="btn btn-primary me-3">Register</button>
                                You already have an account ? <Anchor href={'/login'}>Login</Anchor>
                            </Card.Body>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;