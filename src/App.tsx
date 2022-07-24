import React, {ChangeEvent} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {changeNewMessageText, StateType} from './redux/state';

type AppType = {
    state: StateType
    addPost: (postText: string) => void
    changeNewPostText: (postText: string) => void
    addMessage: (messageText: string) => void
    changeNewMessageText: (messageText: string) => void
}
const App: React.FC<AppType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           changeNewMessageText={props.changeNewMessageText}
                       />}
                />
                <Route path={'/profile'}
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           changeNewPostText={props.changeNewPostText}
                       />}
                />
                {/*<Route path={'/news'} render={() => <News/>}/>*/}
                {/*<Route path={'/music'} render={() => <Music/>}/>*/}
                {/*<Route path={'/settings'} render={() => <Settings/>}/>*/}
            </div>
        </div>
    );
}

export default App;
