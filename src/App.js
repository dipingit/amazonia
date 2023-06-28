import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import  {productsAndCartLoader}  from "./loaders/productsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: () => fetch('products.json'),
            element: <Shop></Shop>
          },
          {
            path: '/orders',
            loader: productsAndCartLoader,
            element: <Orders></Orders>
          },
          {
            path: '/inventory',
            element: <Orders></Orders>
          },
          {
            path: '/about',
            element: <About></About>
          }
        ]
    },

    

  ])
  return (

    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
