import React from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import {ReactComponent as Shirt} from "../assets/Icon-1.svg";
import {ReactComponent as Bag} from "../assets/Icon-2.svg";
import {ReactComponent as Loupe} from "../assets/Icon-3.svg";
import {ReactComponent as Loop} from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";


function HomeFourSteps() {
    return (
        <>
            <h2 className={"fourSteps__header"}>
                Wystarczą 4 proste kroki
            </h2>
            <div className={"fourSteps__decoration"}>
                <Decoration/>
            </div>

            <div className={"fourSteps__section"}>
                <div className={"fourSteps__box"}>
                    <div className={"fourSteps__icon"}><Shirt/></div>
                    <div className={"fourSteps__tag"}>Wybierz rzeczy</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className={"fourSteps__box"}>
                    <div className={"fourSteps__icon"}><Bag/></div>
                    <div className={"fourSteps__tag"}>Spakuj je</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>skorzystaj z worków na śmieci</div>
                </div>
                <div className={"fourSteps__box"}>
                    <div className={"fourSteps__icon"}><Loupe/></div>
                    <div className={"fourSteps__tag"}>Zdecyduj komu chcesz pomóc</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>wybierz zaufane miejsce</div>
                </div>
                <div className={"fourSteps__box"}>
                    <div className={"fourSteps__icon"}><Loop/></div>
                    <div className={"fourSteps__tag"}>Zamów kuriera</div>
                    <div className={"fourSteps__line"}></div>
                    <div className={"fourSteps__text"}>kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <div className={"fourSteps__button"}>
                <Link to={"/logowanie"} className={"fourSteps__button-cta"}>ODDAJ RZECZY</Link>
            </div>
        </>
    )
}

export default HomeFourSteps;