/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-img-top img-fluid"
        height="400px"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-outline-secondary"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
