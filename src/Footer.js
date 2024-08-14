import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateFilter } from "./store";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alphabetUppercase = [];
  for (let i = 0; i < 26; i++) {
    alphabetUppercase.push(String.fromCharCode(65 + i));
  }

  const handleClick = useCallback(
    (item) => {
      dispatch(updateFilter(item));
      navigate("/ListPage");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    [navigate, dispatch]
  );

  return (
    <div className="footer">
      {alphabetUppercase.map((item) => {
        return (
          <div key={item} onClick={() => handleClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
