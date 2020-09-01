import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";

function Home() {
    return (
        <>
            <section className={"home__section"}>
                <div className={"home__image"}>
                    <img alt={"homeImage"} src={process.env.PUBLIC_URL + '/Home-Hero-Image.jpg'}/>
                </div>
                <div className={"home__mainSection"}>
                        <div className={"home__mainSection-login"}>
                            <Link to={"/"} className={"login"}>Zaloguj</Link>
                            <Link to={"/"} className={"register"}>Załóż konto</Link>
                        </div>
                        <div className={"home__mainSection-navigation"}>
                            <Link to={"/"} className={"start"}>Start</Link>
                            <Link to={"/"} className={"about"}>O co chodzi</Link>
                            <Link to={"/"} className={"logo"}>O nas</Link>
                            <Link to={"/"} className={"logo"}>Fundacja i organizacje</Link>
                            <Link to={"/"} className={"logo"}>Kontakt</Link>
                        </div>
                    <h1 className={"header"}>
                        Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <div>
                        <Decoration/>
                    </div>
                    <Link to={"/"}>ODDAJ RZECZY</Link>
                    <Link to={"/"}>ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </section>
        </>
    )
}

export default Home;