import React, {useEffect, useState} from "react";
import app from "./FirebaseConfig"
import LinearProgress from "@material-ui/core/LinearProgress";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: yellow[600],
            }
        }
    })

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
            console.log(currentUser)
        });
    }, [currentUser]);

    if(pending) {
        return <>
            <MuiThemeProvider theme={theme}>
            <p style={{textAlign: "center", fontSize: "1em", marginTop: "50vh", paddingBottom: "20px"}}>Loading...</p>
        <LinearProgress theme={theme} color="primary"/>
            </MuiThemeProvider>
        </>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;