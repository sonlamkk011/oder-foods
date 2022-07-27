import "./Navbar.scss"
import Link from '@mui/material/Link';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return(
        <>
        <div id="navbar">
            <div className="container-scroller">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <ul className="nav">
    <li className="nav-item">
      <a className="nav-link" href="/">
        <i className="icon-grid menu-icon" />
        <span className="menu-title">Home</span>
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        data-toggle="collapse"
        href="#ui-basic"
        aria-expanded="false"
        aria-controls="ui-basic"
      >
        <i className="icon-layout menu-icon" />
        <span className="menu-title">Đồ Ăn</span>
        <i className="menu-arrow" />
      </a>
      <div className="collapse" id="ui-basic">
        <ul className="nav flex-column sub-menu">
          
          <li className="nav-item">
            {" "}
            <Link className="nav-link" href="rice-details">
              Cơm
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link" href="bread-details">
              Bánh Mì
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link" href="noodles-details">
              Bún Phở
            </Link>
          </li>
        </ul>
      </div>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        data-toggle="collapse"
        href="#form-elements"
        aria-expanded="false"
        aria-controls="form-elements"
      >
        <i className="icon-columns menu-icon" />
        <span className="menu-title">Nước Uống</span>
        <i className="menu-arrow" />
      </a>
      <div className="collapse" id="form-elements">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item">
            <Link className="nav-link" href="soft-drinks">
              Nước Ngọt
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="coffee">
              Pha Chế
            </Link>
          </li>
        </ul>
      </div>
    </li>
    
    <li className="nav-item">
      <a
        className="nav-link"
        data-toggle="collapse"
        href="#tables"
        aria-expanded="false"
        aria-controls="tables"
      >
        <i className="icon-grid-2 menu-icon" />
        <span className="menu-title">Giỏ Hàng</span>
        <i className="menu-arrow" />
      </a>
      <div className="collapse" id="tables">
        <ul className="nav flex-column sub-menu">
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="">
              View
            </a>
          </li>
        </ul>
      </div>
    </li>
    
   
   
    <li className="nav-item">
      <a className="nav-link" href="pages/documentation/documentation.html">
        <i className="icon-paper menu-icon" />
        <span className="menu-title">Documentation</span>
      </a>
    </li>
  </ul>
</nav>

            </div>

        </div>
        </>
    )
}
export default Navbar;