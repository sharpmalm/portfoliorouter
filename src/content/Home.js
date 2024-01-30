import { Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function Home() {
    return ( 
        <>
        <NavigationBar />
        <h1>Welcome to my home page!</h1>
        <p>
            Go to <Link to="/about">About page</Link>
        </p>
        </>
        
     );
}

export default Home;