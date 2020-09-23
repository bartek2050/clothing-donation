import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import React from "react";

function Navigation () {

    return (
    <section className={"navigationMain"}>
        <div className={"navigationMain__login"}>
            <Link to={"/logowanie"} className={"login"}>Zaloguj</Link>
            <Link to={"/rejestracja"} className={"register"}>Załóż konto</Link>
        </div>
        <div className={"navigationMain__navigation"}>
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
    </section>
    )
}

export default Navigation;