import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarThree = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-3">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img src="/images/logo1.png" alt="logo" />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/services/"
                    className={`nav-link ${
                      currentPath == "/services/" && "active"
                    }`}
                  >
                    Services
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>

                  {/* <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services Style 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-2/"
                        className={`nav-link ${
                          currentPath == "/services-2/" && "active"
                        }`}
                      >
                        Services Style 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-3/"
                        className={`nav-link ${
                          currentPath == "/services-3/" && "active"
                        }`}
                      >
                        Services Style 3
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-4/"
                        className={`nav-link ${
                          currentPath == "/services-4/" && "active"
                        }`}
                      >
                        Services Style 4
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/service-details/"
                        className={`nav-link ${
                          currentPath == "/service-details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item">
                  <Link
                    href="/about/"
                    className={`nav-link ${
                      currentPath == "/about/" && "active"
                    }`}
                  >
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/portfolio/"
                    className={`nav-link ${
                      currentPath == "/portfolio/" && "active"
                    }`}
                  >
                    Our Work
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>

                  {/* <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio-details/" && "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-details-2/"
                        className={`nav-link ${
                          currentPath == "/portfolio-details-2/" && "active"
                        }`}
                      >
                        Portfolio Details 2
                      </Link>
                    </li>
                  </ul> */}
                </li>

                <li className="nav-item">
                  <Link
                    href="/blog/"
                    className={`nav-link ${
                      currentPath == "/blog/" && "active"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>

              <div className="others-options">
                <Link href="/contact/" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarThree;
