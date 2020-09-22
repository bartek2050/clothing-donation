import React, {useState} from "react";
import Instagram from "../assets/Instagram.svg"
import Facebook from "../assets/Facebook.svg"
import Decoration from "./elements/Decoration";

function HomeContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    return (
        <>
            <section
                style={{
                    background: `red url(${process.env.PUBLIC_URL + '/Background-Contact-Form.jpg'}`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                }}
                id={"contact"}
                className={"contact__section"}>
                <div className={"contact__section-container"}>
                <div className={"contact__section-main"}>
                    <Decoration header={`Skontaktuj się z nami`}/>
                    <form className={"contact__section-form"}>
                        <div className={"contact__section-name"}>
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
                        </div>
                        <div className={"contact__section-textarea"}>
                            <label>
                                Wpisz swoją wiadomość
                                <textarea
                                    id="text"
                                    cols="50"
                                    rows="5"
                                    style={{resize: "none"}}
                                    value={text}
                                    placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                                    "ex ea commodo consequat."}
                                    onChange={event => setText(event.target.value)}
                                />
                            </label>
                        </div>
                        <input className={"contact__section-btn"} type="submit" value="Wyślij"/>
                    </form>
                </div>
                <footer className="contact__section-footer">
                    <p className="contact__section-copyrights">Copyright by Coders Lab</p>
                    <div className="contact__sections-socials">
                        <img alt={"facebook logo"} src={Facebook}/>
                        <img alt={"instagram logo"} src={Instagram}/>
                    </div>
                </footer>
                </div>
            </section>

        </>
    );
}

export default HomeContact;