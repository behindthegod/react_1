import React, {useState} from "react";
import "./styles/App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/UI/navbar/Navbar";
import AppRouter from "./component/UI/appRouter/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <div>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
            }}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    )
}

export default App;