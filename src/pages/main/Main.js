import React from 'react';
import Banner from "../../components/banner/Banner";
import Trends from "../../components/trends/Trends";
import Menu from "../../components/menu/Menu";
import Benefits from "../../components/benefits/Benefits";
import Feedback from "../../components/feedback/Feedback";


const Main = () => {
    return (
        <>
            <Banner/>
            <Trends/>
            <Menu/>
            <Benefits/>
            <Feedback/>
        </>
    );
};

export default Main;