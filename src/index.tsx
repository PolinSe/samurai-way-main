
import {state, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, changeNewMessageText, changeNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewPostText={changeNewPostText}
                addMessage={addMessage}
                changeNewMessageText={changeNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree()

subscribe(rerenderEntireTree)

