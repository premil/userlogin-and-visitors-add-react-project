import React from 'react';
import '../styles/officerpage.css';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import Navbar from '../components/Navbar';

function OfficerPage() {
    return (
        <div>
            <Navbar/>
            <h2>Wellcome to Security System</h2>
        </div>
    );
}

export default OfficerPage;
