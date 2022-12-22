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
import AdminAddProducts from "./pages/admin/adminAddProducts/AdminAddProducts";
import AdminUpdateProducts from "./pages/admin/adminUpdateProducts/AdminUpdateProducts";
import AdminChangeFeedback from "./pages/admin/adminChangeFeedback/AddChangeFeedback";
import AdminAddFeedback from "./pages/admin/adminAddFeedback/AdminAddFeedback";
import AdminUpdateFeedback from "./pages/admin/adminUpdateFeedback/AdminUpdateFeedback";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/*Клиент*/}
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>

                {/*Админ*/}
                <Route>
                    <Route path="/admin/main" element={<AdminMainPage/>}/>
                    <Route path="/admin/menu" element={<AdminMenuPage/>}/>
                    <Route path="/admin/menu/:menu_name" element={<AdminChangeProducts/>}/>
                    <Route path="/admin/addProducts" element={<AdminAddProducts/>}/>
                    <Route path="/admin/updateProducts/:menu_name/:id" element={<AdminUpdateProducts/>}/>
                    <Route path="/admin/feedback/:feedback_el" element={<AdminChangeFeedback/>}/>
                    <Route path="/admin/addFeedback" element={<AdminAddFeedback/>}/>
                    <Route path="/admin/updateFeedback/:feedback_el/:id" element={<AdminUpdateFeedback/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Toaster/>
        </BrowserRouter>
    );
};

export default App;