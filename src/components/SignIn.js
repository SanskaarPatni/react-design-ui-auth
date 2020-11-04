import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';

export const NavLogo = styled(Link)`
 color: #fff;
 display:flex;
 justify-self:flex-start;
 align-items:center;
 margin-left:24px;
 font-weight:bold;
 text-decoration:none;
 cursor: pointer;
 &:hover{
     text-decoration:none;
     color:#fff;
 }
`
export default function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        }
        catch {
            setError('Failed to login');
        }
        setLoading(false);
    }
    return (
        <Container style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: '#01bf71', overflowY: 'hidden' }}>
            <NavLogo to="/" style={{ position: "absolute", marginTop: '20px' }}> MindSpace</NavLogo>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "90vh", minWidth: "90vw", backgroundColor: '#01bf71' }}>
                <div className="w-100" style={{ maxWidth: "400px", paddingTop: "30px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Log In
                        </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup" style={{ color: '#fff' }}>Sign Up</Link>
                    </div>
                </div>
            </Container>
        </Container>
    )
}
