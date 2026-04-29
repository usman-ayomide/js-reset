//Objects
const houseKeeper1 = {
    name: "Lia",
    age: 23,
    workExp: "yes",
    cleaning: ["bathroom", "Lobby", "bedroom"]
}
console.log(houseKeeper1.name);

//Constructor and Methods
function BellBoy (name, age, workPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = workPermit;
    this.language = languages;
}
let bellBoy1 = new BellBoy("Timmy", 19, True, ["English", "Spanish", "Latin"]);

function HouseKeeper (name, age, workExp, cleaning){
    this.name = name;
    this.age = age;
    this.workExp = workExp;
    this.cleaning = cleaning;
    this.clean = function(){
        alert("Where should i clean?");
        alert("Cleaning is in Progress!");
    }
}

let houseKeeper2 = new HouseKeeper("Ava", 20, "No", ["Reception", "Pool", "Lobby"]);