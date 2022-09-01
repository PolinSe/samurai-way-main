import {ActionTypes, MessageType, ProfilePageType} from './state';

export type ProfileActionTypes = addPostACType | changeNewPostTextACType

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
    debugger
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: MessageType = {id: 5, message: state.newPostElement, likes: 0}
            state.posts.push(newPost)
            state.newPostElement = ''
            return state
        }
        case 'CHANGE-NEW-POST-TEXT': {
            debugger
            state.newPostElement = action.postText
            return state
        }
        default:
            return state
    }
}

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

type changeNewPostTextACType = ReturnType<typeof changeNewPostTextAC>
export const changeNewPostTextAC = (postText: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        postText: postText
    } as const
}