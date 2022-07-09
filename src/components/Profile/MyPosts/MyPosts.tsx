import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePageType} from '../../../redux/state';


export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map((p) => <Post id={p.id} message={p.message} likes={p.likes}/>)

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}