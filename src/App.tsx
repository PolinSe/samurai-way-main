import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from './redux/state';

type AppType = {
    state: StateType
}
const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                    messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    {/*<Route path={'/news'} render={() => <News/>}/>*/}
                    {/*<Route path={'/music'} render={() => <Music/>}/>*/}
                    {/*<Route path={'/settings'} render={() => <Settings/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
