import {Link, useHistory} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import React, {useContext} from "react";
import {AuthContext} from "./config/Auth";
import app from "./config/FirebaseConfig"

function Navigation() {
    const {currentUser} = useContext(AuthContext)
    const email = currentUser ? currentUser.email : null;
    const history = useHistory();
    const logOut = e => {
        e.preventDefault();
        if (currentUser) {
            app.auth().signOut().then(() => history.push('/wylogowano'))
        }
    }

    function userStatus() {
        if (currentUser) {
            return (
                <>
                    <p className={"helloEmail"}>Cześć, {email}</p>
                    <span className={"dot"}></span>
                    <Link to={"/"} className={"register"}>Oddaj rzeczy</Link>
                    <button className={"logout"}
                            onClick={(e) => logOut(e)}>Wyloguj</button>
                </>
            )
        }
        return (
            <>
                <Link to={"/logowanie"} className={"login"}>Zaloguj</Link>
                <Link to={"/rejestracja"} className={"register"}>Załóż konto</Link>
            </>
        )
    }

    return (
        <section className={"navigationMain"}>
            <div className={"navigationMain__login"}>
                {userStatus()}
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