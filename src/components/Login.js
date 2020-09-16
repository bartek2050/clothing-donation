import React, {useState} from "react";
import Decoration from "../assets/Decoration.svg"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section>
            <h2>Zaloguj się</h2>
            <img alt={"decoration"} src={Decoration}/>
            <div className={"loginBox"}>
                <form>
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
                    <input type="submit" value="Załóż konto"/>
                    <input type="submit" value="Zaloguj się"/>
                </form>
            </div>
        </section>
    )
}

export default Login;