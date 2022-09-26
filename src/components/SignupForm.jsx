import React from "react";
import { Form, Button,  Alert } from 'react-bootstrap';
 

const SignupForm = () => {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Your name' name='email' required/>
                    <Form.Control.Feedback type='invalid'>Full Name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' placeholder='Your email' name='email' required/>
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label hmtlFor='password'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Your password' name='password' required />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
            </Form>
        </>
    )

}

export default SignupForm;