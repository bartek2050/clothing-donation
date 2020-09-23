import React from "react";
import Signature from "../assets/Signature.svg";
import Decoration from "./elements/Decoration";

function HomeAboutUs() {
    return (
        <section id={"aboutUs"} className={"aboutUs__section"}>
            <div className={"aboutUs__text"}>
                <Decoration header={`O nas`}/>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <div className={"signature"}>
                    <img alt={"signature"} src={Signature}/>
                </div>
            </div>
            <div className={"aboutUs__image"}
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/People.jpg'}`,
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                 }}/>
        </section>
    )
}

export default HomeAboutUs;