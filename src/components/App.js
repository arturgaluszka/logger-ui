import React from 'react';
import '../App.css';
import DataContainer from "./DataContainer";
import TopNav from "./TopNav";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <TopNav/>
            <div className={'main-container'}>
                <DataContainer/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
