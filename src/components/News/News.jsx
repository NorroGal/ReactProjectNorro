import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./News.module.css";

const News = () => {
    return (
        <div>
            <div>
                <img className={s.news_img} src="https://pic.rutubelist.ru/video/0b/78/0b785503a1cae5695b2c9b902176f469.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default News;