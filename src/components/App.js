import React from 'react';
import '../App.css';
import DataContainer from "./DataContainer";
import TopNav from "./TopNav";

function App() {
    return (
        <div className="App">
            <TopNav/>
            <div>
                <DataContainer/>
            </div>
        </div>
    );
}

export default App;
