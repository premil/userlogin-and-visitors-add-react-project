import { useState } from 'react';
import { Button } from '../components/Button';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function SignUpOfficer({ modal_Show, modal_Hide }) {            // using props

    const [signupFirstN, setSignupFirstN] = useState("");
    const [signupLastN, setSignupLastN] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupPasswordConf, setSignupPasswordConf] = useState("");
    const [signupContactNo, setSignupContactNo] = useState("");
    const [signupNICNo, setSignupNICNo] = useState("");
    const [signupAddress, setSignupAddress] = useState("");
    const [signupCity, setSignupCity] = useState("");
    const [signupDisplay, setSignupDisplay] = useState("Signup");

    const handleSubmit = (e) => {
        e.preventDefault();

        setSignupDisplay("Signing Up!...");
      let sucess = true;

        const BodyInfo = {
            firstname: signupFirstN,
            lastname: signupLastN,
            email: signupEmail,
            password: signupPassword,
            contactno: signupContactNo,
            nicno: signupNICNo,
            address: signupAddress,
            city: signupCity,
        };

        async function UserSignUP(body) {
            await axios.post('signup-api-link', body, { header: {} })
                .then(res => {
                    // setUserFirstName(BodyInfo.firstname);
                    // setUserEmail(BodyInfo.email);
                    setSignupFirstN("");
                    setSignupLastN("");
                    setSignupEmail("");
                    setSignupPassword("");
                    setSignupPasswordConf("");
                    setSignupContactNo("");
                    setSignupNICNo("");
                    setSignupAddress("");
                    setSignupCity("");
                    setSignupDisplay(res.data ? res.data.message : "");
                })
                .catch(err => {
                    setSignupDisplay(err.response ? err.response.data.message : "");
                })
        }

        if (sucess) {
            if (signupPassword === signupPasswordConf) {
                UserSignUP(BodyInfo);
            } else {
                setSignupDisplay("Password pair isn't equal!");
            }
        }
    }

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
                            <Form.Control
                                type="string"
                                placeholder="Enter first Name"
                                value={signupFirstN}
                                onChange={(e) => { setSignupFirstN(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="string"
                                placeholder="Enter last name"
                                value={signupLastN}
                                onChange={(e) => { setSignupLastN(e.target.value) }}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={signupEmail}
                            onChange={(e) => { setSignupEmail(e.target.value) }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(e) => { setSignupPassword(e.target.value) }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Re-enter Password" 
                        value={signupPasswordConf} 
                        onChange={(e) => { setSignupPasswordConf(e.target.value) }} 
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control 
                            type="number" 
                            placeholder="Enter contact number"
                            value={signupContactNo} 
                            onChange={(e) => { setSignupContactNo(e.target.value) }} 
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>NIC No</Form.Label>
                            <Form.Control 
                            placeholder="Enter your NIC number" 
                            value={signupNICNo} 
                            onChange={(e) => { setSignupNICNo(e.target.value) }} 
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                        placeholder="address" 
                        value={signupAddress} 
                        onChange={(e) => { setSignupAddress(e.target.value) }} 
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                            placeholder="City" 
                            value={signupCity} 
                            onChange={(e) => { setSignupCity(e.target.value) }}
                            />
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
                    onClick= {handleSubmit, modal_Hide}     /* conect to backend remove => modal_Hide */
                >
                    Sign UP    {/* conect to backend remove Sign UP, add to => { signupDisplay } */}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUpOfficer;
