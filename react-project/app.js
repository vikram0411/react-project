// const word = React.createElement("H2",{id:"heading"},"header do not touch");
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent_child =React.createElement("div" ,{id: "parent"},
    React.createElement("div",{id : "Child"} ,
        React.createElement("h1",{},"I am a H1 tag")
    )
)
root.render(parent_child);