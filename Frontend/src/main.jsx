import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from '../src/App';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import ProductList from './Components/AllProducts/ProductList'
import ProductDetails from './Components/ProductOverview/ProductDetails';
import Home from './Components/Home/Home';
import MenSubCategory from './Components/SubCategory/MenSubCategory';
import WomenSubCategory from './Components/SubCategory/WomenSubCategory';
import Profile from './Components/UserProfile/Profile';
import Checkout from './Components/CheckOut/CheckOut';


// import Home from './Components/Home/Home';

// eslint-disable-next-line react-refresh/only-export-components
const Router= createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signup",
        element: <SignUp></SignUp>
      },
      {
        path:"Cart",
        element: <Cart></Cart>
      },
      {
        path: "allProducts",
        element: <ProductList></ProductList>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/subcategories/:subcategory",
        element: <MenSubCategory></MenSubCategory>
      },
      {
        path: "/WomensubCategories/:subcategory",
        element:<WomenSubCategory></WomenSubCategory>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/checkout",
        element:<Checkout></Checkout>
      }
     
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router={Router}/>
 
   </React.StrictMode>,
)
