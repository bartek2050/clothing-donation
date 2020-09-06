import React from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import {ReactComponent as Signature} from "../assets/Signature.svg";

function HomeAboutUs () {
    return (
        <section className={"aboutUs__section"}>
            <div className={"aboutUs__text"}>
                <h3>O nas</h3>
                <Decoration className={"aboutUs__text-decoration"}/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <div className={"signature"}>
                <Signature/>
                </div>
            </div>
            <div className={"aboutUs__image"}>
                <img alt={"people"} src={process.env.PUBLIC_URL + '/People.jpg'}/>
            </div>


        </section>
    )
}

export default HomeAboutUs;