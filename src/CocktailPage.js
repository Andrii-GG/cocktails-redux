import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import fetchData from "./fetchData";
import { addToCart } from "./store";

import cart from "./cart.png";

const CocktailPage = () => {
    const dispatch = useDispatch();
    const { idDrink } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(`lookup.php?i=${idDrink}`, setData);
    }, [idDrink]);

    let cocktail;
    if (data?.drinks) cocktail = data.drinks[0];

    const ingredients = [];
    for (let i = 1; data?.drinks && i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push({ ingredient, measure });
        }
    }

    if (!cocktail) {
        return <div className="CocktailPage">Cocktail Not Found</div>;
    }

    const handleClick = (e) => {
        const foundObject = data.drinks.find((obj) => obj.idDrink == idDrink);
        dispatch(addToCart(foundObject));
    };

    return (
        <div className="CocktailPage">
            <div className="cocktail-img">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </div>
            <div className="cocktail-title">{cocktail.strDrink}</div>
            <div className="cocktail-alcoholic">
                <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
            </div>
            <div className="cocktail-category">
                <strong>Category:</strong> {cocktail.strCategory}
            </div>
            <div className="cocktail-glass">
                <strong>Glass Type:</strong> {cocktail.strGlass}
            </div>
            <div className="cocktail-ingredientsBlock">
                <strong>Ingredients:</strong>
                <ul className="cocktail-ingredientsList">
                    {ingredients.length > 0 ? (
                        ingredients.map((item, index) => (
                            <li key={index} className="cocktail-ingredientsItem">
                                {item.ingredient} - {item.measure || "To taste"}
                            </li>
                        ))
                    ) : (
                        <li className="cocktail-ingredientsItem">
                            No ingredients available
                        </li>
                    )}
                </ul>
            </div>
            <div className="cocktail-buyButton">
                <button onClick={handleClick}>
                    Add to cart <img src={cart} title="" alt="loading..."></img>
                </button>
            </div>
            <div className="cocktail-instructions">
                <strong>Instructions:</strong>
                <p>{cocktail.strInstructions || "No instructions available"}</p>
            </div>
        </div>
    );
};

export default CocktailPage;
