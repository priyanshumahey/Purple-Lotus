import { Link } from 'react-router-dom';
import './home.css';

function Homepage() {
    return (
      <div className='Main'>
        <h1>Choose your pathway</h1>
        <p>Note that the demo version only shows For Youth.</p>
        <Link to="/ForParents">
          <div className="Choice-box" id="1">
          For Parents    
        </div>
        </Link>
        <Link to="/ForYouth">
        <div className="Choice-box" id="2">
          For Youth    
        </div>
        </Link>
        <Link to="/ForTherapist">
        <div className="Choice-box" id="3"> 
          For Therapists       
        </div>
        </Link>
      </div>
    );
  }

export default Homepage;