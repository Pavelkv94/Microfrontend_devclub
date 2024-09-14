import React from 'react';
import {RemoteAppWithErrorBoundary, RemoteSecondAppWithErrorBoundary} from "./moduleFederation/modules";


export default function App() {
    return (
        <div className="App" style={{border: "1ox solid red"}}>
            <h1>HOST REACT</h1>
            <RemoteAppWithErrorBoundary/>
            <RemoteSecondAppWithErrorBoundary />
        </div>
    );
}