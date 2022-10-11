import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import MainPage from "./pages/site/mainPage/MainPage";
import CartPage from "./pages/site/cartPage/CartPage";
import CheckoutPage from "./pages/site/checkoutPage/CheckoutPage";
import NotFoundPage from "./pages/site/notFoundPage/NotFoundPage";
import AdminMainPage from "./pages/admin/adminMainPage/AdminMainPage";
import AdminChangeProducts from "./pages/admin/adminChangeProducts/AdminChangeProducts";
import AdminMenuPage from "./pages/admin/adminMenuPage/AdminMenuPage";
import Header from "./components/header/Header";
import Trends from "./components/trends/Trends";
import AdminAddProducts from "./pages/admin/adminAddProducts/AdminAddProducts";
import AdminUpdateProducts from "./pages/admin/adminUpdateProducts/AdminUpdateProducts";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*Клиент*/}
                <Route path="/" element={<Header/>}>
                    <Route path="/" element={<MainPage/>}>
                        <Route path="/trends/:trend_name" element={<Trends/>}/>
                    </Route>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Route>

                {/*Админ*/}
                <Route>
                    <Route path="/admin/main" element={<AdminMainPage/>}/>
                    <Route path="/admin/menu" element={<AdminMenuPage/>}/>
                    <Route path="/admin/menu/:menu_name" element={<AdminChangeProducts/>}/>
                    <Route path="/admin/addProducts" element={<AdminAddProducts/>}/>
                    <Route path="/admin/updateProducts/:menu_name/:id" element={<AdminUpdateProducts/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    );
};

export default App;