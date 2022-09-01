import {ActionTypes, DialogsPageType, MessagesType} from './state';

export type DialogsActionTypes = addMessageACType | changeNewMessageTextACType

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessagesType = {id: 6, message: state.newMessageElement}
            state.messages.push(newMessage)
            state.newMessageElement = ''
            return state
        }
        case 'CHANGE-NEW-MESSAGE-TEXT': {
            state.newMessageElement = action.messageText
            debugger
            return state
        }
        default:
            return state
    }
}

type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

type changeNewMessageTextACType = ReturnType<typeof changeNewMessageTextAC>
export const changeNewMessageTextAC = (messageText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        messageText: messageText
    } as const
}