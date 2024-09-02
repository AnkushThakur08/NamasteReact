import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    {
        id: "heading-1",
        abc: "xyz",
    },
    "This is Hello from React inside the HTML"
);

console.log(heading); /* object */

const nestedStructure = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { class: "h1-tag" }, "This is a Ankush Thakur"),
        React.createElement("h2", {}, "This is a h2 Tag"),
    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { class: "h1-tag" }, "This is a h1 Tag"),
        React.createElement("h2", {}, "This is a h2 Tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedStructure);
