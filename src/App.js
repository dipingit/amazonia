import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import  {productsAndCartLoader}  from "./loaders/productsAndCartLoader";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";
import Inventory from "./components/Inventory/Inventory";

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
            element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
          },
          {
            path: '/shipping',
            loader: productsAndCartLoader,
            element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          }
        ],
    },


  ])
  return (

    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
