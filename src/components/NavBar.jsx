import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <div className={`bg-${theme}`}>
        <nav
          className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-primary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 mb-2 text-warning" to="/">
              RenTopia
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link active">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link active">
                    Contact
                  </Link>
                </li>
              </ul>
              <ThemeSwitch />
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
