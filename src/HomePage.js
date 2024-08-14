import React, { useEffect, useState } from "react";
import fetchData from "./fetchData";

import cart from "./cart.png";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

const HomePage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData("random.php", setData);
  }, []);

  const handleClick = (e) => {
    const closestElement = e.target.closest(".HomePage-personalCocktail");
    const foundObject = data.drinks.find(
      (obj) => obj.idDrink == closestElement.id
    );
    dispatch(addToCart(foundObject));
  };

  return (
    <div className="HomePage">
      <div className="HomePage-title">
        To choose a cocktail, use the search or filter
      </div>
      {data && data.drinks && data.drinks.length > 0 && (
        <div
          className={`HomePage-personalCocktail `}
          id={data.drinks[0].idDrink}
        >
          <div className="HomePage-personalTitle">Personal recommendation</div>
          <div className="HomePage-personalCocktail-Img">
            <img src={data.drinks[0].strDrinkThumb} alt="Cocktail" />
          </div>
          <div className="HomePage-personalCocktail-Label">
            {data.drinks[0].strDrink}
          </div>
          <div className="HomePage-personalCocktail-Caption">
            {data.drinks[0].strAlcoholic} {data.drinks[0].strCategory}
          </div>
          <div className="HomePage-buyButton">
            <button onClick={handleClick}>
              Add to cart <img src={cart} title="" alt="loading..."></img>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
