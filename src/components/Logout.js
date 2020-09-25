import React from "react";
import Navigation from "./Navigation";
import Decoration from "./elements/Decoration";
import {Link} from "react-router-dom";

function Logout() {

    return (
        <>
            <Navigation/>
            <section className={"logoutSection"}>
                <Decoration header={`Wylogowanie nastąpiło pomyślnie!`}/>
                <Link to={"/"} className={"logoutSection__button"}>Strona główna</Link>
            </section>
        </>
    )
}

export default Logout;