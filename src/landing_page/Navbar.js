import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ background: "#fff" ,  }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to={"/"}>
          <img
            style={{ width: "25%", marginLeft: "40px" }}
            alt="logo"
            src="media/images/logo.svg"
          />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"signup"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"about"}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"products"}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"pricing"}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to={"support"}>
                  Support
                </Link>
              </li>
              <li class="">
                <Link class="nav-link active" >
                  <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
