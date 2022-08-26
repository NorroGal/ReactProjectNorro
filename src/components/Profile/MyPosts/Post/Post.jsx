import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://coop-land.ru/uploads/posts/2020-06/1592915877_bezimeni-1.jpg" alt="" />
            <div>
                {props.message}
            </div>
            <div>
                <span>Like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post; 