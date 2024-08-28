// SIMPLE ELEMENT

const heading = React.createElement("div", {}, "Hello From React");
console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Nested Elements
/*
   <div id="parent">
       <div id="child">
           <h1>This is H1 Tag</h1>
           <h2>This is H1 Tag</h2>
       </div>

       <div id="child2">
           <h1>This is H1 Tag</h1>
           <h2>This is H2 Tag</h2>
       </div>


   </div>

*/

const nestedElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is a H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
]);

console.log(nestedElement)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElement);
