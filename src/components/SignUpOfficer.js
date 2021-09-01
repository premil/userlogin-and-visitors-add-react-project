import React from 'react';
import { Button } from '../components/Button';
import { Modal, Form, Row, Col } from 'react-bootstrap';


function SignUpOfficer({ modal_Show, modal_Hide }) {            // using props
    return (
        <Modal
            show={modal_Show}
            onHide={modal_Hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header
                closeButton
                style={{ backgroundColor: "darkorange" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Welcome! Let's Sign UP
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="string" placeholder="Enter first Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="string" placeholder="Enter last name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="number" placeholder="Enter contact number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>NIC No</Form.Label>
                            <Form.Control placeholder="Enter your NIC number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="address" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    className='btns'
                    buttonStyle='btn-black-box'
                    buttonSize='btn-medium'
                    type='submit'
                    onClick={modal_Hide}
                >
                    Sign UP
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUpOfficer;
