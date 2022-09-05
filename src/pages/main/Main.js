import React from 'react';
import Banner from "../../components/banner/Banner";
import Trends from "../../components/trends/Trends";
import Menu from "../../components/menu/Menu";
import Benefits from "../../components/benefits/Benefits";
import Feedbacks from "../../components/feedbacks/Feedbacks";
import Footer from "../../components/footer/Footer";

const Main = () => {
    return (
        <>
            <Banner/>
            <Trends/>
            <Menu/>
            <Benefits/>
            <Feedbacks/>
            <Footer/>
        </>
    );
};

export default Main;