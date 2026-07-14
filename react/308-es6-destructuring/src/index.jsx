import ReactDOM from "react-dom/client";
//import animals, { useAnimals } from "./data";
import cars from "./practice";

//const [cat, dog] = animals;
//const {name, sound, feeding: {food, water}} = cat;
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
//console.log(food);




function getStats(car){
    const {
        model,
        speedStats: {topSpeed},
        coloursByPopularity: [topColour]
    } = car;
    return {model, topSpeed, topColour};
}

const honda = getStats(cars[0]);
const tesla = getStats(cars[1]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <table>
        <thead>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Color</th>
            </tr>        
        </thead>
        
        <tbody>
            <tr>
                <td>{tesla.model}</td>
                <td>{tesla.topSpeed}</td>
                <td>{tesla.topColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{honda.topSpeed}</td>
                <td>{honda.topColour}</td>
            </tr>
        </tbody>
    </table>
);

//const [honda, tesla] = cars;

// const {
//     speedStats: {topSpeed: hondaTopSpeed},
//     coloursByPopularity: [hondaTopColour]
// } = honda;

// const {
//     speedStats: {topSpeed: teslaTopSpeed},
//     coloursByPopularity: [teslaTopColour]
// } = tesla;

// root.render(
//   <table>
//     <thead>
//         <tr>
//         <th>Brand</th>
//         <th>Top Speed</th>
//         <th>Top Color</th>
//         </tr>        
//     </thead>

//     <tbody>
//         <tr>
//         <td>{tesla.model}</td>
//         <td>{teslaTopSpeed}</td>
//         <td>{teslaTopColour}</td>
//         </tr>
//         <tr>
//         <td>{honda.model}</td>
//         <td>{hondaTopSpeed}</td>
//         <td>{hondaTopColour}</td>
//         </tr>
//     </tbody>
        
//   </table>
// );