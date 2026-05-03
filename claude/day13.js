const students = [
    { name: "Aisha", scores: [80, 92, 78, 95] },
    { name: "Emeka", scores: [60, 55, 70, 65] },
    { name: "Fatima", scores: [95, 98, 92, 100] },
    { name: "Tunde", scores: [40, 55, 45, 50] }
];

let gradeBook = students.map(function(student){

    let avgScore = student.scores.reduce((sum, val) => sum + val, 0) / student.scores.length;

    if(avgScore >= 90){
        return {name: student.name, average: avgScore, grade: "A"};
    }
    else if(avgScore >= 75){
       return {name: student.name, average: avgScore, grade: "B"}; 
    }
    else if(avgScore >= 60 && avgScore <= 74){
        return {name: student.name, average: avgScore, grade: "C"}; 
    }
    else{
        return {name: student.name, average: avgScore, grade: "F"}; 
    }

});

gradeBook.forEach(function(student){
    console.log(`${student.name}: average ${student.average} - Grade ${student.grade}`);
});

console.log(gradeBook);