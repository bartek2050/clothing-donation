import {Link} from "react-router-dom";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import React from "react";
import {Link as ScrollLink} from "react-scroll"


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
                    <ScrollLink
                        to={"fourSteps"}
                        className={"menuElement"}
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}>
                        O co chodzi
                    </ScrollLink>
                    <ScrollLink
                        to={"aboutUs"}
                        className={"menuElement"}
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}>
                        O nas
                    </ScrollLink>
                    <ScrollLink
                        to={"beneficiary"}
                        className={"menuElement"}
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}>
                        Fundacja i organizacje
                    </ScrollLink>
                    <ScrollLink
                        to={"contact"}
                        className={"menuElement"}
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}>
                        Kontakt
                    </ScrollLink>
                </div>
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
                    <Link to={"/logowanie"} className={"cta__button"}>ODDAJ RZECZY</Link>
                    <Link to={"/logowanie"} className={"cta__button"}>ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;