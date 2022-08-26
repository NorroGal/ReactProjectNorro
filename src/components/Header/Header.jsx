import React from "react";
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/98/e3/f8/98e3f8fbdac57fef3d6d239da334e924.png" alt="" />

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;