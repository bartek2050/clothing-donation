import {Link} from "react-router-dom";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import React from "react";


function HomeHeader() {
    return (
        <section className={"home__section"}>
            <div className={"home__image"}>
                <img alt={"homeImage"} src={process.env.PUBLIC_URL + '/Home-Hero-Image.jpg'}/>
            </div>
            <div className={"home__mainSection"}>
                <div className={"home__mainSection-login"}>
                    <Link to={"/logowanie"} className={"login"}>Zaloguj</Link>
                    <Link to={"/rejestracja"} className={"register"}>Załóż konto</Link>
                </div>
                <div className={"home__mainSection-navigation"}>
                    <Link to={"/"} className={"menuElement"}>Start</Link>
                    <Link to={"/"} className={"menuElement"}>O co chodzi</Link>
                    <Link to={"/"} className={"menuElement"}>O nas</Link>
                    <Link to={"/"} className={"menuElement"}>Fundacja i organizacje</Link>
                    <Link to={"/"} className={"menuElement"}>Kontakt</Link>
                </div>
                <div className={"header"}>
                    <p>
                        Zacznij pomagać!
                    </p>
                    <p>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                </div>
                <div className={"decoration"}>
                    <Decoration/>
                </div>
                <div className={"cta__mainSection"}>
                    <Link to={"/logowanie"} className={"cta__button"}>ODDAJ RZECZY</Link>
                    <Link to={"/logowanie"} className={"cta__button"}>ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;