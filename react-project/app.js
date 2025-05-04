// const word = React.createElement("H2",{id:"heading"},"header do not touch");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent_child =React.createElement("Div" ,{id: "parent"},
    React.createElement("Div",{id : "Child"} ,
        [React.createElement("H1",{},"I am a H1 tag"), React.createElement("H2",{},"I am a H1 tag")]
    )
)
root.render(parent_child);