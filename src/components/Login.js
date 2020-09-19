import React, {useState} from "react";
import Navigation from "./Navigation";
import Decoration from "./elements/Decoration";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Navigation/>
            <section className={"loginSection"}>
                <Decoration header={`Zaloguj się`}/>
                <div className={"loginBox"}>
                    <form className={"login__formSection"}>
                        <div className={"login__formSection-credentials"}>
                            <label>
                                Email
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}/>
                            </label>
                            <label>
                                Hasło
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}/>
                            </label>
                        </div>
                        <div className={"login__formSection-buttons"}>
                            <input type="submit" value="Załóż konto"/>
                            <input type="submit" value="Zaloguj się"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;