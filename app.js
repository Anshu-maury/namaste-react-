// const heading = React.createElement("h1", {id: "heading"}, "hello world from react")
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"Im h1 tag"),
React.createElement("h2",{},"Im h1 tag")

])
);
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(root)        