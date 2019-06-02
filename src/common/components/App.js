import React from 'react';
import '../../App.css';
import DataContainer from "./../../pojo/components/DataContainer";
import TopNav from "./TopNav";
import Footer from "./Footer";
import {Route} from "react-router";
import Log from "./../../log/components/Log";

function App() {
    return (
        <div className="App">
            <TopNav/>
            <div className={'main-container'}>
                <Route exact path='/' component={DataContainer}/>
                <Route path='/log' component={Log}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
