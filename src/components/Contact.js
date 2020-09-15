import React from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";

function Contact () {
    return (
        <section className={"contact__section"}>
            <div className={"contact__section-picture"}>
            <img alt={"people"} src={process.env.PUBLIC_URL + '/Background-Contact-Form.jpg'}/>
            </div>
            <div className={"contact__section-form"}>
                <h3>Skontaktuj się z nami</h3>
                <Decoration className={"contact__section-decoration"}/>

            </div>
        </section>
    );
}

export default Contact;