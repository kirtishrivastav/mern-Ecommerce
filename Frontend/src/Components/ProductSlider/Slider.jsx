import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './SliderStyle.css'


function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  //    other functionalities

  return (
    <> <div className="main-container">
      <Carousel responsive={responsive}>
       
        <div>
          <div className="cards">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-300524-bestofbrands-2-superdry.jpg"
              className="cards-img-top"
              alt="..."
            />
            <div className="cards-body">
               <button className="brows-btn">Brows More</button>
            </div>
          </div>
        </div>
{/* ............. */}
        <div>
          <div className="cards">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-300524-bestofbrands-7-uspa.jpg"
              className="cards-img-top"
              alt="..."
            />
            <div className="cards-body">
             
              <button className="brows-btn">Brows More</button>
            </div>
          </div>
        </div>
        {/* ........ */}
        <div>
          <div className="cards">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-300524-bestofbrands-9-kiana.jpg"
              className="cards-img-top"
              alt="..."
            />
            <div className="cards-body">
              <button className="brows-btn">Brows More</button>
            </div>
          </div>
        </div>
        {/* ............ */}
        <div>
          <div className="cards">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-30052024-z9-ajioexclusives-dnmx-teamspirit-min50.jpg"
              className="cards-img-top"
              alt="..."
            />
            <div className="cards-body">
             <button className="brows-btn">Brows More</button>
            </div>
          </div>
        </div>
        {/* ............. */}
        <div>
          <div className="cards">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-30052024-z9-ajioexclusives-leecooper-johnplayer-3050.jpg"
              className="cards-img-top"
              alt="..."
            />
            <div className="cards-body">
            <button className="brows-btn">Brows More</button>
            </div>
          </div>
        </div>
        {/* ........... */}
        <div className="cards">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-30052024-z9-ajioexclusives-superdry-gap-min40.jpg"
              className="cards-img-top"
              alt="..."
            />
            <div className="cards-body">
            <button className="brows-btn">Brows More</button>
            </div>
          </div>
        <div>
          
        </div>
       
      
      </Carousel>
      </div>
      
    </>
  );
}

export default Slider;
