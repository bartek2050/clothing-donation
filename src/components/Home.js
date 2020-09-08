import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeBeneficiary from "./HomeBeneficiary";
import Foundation from "./Foundation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Ngo from "./Ngo";
import Local from "./Local";


function Home() {
    return (
        <>
            <Router>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAboutUs/>
                <HomeBeneficiary/>
                <Switch>
                    <Route path={"/foundation"} component={Foundation}/>
                    <Route path={"/ngo"} component={Ngo}/>
                    <Route path={"/local"} component={Local}/>
                </Switch>
            </Router>
        </>
    )
}

export default Home;