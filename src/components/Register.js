import React, {useState} from "react";
import Navigation from "./Navigation";
import Decoration from "./elements/Decoration";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import app from "./config/FirebaseConfig"

function Register() {
    const {register, handleSubmit, errors, formState, watch} = useForm();
    const [matchPass, setMatchPass] = useState("");
    const history = useHistory();

    const onSubmit = (data, e) => {
        const {email, password} = data;
        app.auth().createUserWithEmailAndPassword(email, password)
            .catch (error => alert(error))
            .then (() => history.push("/"))
    }

    return (
        <>
            <Navigation/>
            <section className={"registerSection"}>
                <Decoration header={`Załóż konto`}/>
                <div className={"registerBox"}>
                    <form className={"register__formSection"} onSubmit={handleSubmit(onSubmit)}>
                        <div className={"register__formSection-credentials"}>
                            <label>
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    ref={register({
                                        required: {value: true, message: "Email jest wymagany"},
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Podany email jest nieprawidłowy!",
                                        },
                                    })}/>
                                {errors.email &&
                                <span className={"errorMessage"}>{errors.email.message}</span>}
                            </label>
                            <label>
                                Hasło
                                <input
                                    name="password"
                                    type="password"
                                    ref={register({
                                        required: {value: true, message: "Hasło jest wymagane"},
                                        minLength: {value: 6, message: "Podane hasło jest za krótkie"}
                                    })}
                                />
                                {errors.password &&
                                <span className={"errorMessage"}>{errors.password.message}</span>}
                            </label>
                            <label>
                                Powtórz Hasło
                                <input
                                    name="passwordRepeat"
                                    type="password"
                                    ref={register({
                                        required: {value: true, message: "Hasło jest wymagane"},
                                        minLength: {value: 6, message: "Podane hasło jest za krótkie"},
                                        validate: value => {
                                            if (value === watch("password")) {
                                                return true;
                                            } else {
                                                setMatchPass(prevState => "Hasło nie pasuje");
                                            }
                                        }
                                    })}
                                />
                                <span className={"errorMessage"}>{matchPass}</span>
                                {errors.password &&
                                <span className={"errorMessage"}>{errors.passwordRepeat.message}</span>}
                            </label>
                        </div>
                        <div className={"register__formSection-buttons"}>
                            <Link to={"/logowanie"} className={"register__formSection-button"}>Zaloguj</Link>
                            <button className={"register__formSection-buttonRegister"}
                                    type="submit">
                                {formState.isSubmitting ? "" : "Załóż konto"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register;