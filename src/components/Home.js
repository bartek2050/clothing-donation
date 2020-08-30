import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <header className={"header"}>
            <div className={"header__box"}>
                <Link to={"/"} className={"logo"}>LOGO</Link>
            </div>
        </header>
    )
}

export default Home;