const parent=React.createElement(
    "div",{id:"parent"},React.createElement(
        "div",{id:"child"},
        [React.createElement("h1",{id:"heading"},"hello ji"),
        React.createElement("h2",{id:"xyx"},"kaise ho")]
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);