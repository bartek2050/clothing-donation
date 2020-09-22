import {Link} from "react-router-dom";
import React from "react";
import Button from "./elements/Button";
import Navigation from "./Navigation";
import Decoration from "./elements/Decoration";

function HomeHeader() {
    return (
            <section className={"homeSection"}>
                <div className={"homeSection__image"}>
                    <img alt={"homeImage"} src={process.env.PUBLIC_URL + '/Home-Hero-Image.jpg'}/>
                </div>

                <div className={"homeSection__about"}>
                    <div className={"homeSection__navigation"}><Navigation/></div>
                    <Decoration>
                        <h3 className={"decorHeader"}>Zacznij pomagać!<br/>
                            Oddaj niechciane rzeczy w zaufane ręce</h3>
                        </Decoration>
                    <div className={"cta__mainSection"}>
                        <Link to={"/logowanie"} className={"cta__button"}>
                            <Button text={`ODDAJ RZECZY`}/>
                        </Link>
                        <Link to={"/logowanie"} className={"cta__button"}>
                            <Button text={`ZORGANIZUJ ZBIÓRKĘ`}/>
                        </Link>
                    </div>
                </div>
            </section>
    )
}

export default HomeHeader;