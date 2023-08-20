import React from 'react';
import CategoryPage from './Components/Page2/CategoryPage';
import HomePage from './Components/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>Page not found!!!</h1>
  },
  {
    path: "/category",
    element: <CategoryPage />,
    errorElement: <h1>Page not found!!!</h1>
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
