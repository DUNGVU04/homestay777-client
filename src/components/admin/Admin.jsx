/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const isLoggedIn = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");
  return (
    <>
      {isLoggedIn && userRole === "ROLE_ADMIN" && (
        <section className="container mt-5">
          <h2 className="text-uppercase">Welcome to Adimin Panel</h2>
          <hr />
          <Link to={"/existing-rooms"} className="btn btn-hotel">
            Manage Rooms
          </Link>{" "}
          <Link to={"/existing-bookings"} className="btn btn-hotel">
            Manage Bookings
          </Link>
        </section>
      )}
    </>
  );
};

export default Admin;
