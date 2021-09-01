import { useState } from 'react';
import '../styles/landingpage.css';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import VisitorModal from '../components/VisitorModal';

function Landingpage() {

    const [showSubmit, setShowSubmit] = useState(false);        // showSignin "controller" 
    const closeSubmit = () => setShowSubmit(false);

    return (
        <div className="landingpage">
            <div className="landing-wrapper">
                <div className="officer">
                    <Link to='/signin'>
                        <Button
                            className='btns'
                            buttonStyle='btn-black-box'
                            buttonSize='btn-large'
                        >
                            Officer
                        </Button>
                    </Link>
                </div>  {/* officer */}
                <div className="visitor">
                    
                        <Button
                            className='btns'
                            buttonStyle='btn-black-box'
                            buttonSize='btn-large'
                            onClick={() => setShowSubmit(true)}
                        >
                            Visitor
                        </Button>
                    
                </div>  {/* visitor */}
            </div>
            <VisitorModal
            modal_Show={showSubmit}
            modal_Hide={closeSubmit}
            />
        </div>
    );
}

export default Landingpage;
