import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './content/Home';

//Home, About, Projects, Programming, Contact

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
