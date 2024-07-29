import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useEffect,useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';

// import Login from '../Login/Login';

function Header() {

  const { user, } = useContext(UserContext);
  useEffect(() => {
   
    console.log("user state in profile useEffect", user);
  }, [user]);

  console.log("user name in home",user)

  // console.log(user.fullName)
  return (
    <>
      <header>
        <div id="header">
        {/* <h1 className="mt-3">{user.fullName}</h1> */}
          <div className="header">

              <div>
              <span className="logo">Lyvesta</span>
              </div>
              
           
            <form className="search-form">
              <div className="search-input-wrapper">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="search-input"
                />
              </div>
            </form>
             <div>
             <Link
              to="/cart"
              className="btn btn-ghost btn-icon rounded-full cart-icon"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
             </div>
            
            <Dropdown alignRight>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
              <span>{user ? user.userName : 'Loading...'}</span>
                <span className="sr-only"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#">
                  Orders
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/signup">
                  Signup
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* options menu or panel */}
          <div className="panel">
            <ul className="nav nav-pills">
              <Link to="/">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/index.html"
                  >
                    Home
                  </a>
                </li>
              </Link>

              <Link to="">
                <li className="nav-item">
                  <Link to="allProducts">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/allProducts/All_products.html"
                    >
                      All Products
                    </a>
                  </Link>
                </li>
              </Link>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul className="dropdown-menu">
                  
                <Link className="dropdown-item" to="/WomensubCategories/Western Dress">
                   Western Dresses
                 </Link>
                  <li>
                  <Link className="dropdown-item" to="/WomensubCategories/casual wear">
                  casual wear
                 </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/WomensubCategories/Ethnic Wear">
                  Ethnic Wear
                 </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/subcategories/Formal Wear">
                   Formals
                  </Link>
                  <li>
                  <Link className="dropdown-item" to="/subcategories/casual wear">
                  casual wear
                  </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/subcategories/Ethnic Wear">
                  Ethnic Wear
                  </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Accessories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/subCategories/menShirts.html"
                    >
                      women Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/subCategories/menPants.html"
                    >
                      Men accessories
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
