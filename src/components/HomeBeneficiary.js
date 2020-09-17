import React, {useState} from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import Foundation from "./Beneficiary/Foundation";
import Ngo from "./Beneficiary/Ngo";
import Local from "./Beneficiary/Local";

function HomeBeneficiary() {
    const [section, setSection] = useState(0);

    return (
        <section id={"beneficiary"} className={"homeBeneficiary__section"}>
            <h3>Komu pomagamy</h3>
            <Decoration className={"homeBeneficiary__decoration"}/>
            <div className={"homeBeneficiary__navigation"}>
                <button onClick={() => setSection(0)} activeClassName={"homeBeneficiary__active"}
                        className={"homeBeneficiary__navigation-element"}>Fundacjom
                </button>

                <button onClick={() => setSection(1)} activeClassName={"homeBeneficiary__active"}
                        className={"homeBeneficiary__navigation-element"}>Organizacjom pozarządowym
                </button>
                <button onClick={() => setSection(2)} activeClassName={"homeBeneficiary__active"}
                        className={"homeBeneficiary__navigation-element"}>Lokalnym zbiórkom
                </button>
            </div>
            <p className={"homeBeneficiary__text"}>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            { section === 0 && <Foundation /> }
            { section === 1 && <Ngo /> }
            { section === 2 && <Local /> }
        </section>
    )
}

export default HomeBeneficiary;