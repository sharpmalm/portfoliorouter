import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <>
        <h1>Welcome to my home page!</h1>
        <p>
            Go to <Link to="/about">About page</Link>
        </p>
        </>
        
     );
}

export default Home;