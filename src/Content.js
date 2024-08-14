import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import ListPage from "./ListPage";
import CocktailPage from "./CocktailPage";

const Content = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage></HomePage>}></Route>
      <Route path="/ListPage" element={<ListPage></ListPage>}></Route>
      <Route
        path="/CocktailPage/:idDrink"
        element={<CocktailPage></CocktailPage>}
      ></Route>
    </Routes>
  );
};

export default Content;
