import React from "react";
import NavigationSection from "./NavigationSection";
import Decoration from "./elements/Decoration";
import {Link} from "react-router-dom";

function Logout() {

    return (
        <>
            <NavigationSection/>
            <section className={"logoutSection"}>
                <Decoration header={`Wylogowanie nastąpiło pomyślnie!`}/>
                <Link to={"/"} className={"logoutSection__button"}>Strona główna</Link>
            </section>
        </>
    )
}

export default Logout;