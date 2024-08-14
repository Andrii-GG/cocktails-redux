import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "./logo.png";
import cart from "./cart.png";

import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "./store";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    document
      .querySelector(".header-searchInput input")
      .addEventListener("keyup", function (event) {
        if (
          event.key === "Enter" ||
          event.keyCode === 13 ||
          event.key === "Go"
        ) {
          handleClick();
        }
      });
  }, []);

  const handleClick = (e) => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.reportValidity();
    }
    const input = document.querySelector(".header-searchInput input");
    const searchReq = input.value;
    if (searchReq !== "") {
      dispatch(updateFilter(searchReq));
      navigate("/ListPage");
      input.value = "";
    }
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} title="" alt="loading..."></img>
        </Link>
      </div>
      <div className="header-title">
        <Link to="/">The Best Cocktails</Link>
      </div>
      <div className="header-searchInput">
        <input
          ref={inputRef}
          name="search"
          type="search"
          placeholder="Search..."
          required
          on
        ></input>
      </div>
      <div className="header-searchButton">
        <button onClick={handleClick}>Search</button>
      </div>
      <div
        className="header-cart"
        onClick={() => {
          cartItems.length > 0 && setOpen(true);
        }}
      >
        <img src={cart} title="" alt="loading..."></img>
        {cartItems.length > 0 && (
          <span className="cartCount">{cartItems.length}</span>
        )}
      </div>
      <Modal isOpen={isOpen} setOpen={setOpen}></Modal>
    </div>
  );
};

export default Header;
