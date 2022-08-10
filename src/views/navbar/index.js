import React, { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { defaultUser } from "../../initialData";
import Styles from "./nav.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg bg-white ${Styles.navHeight}`}>
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            POMAC
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="navbar-nav me-auto">
              <div className={Styles.inputIcons}>
                <AiOutlineSearch />
                <input
                  type="text"
                  className={`form-control ${Styles.searchInput}`}
                  placeholder="Search..."
                />
              </div>
            </ul>
            <ul className="navbar-nav ms-auto">
              <div className="d-flex align-items-center">
                <div className={Styles.userData}>
                  <h6>
                    {defaultUser.firstName} {defaultUser.secName}
                  </h6>
                  <div>{defaultUser.role}</div>
                </div>
                <img
                  src={defaultUser.avatar}
                  alt="avatar"
                  className={Styles.avatarImg}
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav
        className={`navbar navbar-expand-lg navbar-light bg-white ${Styles.navHeight}`}
      >
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="d-flex align-items-center">
                <div className={Styles.inputIcons}>
                  <AiOutlineSearch />

                  <input
                    type="text"
                    className={`form-control ${Styles.searchInput}`}
                    placeholder="Search..."
                  />
                </div>
                <div className={Styles.userData}>
                  <h6>
                    {defaultUser.firstName} {defaultUser.secName}
                  </h6>
                  <div>{defaultUser.role}</div>
                </div>
                <img
                  src={defaultUser.avatar}
                  alt="avatar"
                  className={Styles.avatarImg}
                />
              </div>
            </ul>
          </div>
        </div>
      </nav> */}
    </Fragment>
  );
};

export default Navbar;
