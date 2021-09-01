import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <ul className="ul-bar">
                    <li className="li-bar">
                        <Link to='/officerpage'
                            className="link-bar">
                            Home
                        </Link>
                    </li>
                    <li className="li-bar">
                        <Link to='/officeraddvisitor'
                        className="link-bar">
                            Add Visitor
                        </Link>
                    </li>
                    <li className="li-bar">
                        <Link to='/officerviewvisitor'
                        className="link-bar">
                            Visitor List
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="logout-btn">
                    <Link to='/'>
                        <Button
                            className='btn'
                            buttonStyle='btn-black-curve'
                            buttonSize='btn-small'
                        >
                            Log out
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
