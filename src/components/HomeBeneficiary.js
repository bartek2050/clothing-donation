import React, {useState} from "react";
import Foundation from "./beneficiary/Foundation";
import Ngo from "./beneficiary/Ngo";
import Local from "./beneficiary/Local";
import Decoration from "./elements/Decoration";

function HomeBeneficiary() {
    const [section, setSection] = useState(0);

    return (
        <section id={"beneficiary"} className={"homeBeneficiary__section"}>
            <Decoration header={`Komu pomagamy`}/>
            <div className={"homeBeneficiary__navigation"}>
                <button onClick={() => setSection(0)} activeclassname={"homeBeneficiary__active"}
                        className={"homeBeneficiary__navigation-element"}>Fundacjom
                </button>

                <button onClick={() => setSection(1)} activeclassname={"homeBeneficiary__active"}
                        className={"homeBeneficiary__navigation-element"}>Organizacjom pozarządowym
                </button>
                <button onClick={() => setSection(2)} activeclassname={"homeBeneficiary__active"}
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