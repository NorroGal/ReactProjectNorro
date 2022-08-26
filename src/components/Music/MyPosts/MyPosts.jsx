import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My photos
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' likeCount='3'/>
                <Post message="Its my life, its now for ever. and am gona be for ever" likeCount='21'/>
            </div>
        </div>
    );
}

export default MyPosts;