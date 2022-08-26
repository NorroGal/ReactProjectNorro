import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Music.module.css";

const Music = () => {
    return (
        <div>
            <div>
                <img className={s.music_img} src="https://pic.rutubelist.ru/video/0b/78/0b785503a1cae5695b2c9b902176f469.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Music;