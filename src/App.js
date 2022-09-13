import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./pages/main/Main";
import Cart from "./pages/cart/Cart";
import Ordering from "./pages/ordering/Ordering";
import NotFound from "./pages/notFound/NotFound";
import AdminPanelMain from "./pages/adminPanelMain/AdminPanelMain";

const App = () => {
    return(
        <BrowserRouter>
            {/*<Header/>*/}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/ordering" element={<Ordering/>}/>
                <Route path="/admin/main" element={<AdminPanelMain/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {/*<Footer/>*/}
        </BrowserRouter>
    )
}

export default App;