import React, { useState } from "react";
import { Form, Button,  Col } from 'react-bootstrap';
 

const SignupForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} on Submit={handleSubmit}>
                <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Your name' name='email' required/>
                    <Form.Control.Feedback type='invalid'>Full Name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' placeholder='Your email' name='email' required/>
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicPasword">
                    <Form.Label hmtlFor='password'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Your password' name='password' required />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )

}

export default SignupForm;