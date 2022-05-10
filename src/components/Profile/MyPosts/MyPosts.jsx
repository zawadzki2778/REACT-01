import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { posts } from "../../..";
const MyPosts = () => {

    let postsElements = posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount} />);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
