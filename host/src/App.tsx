import React, { useState } from "react";
import { RemoteAppWithErrorBoundary, RemoteSecondAppWithErrorBoundary, SingleRemoteComponentAppWithErrorBoundary } from "./moduleFederation/modules";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="host" style={{ border: "1ox solid red" }}>
      <h1>HOST REACT</h1>
      <div>
        <button onClick={() => setCounter((prev) => prev + 1)}>Incrtement +</button>
      </div>
      <div className="wrapper">
        <RemoteAppWithErrorBoundary counter={counter} />
        <RemoteSecondAppWithErrorBoundary />
        <SingleRemoteComponentAppWithErrorBoundary />
      </div>
    </div>
  );
}
