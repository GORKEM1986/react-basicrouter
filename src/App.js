import logo from "./images/logo512.png";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";
import Connect from "./components/Connect";
import Home from "./components/Home";
import { Link, Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" >
            <img className="logo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link ">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Product" className="nav-link ">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Connect" className="nav-link ">
                  Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Connect" element={<Connect />} />
          </Routes>

          <div className="col-md-12">
            <div className="alert alert-warning" role="alert">
              <Routes>
                <Route path="/:id" element={ <Child />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3> ID:{id} </h3>
    </div>
  );
}

export default App;
