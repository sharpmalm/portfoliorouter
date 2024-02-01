import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './content/Home';
import About from './content/About';
import Contact from './content/Contact';
import Projects from './content/Projects';
import NavigationBar from './content/components/NavigationBar';

//Home, About, Projects, Programming, Contact

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationBar />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact />},
      { path: '/projects', element: <Projects />}
    ],
  },
  
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
