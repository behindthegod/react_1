import React, {useContext} from 'react';
import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type='text' autoComplete="username" placeholder='Please, enter your login'/>
                <MyInput type='password' autoComplete="current-password" placeholder='Please, enter your password'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;