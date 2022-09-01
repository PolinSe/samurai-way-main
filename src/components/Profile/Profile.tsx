import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, MessageType} from '../../redux/state';

type ProfilePropsType = {
    posts: Array<MessageType>
    newPostElement: string
    dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostElement={props.newPostElement}
                dispatch={props.dispatch}
            />
        </div>
    )
}