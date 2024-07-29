
import { Button } from "react-bootstrap";
import { ProductContext } from "../../Context/productContext";
import { useContext, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";
import "./Style.css";

function ProductDetails() {
  const  {addToCart } = useContext(CartContext);
     
    const { selectedProduct, setSelectedProduct } = useContext(ProductContext);
    const { id } = useParams();
  
    useEffect(() => {
      if (!selectedProduct) {
        // Fetch or set the product based on the id if it's not already selected
        const product = product.find(product => product.id === parseInt(id));
        setSelectedProduct(product);
      }
    }, [id, selectedProduct, setSelectedProduct]);
  
    if (!selectedProduct) {
      return <p>No product selected.</p>;
    }
  

   
  return (
    <>
      {/* overview section  */}

      <div className="container-fluid">
        <section className="row py-5 px-3">
          <div className="col-sm-6 mb-4">
            {/* product image section */}
            <img 
              src={selectedProduct.image}
              className="img-fluid rounded-lg img"
            />

           
          </div>
          <div className="col-md-6">
            {/* details section  */}

            <div className="mt-4">
              <h1 className="h2 font-weight-bold">
                {selectedProduct.name}
              </h1>
              <p className="text-muted mt-2">
              {selectedProduct.description}
              </p>
            </div>

            <div>
              <h2 className="h4 font-weight-bold">Key Features</h2>
              <ul className="mt-4">
                {selectedProduct.details.map((detail, index) => (
                  <li key={index}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <button className="addTo-cart" onClick={() => addToCart(selectedProduct)}> 
            <FontAwesomeIcon icon={faCartShopping} />
           Add to cart</button>
            <Button variant="primary" size="lg" className="w-100 mt-3">
               buy ${selectedProduct.price}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetails;
