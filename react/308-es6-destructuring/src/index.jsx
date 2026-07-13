// CHALLENGE: uncomment the code below and see the car stats rendered
import ReactDOM from "react-dom/client";
//import animals, { useAnimals } from "./data";
import cars from "./practice";

//const [cat, dog] = animals;
//const {name, sound, feeding: {food, water}} = cat;
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
//console.log(food);


const [tesla, honda] = cars;
const {model, coloursByPopularity, speedStats: {topSpeed, zeroToSixty}} = [tesla, honda];

console.log(topSpeed);
// console.log(tesla, honda)
// console.log(cars)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);