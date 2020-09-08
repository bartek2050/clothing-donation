import React from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import {Link} from "react-router-dom";


function HomeBeneficiary () {
    return(
        <section className={"homeBeneficiary__section"}>
        <h3>
            Komu pomagamy
        </h3>
        <Decoration className={"homeBeneficiary__decoration"} />
        <div className={"homeBeneficiary__navigation"}>
            <Link to={"/foundation"} className={"homeBeneficiary__navigation-element"}>Fundacjom</Link>
            <Link to={"/ngo"} className={"homeBeneficiary__navigation-element"}>Organizacjom pozarządowym</Link>
            <Link to={"/local"} className={"homeBeneficiary__navigation-element"}>Lokalnym zbiórkom</Link>
        </div>
            <p className={"homeBeneficiary__text"}>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
        </section>
    )
}

export default HomeBeneficiary;