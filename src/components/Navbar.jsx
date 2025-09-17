import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="py-[27px]">
        <div className="container flex items-center justify-between">
          <Link to={"/"} className="navLogo w-[119px]">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="searchBar w-[400px] h-[52px] bg-bg-grey rounded-[100px] flex items-center justify-between px-[24px] gap-[10px]">
            <CiSearch className="text-3xl" />
            <input
              type="text"
              placeholder="Search in products..."
              className="outline-none w-full text-[14px] text-primary placeholder:text-body-text"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
