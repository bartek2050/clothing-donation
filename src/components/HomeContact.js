import React from "react";
import {useForm} from "react-hook-form";
import Instagram from "../assets/Instagram.svg"
import Facebook from "../assets/Facebook.svg"
import Decoration from "./elements/Decoration";


function HomeContact() {
    const {register, handleSubmit, errors, formState} = useForm();

    const onSubmit = data => {
        return fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <>
            <section
                style={{
                    background: `url(${process.env.PUBLIC_URL + '/Background-Contact-Form.jpg'}`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                }}
                id={"contact"}
                className={"contact__section"}>
                <div className={"contact__section-container"}>
                    <div className={"contact__section-main"}>
                        <Decoration header={`Skontaktuj się z nami`}/>

                        <form className={"contact__section-form"} onSubmit={handleSubmit(onSubmit)}>
                            {formState.isSubmitSuccessful && (
                                <div className="successMessage">
                                    Wiadomość została wysłana!<br/>
                                    Wkrótce się skontaktujemy
                                </div>
                            )}
                            <div className={"contact__section-name"}>
                                <label>
                                    Wpisz swoje imię
                                    <input
                                        name={"name"}
                                        ref={register({
                                            required: {value: true, message: "Imie jest wymagane"},
                                            minLength: {value: 3, message: "Imie jest za krótkie"},
                                            pattern: {value: /^[A-Za-z]+$/i, message: "Imie jest niepoprawne"},
                                        })
                                        }
                                        placeholder={"Krzysztof"}/>
                                    {errors.name &&
                                    <span className={"errorMessage"}>{errors.name.message}</span>}
                                </label>
                                <label>
                                    Wpisz swój email
                                    <input
                                        name={"email"}
                                        ref={register({
                                            required: {value: true, message: "Email jest wymagany"},
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Wpisz poprawny adres email",
                                            },
                                        })}
                                        placeholder={"abc@xyz.pl"}/>
                                    {errors.email && <span className={"errorMessage"}>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className={"contact__section-textarea"}>
                                <label>
                                    Wpisz swoją wiadomość
                                    <textarea
                                        name={"textarea"}
                                        ref={register({
                                            required: {
                                                value: true,
                                                message: "Zostaw wiadomość"
                                            },
                                            minLength: {
                                                value: 120,
                                                message: "Wiadomość musi mieć co najmniej 120 znaków"
                                            }
                                        })}
                                        id="text"
                                        cols="50"
                                        rows="5"
                                        style={{resize: "none"}}
                                        placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                                        "ut aliquip ex ea commodo consequat."}
                                    />
                                    {errors.textarea &&
                                    <span className={"errorMessage"}>{errors.textarea.message}</span>}
                                </label>
                            </div>
                            <button className={"contact__section-btn"} type="submit"
                                    disabled={formState.isSubmitSuccessful}>
                                {formState.isSubmitSuccessful ? 'Wysłane :)' : 'Wyślij'}
                            </button>
                        </form>

                    </div>
                    <footer className="contact__section-footer">
                        <div className={"contact__section-empty"}> </div>
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