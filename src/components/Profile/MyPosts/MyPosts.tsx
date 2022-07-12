import React, {RefObject} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MessageType} from '../../../redux/state';

type MyPostsType = {
    posts: Array<MessageType>
    addPost: (postText: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElements = props.posts.map((p) => <Post id={p.id} message={p.message} likes={p.likes}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }

    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}