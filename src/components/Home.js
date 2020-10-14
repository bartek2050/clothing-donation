import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeBeneficiary from "./HomeBeneficiary";
import HomeContact from "./HomeContact";

function Home() {
    return (
        <>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAboutUs/>
                <HomeBeneficiary/>
                <HomeContact/>
        </>
    )
}

export default Home;