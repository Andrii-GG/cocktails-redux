import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { store } from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Header></Header>
                    <Content></Content>
                    <Footer></Footer>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
