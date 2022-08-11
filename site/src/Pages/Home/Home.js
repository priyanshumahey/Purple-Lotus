import { Link } from 'react-router-dom';

function Homepage() {
    return (
      <>
      <h1>
        Homepage
      </h1>
      <Link to="/"><button>Intro</button></Link>
      </>
      
    );
  }
export default Homepage;