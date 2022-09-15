import React from 'react';
import Banner from "../../../components/banner/Banner";
import Trends from "../../../components/trends/Trends";
import Menu from "../../../components/menu/Menu";
import Benefits from "../../../components/benefits/Benefits";
import Feedback from "../../../components/feedback/Feedback";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";


const MainPage = () => {
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