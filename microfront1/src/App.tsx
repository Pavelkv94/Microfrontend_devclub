import React from "react";

export default function App({counter}: any) {
  return (
    <div className="mf1" style={{ border: "1px solid red" }}>
      <h1>Micro FRONt REACT </h1>
      <p><b>{counter}</b></p>
    </div>
  );
}
