import React, {useState} from "react";
import {ReactComponent as Decoration} from "../assets/Decoration.svg";
import Instagram from "../assets/Instagram.svg"
import Facebook from "../assets/Facebook.svg"

function HomeContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    return (
        <>
            <section style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/Background-Contact-Form.jpg'}`}}  id={"contact"} className={"contact__section"}>
                <div className={"contact__section-picture"}>
                </div>
                <div className={"contact__section-form"}>
                    <h3>Skontaktuj się z nami</h3>
                    <Decoration className={"contact__section-decoration"}/>
                    <form>
                        <label>
                            Wpisz swoje imię
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder={"Krzysztof"}
                                onChange={event => setName(event.target.value)}/>
                        </label>
                        <label>
                            Wpisz swój email
                            <input
                                type="text"
                                id="email"
                                value={email}
                                placeholder={"abc@xyz.pl"}
                                onChange={event => setEmail(event.target.value)}/>
                        </label>
                        <label>
                            Wpisz swoją wiadomość
                            <textarea
                                type="text"
                                id="text"
                                cols="30"
                                rows="10"
                                value={text}
                                placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                                "ex ea commodo consequat."}
                                onChange={event => setText(event.target.value)}
                            />
                        </label>
                        <input type="submit" value="Wyślij"/>
                    </form>
                </div>
            </section>
            <footer className="contact__section-footer">
                <p className="contact__section-copyrights">Copyright by Coders Lab</p>
                <div className="contact__sections-socials">
                    <img alt={"facebook logo"} src={Facebook}/>
                    <img alt={"instagram logo"} src={Instagram}/>
                </div>
            </footer>
        </>
    );
}

export default HomeContact;