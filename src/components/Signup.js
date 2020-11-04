import React, { useRef, useState } from 'react'
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
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
export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do no match!');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordConfirmRef.current.value);
        }
        catch {
            setError('Failed to create account');
        }
        setLoading(false);
    }
    return (
        <Container style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: '#01bf71', overflowY: 'hidden' }}>
            <NavLogo to="/" style={{ position: "absolute", marginTop: '20px' }}>MindSpace</NavLogo>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "90vh", minWidth: "90vw", backgroundColor: '#01bf71' }}>
                <div className="w-100" style={{ maxWidth: "400px", paddingTop: "30px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
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
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Sign Up
                        </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/signin" style={{ color: '#fff' }}>Sign In</Link>
                    </div>
                </div>
            </Container>
        </Container>
    )
}
