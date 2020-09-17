import {Link} from "react-router-dom";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import React from "react";
import Button from "./elements/Button";
import Navigation from "./Navigation";


function HomeHeader() {
    return (
        <>
        <section className={"home__section"}>
            <div className={"home__image"}>
                <img alt={"homeImage"} src={process.env.PUBLIC_URL + '/Home-Hero-Image.jpg'}/>
            </div>

            <div className={"home__section-about"}>
                <Navigation/>
                <div className={"header"}>
                    <h1>
                        Zacznij pomagać!
                    </h1>
                    <p>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                </div>
                <div className={"decoration"}>
                    <Decoration/>
                </div>
                <div className={"cta__mainSection"}>
                    <Link to={"/logowanie"} className={"cta__button"}>
                        <Button text={`ODDAJ RZECZY`}/>
                    </Link>
                    <Link to={"/logowanie"} className={"cta__button"}>
                        <Button text={`ZORGANIZUJ ZBIÓRKĘ`}/>
                    </Link>
                </div>
            </div>
        </section>
            </>
    )
}

export default HomeHeader;