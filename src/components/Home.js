import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeBeneficiary from "./HomeBeneficiary";
import {BrowserRouter as Router} from "react-router-dom";
import HomeContact from "./HomeContact";

function Home() {
    return (
        <>
            <Router>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAboutUs/>
                <HomeBeneficiary/>
                <HomeContact/>
            </Router>
        </>
    )
}

export default Home;