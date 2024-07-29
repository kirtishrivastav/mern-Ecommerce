import { useEffect, useState ,useContext  } from "react";
import axios from "axios";
import "./product.css";
import { CartContext } from "../../Context/CartContext";
// import FilterMenu from "../Filters/FilterMenu";
import { ProductContext } from "../../Context/productContext";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const  {addToCart } = useContext(CartContext);
//  console.log(addToCart);

// adding products to overview page 

const { setSelectedProduct } = useContext(ProductContext);
const navigate = useNavigate();

const handleProductClick = (product) => {
  setSelectedProduct(product);
  navigate(`/product/${product.id}`);
};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/API/products/"); // Adjust the URL as necessary
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <>
  {/*   */}
    <div className="container">
      {/* <h2 className="sr-only">Products</h2> */}
      <div className="grid">
        {products.map((product) => (
          <a key={product._id} href={product.href} className="product-card">
            <div className="product-image-container"   onClick={() => handleProductClick(product)}>
              <img
                src={product.image}
                alt={product.imageAlt}
                className="product-image"
              />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="addTo-cart" onClick={() => addToCart(product)}> 
            <FontAwesomeIcon icon={faCartShopping} />
           Add to cart</button>
            {}
          </a>
        ))}
      </div>
    </div>

  
   {/* pagination */}

   <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

    </>
    
  );
}
