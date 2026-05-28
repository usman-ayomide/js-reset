const registry = [
    { id: 1, name: "Aisha", age: 20, grade: "A", active: true },
    { id: 2, name: "Emeka", age: 17, grade: "B", active: false },
    { id: 3, name: "Fatima", age: 22, grade: "A", active: true },
    { id: 4, name: "Tunde", age: 16, grade: "C", active: true },
    { id: 5, name: "Chidi", age: 19, grade: "B", active: false }
];

//some under 18
const under18 = registry.some(register => register.age < 18);
console.log({under18});

//every active
const active = registry.every(register => register.active === true);
console.log({active});

//find 1d3
const id3 = registry.find(register => register.id === 3);
console.log({id3});

//index 1d2
const index = registry.findIndex(register => register.id === 2);
console.log({index});

//filter + map grade A
const gradeA = registry
                        .filter(register => register.grade === "A" && register.active === true)
                        .map(register => register.name);
console.log({gradeA});

//splice 1d2
const splice = registry.splice(index, 1);
console.log(splice);

console.log(registry);