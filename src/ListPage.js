import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "./fetchData";
import { useSelector } from "react-redux";

const ListPage = () => {
  const filterData = useSelector((state) => state.filter);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(
      `search.php?${
        filterData.length === 1
          ? filterData[0] === filterData[0].toUpperCase()
            ? `f=${filterData}`
            : `s=${filterData}`
          : `s=${filterData}`
      }`,
      setData
    );
  }, [filterData]);

  return (
    <div className="ListPage">
      {filterData && data && data.drinks && data.drinks.length > 0 ? (
        data.drinks.map((item) => {
          return (
            <div
              className="cocktailCard"
              id={item.idDrink}
              key={item.idDrink}
              style={{ backgroundImage: `url(${item.strDrinkThumb})` }}
              onClick={() => {
                navigate(`/CocktailPage/${item.idDrink}`);
              }}
            >
              <div className="cocktailCard-Img"></div>
              <div className="cocktailCard-Label">{item.strDrink}</div>
              <div className="cocktailCard-Caption">
                {item.strAlcoholic} {item.strCategory}
              </div>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ListPage;
