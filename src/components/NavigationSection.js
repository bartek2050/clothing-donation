import {Link, useHistory} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "./config/Auth";
import app from "./config/FirebaseConfig"
import Burger from "./elements/burgerNav/Burger";

function NavigationSection() {
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
                    <div className={"currentUser__section"}>
                        <div className={"currentUser__hello"}>
                            <p className={"helloEmail"}>Cześć, {email}</p>
                            <div className={"dot"}></div>
                        </div>
                        <div className={"currentUser__buttons"}>
                            <Link to={"/logowanie"} className={"register"}>Oddaj rzeczy</Link>
                            <button className={"logout"}
                                    onClick={(e) => logOut(e)}>Wyloguj
                            </button>
                        </div>
                    </div>
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
        <>
            <div className={"navigationMain__login"}>
                {userStatus()}
            </div>
            <Burger/>
        </>
    )
}

export default NavigationSection;