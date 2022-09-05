import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Menu from "./pages/menu/Menu";
import Delivery from "./pages/delivery/Delivery";
import Contact from "./pages/contact/Contact";

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;