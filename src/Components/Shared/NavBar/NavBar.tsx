import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

export default function NavBar() {
  let { userData } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand  text-warning" href="#">
          UMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">{userData?.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
