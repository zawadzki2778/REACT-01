import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you?' likeCount='5'/>
                <Post message='Its my first post)' likeCount='17'/>
            </div>
        </div>
    )
};

export default MyPosts;