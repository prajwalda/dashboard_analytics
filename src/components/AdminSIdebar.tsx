import React, { useEffect, useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const AdminSIdebar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
      <h1>Analytics</h1>
      <div>
        <Link to={"/"}>
        <h5>DASHBOARD</h5>
        </Link>
        <ul>
          <li>
            <Link to={"/bar"}>
              <FaChartBar />
              Bar
            </Link>
          </li>
          <li>
            <Link to={"/pie"}>
              <FaChartPie />
              Pie
            </Link>
          </li>
          <li>
            <Link to={"/line"}>
              <FaChartLine />
              Line
            </Link>
          </li>
        </ul>
      </div>
      {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
    </aside>
    </>
  );
};

export default AdminSIdebar;
