
import './Footer.css';

const  Footer=()=> {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
         
          <span className="title">Lyvesta Ecommerce</span>
        </div>
        <div className="links">
          <h3 className="heading">Quick Links</h3>
             <a href=""> Home</a> 
             <a href="">Shop</a>
             <a href="">  About</a>
             <a href=""> Contact</a>        
             </div>
        <div className="links">
          <h3 className="heading">Social</h3>
          <div className="social-icons">
            <a href="">facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Linkdin</a>
            
          </div>
        </div>
        <div className="links">
          <h3 className="heading">Legal</h3>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Refund Policy</a>
         
        </div>
        <div className="legal">
          <p>&copy; 2024 Acme Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer