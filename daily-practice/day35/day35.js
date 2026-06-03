import fs from "fs/promises";

async function updateScores(){
    try{
        const fileData = await fs.readFile("data.json", "utf8");
        const students = JSON.parse(fileData)

        students.users.forEach(student => {
            student.score += 10;

            if(student.score >= 90) student.grade = "A";
            else if(student.score >= 75) student.grade = "B";
            else student.grade = "C";
            console.log("Update")
        });

        await fs.writeFile("data.json", JSON.stringify(students, null, 2), "utf8");

    } catch (err){
        console.log(err);
    }
}
updateScores();