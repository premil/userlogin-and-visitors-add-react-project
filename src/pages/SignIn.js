import { useState } from 'react';
import '../styles/signin.css';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import SignUpOfficer from '../components/SignUpOfficer';
import axios from 'axios';

function SignIn() {

    const [showSignIn, setShowSignIn] = useState(false);        // showSignin "controller" 
    const closeSignin = () => setShowSignIn(false);

    const [logemail, setLogEmail] = useState("");               // signinemail controller   
    const [logpassword, setLogPassword] = useState("");         // signinpassword controller

    const handleEmailChange = (e) => {
        setLogEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setLogPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        const userSigninInfo = { "email": logemail, "password": logpassword};

        async function UserLogin() {
            await axios.post("<<backend-api-link>>", userSigninInfo, {
                headers: {}
            })
            .then(res => {              // not in completed
                setLogEmail("");
                setLogPassword("");
            })
            .catch(err => {
                setLogEmail("");
                setLogPassword("");
            })
        }
        UserLogin();
    }

    return (
        <div className="signin">
            <div className="signin-wrapper">
                <span className="signin-title">Sign in Account</span>
                <form className="signinForm">
                    <div className="col1">
                        <lable className="lable">Email</lable>
                        <input
                            className='user-input'
                            type='email'
                            placeholder='Enter your email'
                            value={ logemail }
                            onChange={ handleEmailChange }
                        />
                    </div>
                    <div className="col1">
                        <lable className="lable">Password</lable>
                        <input
                            className='user-input'
                            type='password'
                            placeholder='Enter your Password'
                            value={ logpassword }
                            onChange={ handlePasswordChange }
                        />
                    </div>
                </form>
                <div className="new-button">
                    <div className="signin-btn">
                        <Link to='/officerpage'>
                            <Button
                                className='btn'
                                buttonStyle='btn-black-curve'
                                buttonSize='btn-medium'
                                type='submit'
                                onClick={ handleSignIn}
                            >
                                Sign IN
                            </Button>
                        </Link>
                    </div>
                    <div className="signup-btn">
                            <Button
                                className='btn'
                                buttonStyle='btn-black-curve'
                                buttonSize='btn-medium'
                                onClick={() => setShowSignIn(true)}        /* show Signin Modal */
                            >
                                New Account
                            </Button>
                    </div>
                </div>
            </div>
            <SignUpOfficer
                modal_Show={showSignIn}
                modal_Hide={closeSignin}
            />
        </div>
    );
}

export default SignIn;
