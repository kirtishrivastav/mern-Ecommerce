import './HeroSection.css'
// import HeroImage from '../../../../Data/HeroImage.jpg'
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div className="example">
      <div className="example-inner">
        <div className="example-content">
          <div className="example-flex">
            <div className="example-heading">
              <h1>
                 Fashionable and glamour With Lyvesta
              </h1>
              <p>
                Elevate your Style With Our Best Collections  <br />
                And Become More Stylist.
              </p>
              <Link  className="shop-button" to="/allProducts" >
              Shop Collection
              </Link>
              
            </div>
            <div className="image-grid">
              <div
                aria-hidden="true"
                className="image-grid-inner"
              >
                <div className="image-grid-wrapper">
                  <div className="image-column">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                      alt=""
                    />
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="image-column">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                      alt=""
                    />
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                      alt=""
                    />
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                      alt=""
                    />
                  </div>
                  <div className="image-column">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                      alt=""
                    />
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection

