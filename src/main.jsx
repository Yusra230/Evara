import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Shop from './components/Shop.jsx';
import App from './routes/App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import ItemDetails from './components/ItemDetails.jsx';
import Cart from './components/Cart.jsx';
import Whishlist from './components/Whishlist.jsx';
import { Provider } from 'react-redux'
import store from './store/index.js';
import LoginPage from './components/LoginPage.jsx';


const router = createBrowserRouter([
  {
    path: '/Evara/', element: <App />, children: [
      { path: '/Evara/', element: <Home /> },
      { path: '/Evara/shop', element: <Shop /> },
      { path: '/Evara/product/:id', element: <ItemDetails /> },
      { path: '/Evara/cart', element: <Cart /> },
      { path: '/Evara/wishlist', element: <Whishlist /> },
      { path: '/Evara/login', element: <LoginPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>

)
