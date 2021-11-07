import React, {useEffect, useState} from "react";
import "./styles/App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/UI/navbar/Navbar";
import AppRouter from "./component/UI/appRouter/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])

    return (
        <div>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
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