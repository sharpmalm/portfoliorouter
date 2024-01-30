import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './content/Home';
import About from './content/About';

//Home, About, Projects, Programming, Contact

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
