import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/site/mainPage/MainPage";
import CartPage from "./pages/site/cartPage/CartPage";
import CheckoutPage from "./pages/site/checkoutPage/CheckoutPage";
import NotFoundPage from "./pages/site/notFoundPage/NotFoundPage";
import AdminMainPage from "./pages/admin/adminMainPage/AdminMainPage";
import AdminProductsPage from "./pages/admin/adminProductsPage/AdminProductsPage";
import AdminMenuPage from "./pages/admin/adminMenuPage/AdminMenuPage";
import Header from "./components/header/Header";
import Trends from "./components/trends/Trends";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route path="/" element={<MainPage/>}>
                        <Route path="/trends/:trend_name" element={<Trends/>}/>
                    </Route>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Route>
                <Route>
                    <Route path="/admin/main" element={<AdminMainPage/>}/>
                    <Route path="/admin/menu" element={<AdminMenuPage/>}/>
                    <Route path="/admin/menu/:menu_name" element={<AdminProductsPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;