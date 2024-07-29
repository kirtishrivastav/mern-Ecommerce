import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'
import '../src/index.css'
import { CartProvider } from '../src/Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './Context/productContext';
import { UserProvider } from './Context/UserContext';



function App() {
  return (
  <>
  <UserProvider>
   <ProductProvider>
  <CartProvider>
    <Header></Header>
       <Outlet></Outlet>
    <Footer></Footer>
  </CartProvider>
  </ProductProvider>
  </UserProvider>
   
  </>
  )
}

export default App
