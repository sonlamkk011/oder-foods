import Link from "@mui/material/Link";
import "./Sidebar.scss";

const SidebarAdmin = () => {
  return (
    <>
      <div id="sidebar">
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
                  href="create-foods"
                >
                  <i className="icon-paper menu-icon" />
                  <span className="menu-title">Create Foods</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default SidebarAdmin;
