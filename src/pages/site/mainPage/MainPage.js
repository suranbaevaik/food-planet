import React from "react";
import {Outlet} from "react-router-dom";
import Banner from "../../../components/banner/Banner";
import Menu from "../../../components/menu/Menu";
import Benefits from "../../../components/benefits/Benefits";
import Feedback from "../../../components/feedback/Feedback";
import Footer from "../../../components/footer/Footer";
import Trends from "../../../components/trends/Trends";
import Header from "../../../components/header/Header";

const MainPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <Banner/>
            <Trends/>
            <Menu/>
            <Benefits/>
            <Feedback/>
            <Footer/>
        </>
    );
};

export default MainPage;