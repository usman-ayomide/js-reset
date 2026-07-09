import ReactDOM from "react-dom/client";
import emojipedia from "./emojipedia";

//var numbers = [3, 56, 2, 48, 5];

const meaning = emojipedia.map(emoji => {return emoji.meaning});
console.log(meaning);

const char = meaning.map(mean => mean.slice(0, 100));

console.log(char)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <App />
);