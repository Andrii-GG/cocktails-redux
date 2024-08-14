import React from "react";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setToCart } from "./store";

import cross from "./cross.png";
import bin from "./bin.png";

const Modal = ({ isOpen, setOpen }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const handleClick = (e) => {
    const id = e.target.closest(".cart-item").id;
    dispatch(removeFromCart(id));
  };

  const confirmClick = (e) => {
    console.log(JSON.stringify(cartItems, null, 2));
    dispatch(setToCart([]));
    setOpen(false);
  };
  return ReactDOM.createPortal(
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="modal-title">Your cocktails cart</span>
        <img
          className="modal-img"
          src={cross}
          onClick={() => setOpen(false)}
        ></img>
        <div className="modal-scrollBlock">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              console.log(cartItems);
              return (
                <div className="cart-item" key={index} id={item.idDrink}>
                  <img className="cart-item-img" src={item.strDrinkThumb}></img>
                  <span>{item.strDrink}</span>
                  <img
                    className="cart-item-bin"
                    src={bin}
                    onClick={handleClick}
                  ></img>
                </div>
              );
            })
          ) : (
            <div className="cocktail-ingredientsBlock">The cart is empty</div>
          )}
        </div>
        <div className="modal-button">
          <button onClick={confirmClick}>Confirm</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
