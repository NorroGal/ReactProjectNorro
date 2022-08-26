import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Settings.module.css";

const Settings = () => {
    return (
        <div>
            <div>
                <img className={s.settings_img} src="https://hotels.sletat.ru/i/f/14997_33.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Settings;