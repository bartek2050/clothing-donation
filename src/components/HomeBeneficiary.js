import React from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import {NavLink} from "react-router-dom";


function HomeBeneficiary () {
    return(
        <section className={"homeBeneficiary__section"}>
        <h3>
            Komu pomagamy
        </h3>
        <Decoration className={"homeBeneficiary__decoration"} />
        <div className={"homeBeneficiary__navigation"}>
            <NavLink to={"/foundation"} activeClassName={"homeBeneficiary__active"}
                     className={"homeBeneficiary__navigation-element"}>Fundacjom
            </NavLink>
            <NavLink to={"/ngo"} activeClassName={"homeBeneficiary__active"}
                     className={"homeBeneficiary__navigation-element"}>Organizacjom pozarządowym
            </NavLink>
            <NavLink to={"/local"} activeClassName={"homeBeneficiary__active"}
                     className={"homeBeneficiary__navigation-element"}>Lokalnym zbiórkom
            </NavLink>
        </div>
            <p className={"homeBeneficiary__text"}>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
        </section>
    )
}

export default HomeBeneficiary;