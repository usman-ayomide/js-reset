import fs from "fs/promises";


const students = [
    {"name": "Angela", "age": 22, "grade": 60},
    {"name": "Prisca", "age": 23, "grade": 99},
    {"name": "Ella", "age": 24, "grade": 20},
    {"name": "Liz", "age": 25, "grade": 40},
    {"name": "Mia", "age": 26, "grade": 50}
];
//read, parse, modify, stringify, write



async function studentData(){
    try{
        await fs.writeFile("students.json", JSON.stringify(students, null, 2), "utf8"); 
        const response = await fs.readFile("students.json", "utf8");
        const data = JSON.parse(response);

        const AStudents = data.filter(student => student.grade > 70);
        AStudents.forEach(student => {
            console.log(`Name: ${student.name} | Grade: ${student.grade}`);
        });

    }
    catch(error){
        console.error(error);
    }
}
studentData();