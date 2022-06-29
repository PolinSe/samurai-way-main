import React from "react";
import s from "./Post.module.css"

type PostType = {
    message: string
    likes: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="ava.jpeg" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likes}

            </div>
        </div>
    )
}