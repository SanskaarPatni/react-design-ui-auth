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
export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        }
        catch {
            setError('Failed to reset password');
        }
        setLoading(false);
    }
    return (
        <Container style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: '#01bf71', overflowY: 'hidden' }}>
            <NavLogo to="/" style={{ position: "absolute", marginTop: '20px' }}> MindSpace</NavLogo>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "90vh", minWidth: "90vw", backgroundColor: '#01bf71' }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Reset Password</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Reset Password
                        </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link to="/signin">Log In</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup" style={{ color: '#fff' }}>Sign Up</Link>
                    </div>
                </div>
            </Container>
        </Container >
    )
}

