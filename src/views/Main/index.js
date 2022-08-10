import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoCubeOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";

import logo from "../../images/pomac.png";
import Todos from "../todos";
import Styles from "./main.module.css";
import Header from "../navbar";

const Main = () => {
  return (
    <>
      <div className="container-fluid">
        <div className={`row ${Styles.mainSec}`}>
          <div className={`col-sm-auto bg-white sticky-top ${Styles.siderBrd}`}>
            <div
              className={`d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top ${Styles.stickyBar}`}
            >
              <a
                href="/"
                className="d-block link-dark text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
              >
                <img src={logo} alt="logo" className={Styles.logoImg} />
              </a>
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100  align-items-center">
                <li
                  className={`nav-item ${Styles.activeLink} ${Styles.iconColor}`}
                >
                  <a href="#" className="nav-link py-3 px-2">
                    <MdOutlineSpaceDashboard />
                  </a>
                </li>
                <li className={`nav-item  ${Styles.iconColor}`}>
                  <a href="#" className="nav-link py-3 px-2">
                    <IoCubeOutline />
                  </a>
                </li>
                <li className={`nav-item  ${Styles.iconColor}`}>
                  <a href="#" className="nav-link py-3 px-2">
                    <FiCalendar />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm">
            <Header />
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
