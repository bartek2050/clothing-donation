import React from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import Shirt from "../assets/Icon-1.svg"
import Bag from "../assets/Icon-2.svg"
import Loupe from "../assets/Icon-3.svg"
import Loop from "../assets/Icon-4.svg"
import Button from "./elements/Button";



function HomeFourSteps() {
    return (
        <section id={"fourSteps"}>
            <h2 className={"fourSteps__header"}>
                Wystarczą 4 proste kroki
            </h2>
            <div className={"fourSteps__decoration"}>
                <Decoration/>
            </div>

            <div className={"fourSteps__section"}>
                <div className={"fourSteps__box"}>
                    <img className={"fourSteps__icon"} alt={"shirt"}  src={Shirt}/>
                    <div className={"fourSteps__tag"}>Wybierz rzeczy</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className={"fourSteps__box"}>
                    <img className={"fourSteps__icon"} alt={"bag"} src={Bag}/>
                    <div className={"fourSteps__tag"}>Spakuj je</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>skorzystaj z worków na śmieci</div>
                </div>
                <div className={"fourSteps__box"}>
                    <img className={"fourSteps__icon"} alt={"loupe"} src={Loupe}/>
                    <div className={"fourSteps__tag"}>Zdecyduj komu chcesz pomóc</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>wybierz zaufane miejsce</div>
                </div>
                <div className={"fourSteps__box"}>
                    <img className={"fourSteps__icon"} alt={"loop"} src={Loop}/>
                    <div className={"fourSteps__tag"}>Zamów kuriera</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <div className={"fourSteps__button"}>
                <Link to={"/logowanie"} className={"fourSteps__button-cta"}>
                    <Button text={`ODDAJ RZECZY`}/>
                </Link>
            </div>
        </section>
    )
}

export default HomeFourSteps;