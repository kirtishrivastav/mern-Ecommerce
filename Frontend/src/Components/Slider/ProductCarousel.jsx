
import ProductCard from './ProductCard';
import { useEffect,useRef } from 'react';
import './Slider.css'




// data for products card

const ProductCarousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
      const carouselElement = carouselRef.current;
  
      if (!carouselElement) return;
  
      // the carousel
      const carousel = new window.bootstrap.Carousel(carouselElement);
  
      // Event listeners for previous and next buttons
      const prevButton = carouselElement.querySelector('.carousel-control-prev');
      const nextButton = carouselElement.querySelector('.carousel-control-next');
  
      if (prevButton && nextButton) {
        const handlePrevClick = () => {
          carousel.prev();
        };
  
        const handleNextClick = () => {
          carousel.next();
        };
  
        prevButton.addEventListener('click', handlePrevClick);
        nextButton.addEventListener('click', handleNextClick);
  
        
  
        return () => {
          prevButton.removeEventListener('click', handlePrevClick);
          nextButton.removeEventListener('click', handleNextClick);
        };
      }
    }, []);
      


  return (
    <>
    <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          ref={carouselRef}
        >
    <div className="carousel-inner">
      {products.map((slide, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <div className="container">
            <div className="row">
              {slide.map((product, idx) => (
                <div className="col-md-3 list-products" key={idx}>
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</>
  );
};

export default ProductCarousel;
