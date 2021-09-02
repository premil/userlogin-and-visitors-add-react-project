import React from 'react';
import '../styles/officeraddvisitor.css';
import { Button } from '../components/Button';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';


function OfficerAddVisitor() {
    return (
        <>
            <Navbar />
            <div className="officer-addvisitor">
                <div className="form-title">
                    <h3>Add Visitor Detalis</h3>
                </div>
                <div className="add-visitor-form">
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
                                <Form.Control placeholder="city"/>
                            </Form.Group>
                        </Row>
                    </Form>

                    <Button
                        className='btns officersubmit'
                        buttonStyle='btn-black-box'
                        buttonSize='btn-medium'
                        type='submit'
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
}

export default OfficerAddVisitor;
